import { db } from './firebase-config.js';
import { collection, onSnapshot, query, orderBy, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
    const eventsLog = document.getElementById('events-log');
    const simulateEventBtn = document.getElementById('simulate-event-btn');

    if (eventsLog) {
        const eventsCollection = collection(db, 'runtime-events');
        const q = query(eventsCollection, orderBy('timestamp', 'desc'));

        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    const eventData = change.doc.data();
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td>${new Date(eventData.timestamp.seconds * 1000).toLocaleString()}</td>
                        <td>${eventData.type}</td>
                        <td>${eventData.source_ip}</td>
                        <td><span class="status-${eventData.status}">${eventData.status}</span></td>
                    `;
                    eventsLog.prepend(newRow);
                }
            });
        });
    }

    if (simulateEventBtn) {
        simulateEventBtn.addEventListener('click', () => {
            const eventTypes = ['SSRF', 'RCE', 'Path Traversal', 'Prompt Injection'];
            const randomType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
            const randomIp = `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;

            addDoc(collection(db, 'runtime-events'), {
                type: randomType,
                source_ip: randomIp,
                status: 'blocked',
                timestamp: serverTimestamp()
            }).then(() => {
                console.log('Simulated event added.');
            }).catch(error => {
                console.error('Error adding simulated event:', error);
            });
        });
    }
});
