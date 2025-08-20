import { db } from './firebase-config.js';
import { collection, onSnapshot, query, orderBy, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
    const eventsLog = document.getElementById('ai-events-log');
    const simulateEventBtn = document.getElementById('simulate-ai-event-btn');

    if (eventsLog) {
        const eventsCollection = collection(db, 'ai-gate-events');
        const q = query(eventsCollection, orderBy('timestamp', 'desc'));

        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    const eventData = change.doc.data();
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td>${new Date(eventData.timestamp.seconds * 1000).toLocaleString()}</td>
                        <td>${eventData.model_id}</td>
                        <td>${eventData.event_type}</td>
                        <td>${eventData.details}</td>
                    `;
                    eventsLog.prepend(newRow);
                }
            });
        });
    }

    if (simulateEventBtn) {
        simulateEventBtn.addEventListener('click', () => {
            const eventTypes = ['Prompt Injection', 'PII Redacted', 'Harmful Content'];
            const modelIds = ['gpt-4', 'claude-2', 'gemini-pro'];
            const randomType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
            const randomModel = modelIds[Math.floor(Math.random() * modelIds.length)];

            addDoc(collection(db, 'ai-gate-events'), {
                model_id: randomModel,
                event_type: randomType,
                details: `Detected and blocked potential ${randomType.toLowerCase()}.`,
                timestamp: serverTimestamp()
            }).then(() => {
                console.log('Simulated AI event added.');
            }).catch(error => {
                console.error('Error adding simulated AI event:', error);
            });
        });
    }
});
