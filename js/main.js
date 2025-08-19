document.addEventListener('DOMContentLoaded', () => {
    console.log("Cyberfus website loaded.");

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isVisible = answer.style.display === 'block';
            // This is a simple accordion, we can improve it to close others
            if (isVisible) {
                answer.style.display = 'none';
                item.classList.remove('active');
            } else {
                answer.style.display = 'block';
                item.classList.add('active');
            }
        });
    });

    // Section reveal on scroll
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(elem => {
        revealObserver.observe(elem);
    });

    // Hero Threat Console Animation
    const consoleContent = document.querySelector('.console-content');
    if (consoleContent) {
        const lines = [
            { text: "Initializing Cyberfus runtime...", type: "info" },
            { text: "Scanning dependencies for vulnerabilities...", type: "info" },
            { text: "Found 0 critical issues.", type: "success" },
            { text: "Monitoring traffic on port 443...", type: "info" },
            { text: "[BLOCKED] Prompt injection attempt from 23.10.5.12", type: "danger" },
            { text: "Payload: 'Ignore previous instructions...'", type: "danger" },
            { text: "[SANITIZED] PII detected in LLM output.", type: "warn" },
            { text: "[THROTTLED] Anomalous egress traffic to evil.com", type: "warn" },
            { text: "All systems nominal.", type: "success" }
        ];

        let lineIndex = 0;
        function typeLine() {
            if (lineIndex < lines.length) {
                const line = lines[lineIndex];
                const p = document.createElement('p');
                p.className = line.type;
                p.innerHTML = `<span class="log-indicator"></span>${line.text}`;
                consoleContent.appendChild(p);
                consoleContent.scrollTop = consoleContent.scrollHeight;
                lineIndex++;
                setTimeout(typeLine, Math.random() * 1500 + 500);
            } else {
                // loop
                setTimeout(() => {
                    consoleContent.innerHTML = '';
                    lineIndex = 0;
                    typeLine();
                }, 5000);
            }
        }
        typeLine();
    }

    // Testimonials Carousel
    const testimonials = document.querySelectorAll('.testimonial-card');
    const nextBtn = document.getElementById('next-testimonial');
    const prevBtn = document.getElementById('prev-testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });

        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
    }
});
