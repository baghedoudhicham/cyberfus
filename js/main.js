document.addEventListener('DOMContentLoaded', () => {
    console.log("Cyberfus website loaded.");

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        const applyTheme = (theme) => {
            if (theme === 'light') {
                body.classList.add('light-theme');
            } else {
                body.classList.remove('light-theme');
            }
        };

        themeToggle.addEventListener('click', () => {
            const isLight = body.classList.contains('light-theme');
            if (isLight) {
                localStorage.setItem('theme', 'dark');
                applyTheme('dark');
            } else {
                localStorage.setItem('theme', 'light');
                applyTheme('light');
            }
        });

        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            applyTheme(savedTheme);
        } else if (prefersDark) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    }


    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                const isVisible = answer.style.display === 'block';
                // Close all other answers
                faqItems.forEach(otherItem => {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer && otherAnswer !== answer) {
                        otherAnswer.style.display = 'none';
                        otherItem.classList.remove('active');
                    }
                });

                if (isVisible) {
                    answer.style.display = 'none';
                    item.classList.remove('active');
                } else {
                    answer.style.display = 'block';
                    item.classList.add('active');
                }
            });
        }
    });

    // Section reveal on scroll
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (revealElements.length > 0) {
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
    }

    // Testimonials Carousel
    const testimonials = document.querySelectorAll('.testimonial-card');
    const nextBtn = document.getElementById('next-testimonial');
    const prevBtn = document.getElementById('prev-testimonial');
    if (testimonials.length > 0 && nextBtn && prevBtn) {
        let currentTestimonial = 0;

        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.classList.remove('active');
                if (i === index) {
                    testimonial.classList.add('active');
                }
            });
        }

        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });

        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        });

        showTestimonial(0);
    }

    // Blog Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogPosts = document.querySelectorAll('.blog-post-card');

    if (filterButtons.length > 0 && blogPosts.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.dataset.filter;

                blogPosts.forEach(post => {
                    if (filter === 'all' || post.dataset.tags.includes(filter)) {
                        post.style.display = 'block';
                    } else {
                        post.style.display = 'none';
                    }
                });
            });
        });
    }

    /* ===== Threat Graph Console (TGX) ===== */
    (() => {
      const canvas = document.getElementById('tgx-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { alpha: true });

      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const { clientWidth:w, clientHeight:h } = canvas;
        canvas.width = Math.max(800, w * dpr);
        canvas.height = Math.max(450, h * dpr);
        ctx.setTransform(dpr,0,0,dpr,0,0);
      };
      new ResizeObserver(resize).observe(canvas);
      resize();

      const NODES = 28;
      const nodes = Array.from({length:NODES}, (_,i) => ({
        id:i, x: Math.random() * canvas.clientWidth, y: Math.random() * canvas.clientHeight,
        r: 3.5 + Math.random() * 2.5, vx: (Math.random()-0.5) * 0.25, vy: (Math.random()-0.5) * 0.25,
        role: i<3 ? 'edge' : (i%7===0?'model':'svc')
      }));
      const edges = [];
      for (let i=0;i<NODES;i++){
        for (let j=i+1;j<NODES;j++){
          if (Math.random() < 0.07) edges.push({a:i,b:j, heat:0, danger:false});
        }
      }

      const C = getComputedStyle(document.documentElement);
      const CYAN = C.getPropertyValue('--accent-cyan').trim() || '#30E7FF';
      const LIME = C.getPropertyValue('--accent-lime').trim() || '#C5FF3A';
      const DANGER = C.getPropertyValue('--danger').trim() || '#FF5C5C';
      const WARN = C.getPropertyValue('--warn').trim() || '#FFB020';

      let raf, onScreen = true, t = 0;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      function drawBackground() {
        const { width:w, height:h } = canvas;
        ctx.save();
        ctx.globalAlpha = 0.10;
        ctx.strokeStyle = '#0F1A22';
        const step = 40;
        for (let x=0;x<w;x+=step){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke(); }
        for (let y=0;y<h;y+=step){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke(); }
        ctx.restore();

        if (!prefersReduced){
          const blob = (cx,cy,r,clr,a) => {
            const g = ctx.createRadialGradient(cx,cy,0,cx,cy,r);
            g.addColorStop(0, clr); g.addColorStop(1, 'transparent');
            ctx.globalAlpha = a; ctx.fillStyle = g; ctx.beginPath();
            ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fill();
          };
          blob((w*0.25)+Math.sin(t*0.0012)*80, (h*0.3)+Math.cos(t*0.001)*60, 180, CYAN+'33', 0.6);
          blob((w*0.8)+Math.cos(t*0.0013)*60, (h*0.7)+Math.sin(t*0.0009)*80, 220, LIME+'33', 0.5);
        }
      }

      function stepNodes() {
        const { clientWidth:w, clientHeight:h } = canvas;
        nodes.forEach(n => {
          n.x += n.vx; n.y += n.vy;
          if (n.x<20 || n.x>w-20) n.vx*=-1;
          if (n.y<20 || n.y>h-20) n.vy*=-1;
        });
      }

      function drawEdges() {
        ctx.lineWidth = 1;
        edges.forEach(e => {
          const A = nodes[e.a], B = nodes[e.b];
          const dx=B.x-A.x, dy=B.y-A.y;
          const dist = Math.hypot(dx,dy);
          if (dist > 340) return;

          ctx.globalAlpha = 0.25 + Math.max(0, 0.25*Math.sin((t/500)+(e.a*0.3)));
          ctx.strokeStyle = CYAN;
          ctx.beginPath(); ctx.moveTo(A.x,A.y); ctx.lineTo(B.x,B.y); ctx.stroke();

          if (e.heat>0){
            ctx.save();
            const col = e.danger ? DANGER : WARN;
            ctx.globalAlpha = Math.min(0.9, e.heat);
            ctx.strokeStyle = col;
            ctx.lineWidth = 2;
            ctx.shadowBlur = 12; ctx.shadowColor = col;
            ctx.beginPath(); ctx.moveTo(A.x,A.y); ctx.lineTo(B.x,B.y); ctx.stroke();
            ctx.restore();
            e.heat *= 0.96;
            if (e.heat < 0.02){ e.heat = 0; e.danger = false; }
          }
        });
        ctx.globalAlpha = 1; ctx.lineWidth = 1;
      }

      function drawNodes() {
        nodes.forEach(n => {
          ctx.save();
          let glow = n.role==='edge'? CYAN : (n.role==='model'? LIME : '#7AA2C7');
          ctx.shadowBlur = 12; ctx.shadowColor = glow+'';
          ctx.fillStyle = glow;
          ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2); ctx.fill();

          ctx.shadowBlur = 0;
          ctx.fillStyle = 'rgba(10,15,22,.85)';
          ctx.beginPath(); ctx.arc(n.x,n.y, n.r*0.55, 0, Math.PI*2); ctx.fill();
          ctx.restore();
        });
      }

      function frame(now) {
        t = now;
        const { clientWidth:w, clientHeight:h } = canvas;
        ctx.clearRect(0,0,w,h);
        drawBackground();
        stepNodes();
        drawEdges();
        drawNodes();
        if (onScreen) raf = requestAnimationFrame(frame);
      }

      const io = new IntersectionObserver(([e]) => {
        onScreen = !!e.isIntersecting;
        if (onScreen && !raf) raf = requestAnimationFrame(frame);
        else { cancelAnimationFrame(raf); raf = null; }
      }, { threshold: 0.05 });
      io.observe(canvas);

      const logUl = document.getElementById('tgx-log-list');
      const MAX_LOG = 10;
      const events = [
        { sev:'danger', msg:'Prompt injection blocked', rule:'prompt-injection', dur:'<1ms' },
        { sev:'warn',   msg:'SSRF attempt throttled', rule:'ssrf', dur:'2ms' },
        { sev:'ok',     msg:'Secrets rotated successfully', rule:'secrets-rotate', dur:'18ms' },
        { sev:'warn',   msg:'Path traversal denied', rule:'path-traversal', dur:'1ms' },
        { sev:'ok',     msg:'PII redacted in LLM output', rule:'pii-output', dur:'3ms' },
      ];

      function timeStamp(){ return new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit'}); }

      function pushLog({ sev, msg, rule, dur }) {
        const li = document.createElement('li');
        const pill = document.createElement('span');
        pill.className = `tgx-pill tgx-pill--${sev}`;
        pill.textContent = sev === 'danger' ? 'blocked' : (sev==='warn'?'throttled':'ok');

        const wrap = document.createElement('div');
        wrap.innerHTML = `<div class="tgx-msg">${msg} <span style="opacity:.6">(${rule})</span></div>
                          <div class="tgx-time">${timeStamp()} • ${dur}</div>`;
        li.appendChild(pill); li.appendChild(wrap);
        if(logUl) {
            logUl.prepend(li);
            while (logUl.children.length > MAX_LOG) logUl.lastElementChild.remove();
        }
      }

      function flare(sev='warn') {
        if (!edges.length) return;
        const e = edges[(Math.random()*edges.length)|0];
        e.heat = sev==='danger' ? 0.9 : 0.6;
        e.danger = sev==='danger';
      }

      if (!prefersReduced){
        setInterval(() => {
          const ev = events[(Math.random()*events.length)|0];
          pushLog(ev);
          flare(ev.sev);
        }, 2200);
      } else {
        pushLog(events[0]); pushLog(events[2]); pushLog(events[4]);
      }

      window.CyberfusThreatConsole = {
        log: (ev) => { pushLog(ev); flare(ev.sev || 'warn'); },
        coolAll: () => edges.forEach(e => e.heat = 0),
      };
    })();
});
