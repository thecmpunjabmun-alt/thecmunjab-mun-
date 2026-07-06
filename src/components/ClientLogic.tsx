'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientLogic() {
    const pathname = usePathname();

    useEffect(() => {
        // Run scroll animations
        const autoAnimateSelectors = [
            '.card', '.department-card', '.division-card', '.step-card', '.step',
            '.process-step', '.faq-item', '.info-box', '.feature', 'section h2', 'section h3'
        ];

        document.querySelectorAll(autoAnimateSelectors.join(', ')).forEach(el => {
            if (!el.classList.contains('fade-up') && !el.classList.contains('slide-left') &&
                !el.classList.contains('slide-right') && !el.classList.contains('zoom-in')) {
                el.classList.add('fade-up');
            }
        });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        let staggerDelay = 0;
        let lastIntersectTime = Date.now();

        const observer = new IntersectionObserver((entries) => {
            const currentTime = Date.now();
            if (currentTime - lastIntersectTime > 100) {
                staggerDelay = 0;
            }
            lastIntersectTime = currentTime;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target as HTMLElement;
                    const delay = staggerDelay * 0.15;
                    staggerDelay++;

                    if (el.classList.contains('fade-up')) {
                        el.style.animation = `fadeInUp 0.8s ease-out ${delay}s forwards`;
                    } else if (el.classList.contains('slide-left')) {
                        el.style.animation = `slideInLeft 0.8s ease-out ${delay}s forwards`;
                    } else if (el.classList.contains('slide-right')) {
                        el.style.animation = `slideInRight 0.8s ease-out ${delay}s forwards`;
                    } else if (el.classList.contains('zoom-in')) {
                        el.style.animation = `zoomIn 0.8s ease-out ${delay}s forwards`;
                    } else {
                        el.style.opacity = '1';
                    }

                    observer.unobserve(el);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up, .slide-left, .slide-right, .zoom-in').forEach(el => {
            (el as HTMLElement).style.opacity = '0';
            observer.observe(el);
        });

        // FAQ Toggle Logic
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                // Ensure we don't add multiple event listeners
                const clone = question.cloneNode(true);
                question.parentNode?.replaceChild(clone, question);
                
                clone.addEventListener('click', () => {
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    item.classList.toggle('active');
                });
            }
        });

        // Global form validation for gibberish
        const forms = document.querySelectorAll('form');
        const gibberishHandler = (e: Event) => {
            const form = e.target as HTMLFormElement;
            const inputs = form.querySelectorAll('input[type="text"], textarea');
            let isGibberish = false;
            
            inputs.forEach(input => {
                const val = (input as HTMLInputElement | HTMLTextAreaElement).value.trim();
                if (!val) return;
                
                // Check if any single word is longer than 20 characters
                const maxWordLength = Math.max(...val.split(/\s+/).map(w => w.length));
                if (maxWordLength > 20) {
                    isGibberish = true;
                    (input as HTMLElement).style.borderColor = 'red';
                }
                // Check for 5 identical consecutive characters (e.g. "aaaaa")
                if (/(.)\1{4,}/.test(val)) {
                    isGibberish = true;
                    (input as HTMLElement).style.borderColor = 'red';
                }
                // Check for 6 consecutive consonants
                if (/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{6,}/.test(val)) {
                    isGibberish = true;
                    (input as HTMLElement).style.borderColor = 'red';
                }
            });

            if (isGibberish) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                // Create nice gibberish error modal
                const overlay = document.createElement('div');
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100vw';
                overlay.style.height = '100vh';
                overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
                overlay.style.display = 'flex';
                overlay.style.justifyContent = 'center';
                overlay.style.alignItems = 'center';
                overlay.style.zIndex = '100000';
                
                const modal = document.createElement('div');
                modal.style.background = 'white';
                modal.style.padding = '40px';
                modal.style.borderRadius = '15px';
                modal.style.textAlign = 'center';
                modal.style.maxWidth = '450px';
                modal.style.width = '90%';
                modal.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                
                const icon = document.createElement('i');
                icon.className = 'fas fa-keyboard';
                icon.style.fontSize = '3.5rem';
                icon.style.color = '#345638';
                icon.style.marginBottom = '20px';
                icon.style.display = 'block';
                
                const text = document.createElement('h3');
                text.style.margin = '0 0 15px 0';
                text.style.fontFamily = 'Poppins, sans-serif';
                text.style.color = '#1a1a1a';
                text.style.fontSize = '1.6rem';
                text.innerText = 'Invalid Input Detected';
                
                const desc = document.createElement('p');
                desc.style.color = '#444';
                desc.style.lineHeight = '1.6';
                desc.style.fontSize = '1.05rem';
                desc.style.marginBottom = '25px';
                desc.innerText = 'Please provide valid information. Gibberish, keyboard smashing, or excessively long words are not allowed.';
                
                const closeBtn = document.createElement('button');
                closeBtn.innerText = 'Got it';
                closeBtn.style.padding = '12px 35px';
                closeBtn.style.background = '#345638';
                closeBtn.style.color = 'white';
                closeBtn.style.border = 'none';
                closeBtn.style.borderRadius = '30px';
                closeBtn.style.cursor = 'pointer';
                closeBtn.style.fontWeight = 'bold';
                closeBtn.style.fontSize = '1rem';
                closeBtn.style.transition = '0.3s';
                
                closeBtn.onmouseover = () => closeBtn.style.transform = 'translateY(-2px)';
                closeBtn.onmouseout = () => closeBtn.style.transform = 'translateY(0)';
                
                closeBtn.onclick = () => {
                    document.body.removeChild(overlay);
                };
                
                modal.appendChild(icon);
                modal.appendChild(text);
                modal.appendChild(desc);
                modal.appendChild(closeBtn);
                overlay.appendChild(modal);
                document.body.appendChild(overlay);
                
            } else {
                if (form.id === 'contactForm') {
                    return; // Let React's onSubmit in page.tsx handle the actual submission
                }

                e.preventDefault(); // Prevent page reload
                
                // Show loading state on button
                const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';
                if (submitBtn) {
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                    submitBtn.style.opacity = '0.8';
                    submitBtn.disabled = true;
                }

                const firstNameInput = form.querySelector('#firstName') as HTMLInputElement;
                const fullNameInput = form.querySelector('#fullName') as HTMLInputElement;
                const emailInput = form.querySelector('#email') as HTMLInputElement;
                const subjectInput = form.querySelector('#subject') as HTMLInputElement;
                const messageInput = form.querySelector('#message') as HTMLTextAreaElement;

                const rawName = firstNameInput?.value || fullNameInput?.value || "Applicant";
                const name = rawName.split(' ')[0]; // Get first name only if full name
                const email = emailInput?.value || "Not provided";
                const subject = subjectInput?.value || "Application Query";
                const userMsg = messageInput?.value || "I was trying to apply/contact but the form didn't go through.";

                const payload = {
                    name: rawName,
                    email: email,
                    subject: subject,
                    message: userMsg
                };

                // Actual network request
                fetch('/api/submit-form', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                })
                .then(async (response) => {
                    if (submitBtn) {
                        submitBtn.innerHTML = originalBtnText;
                        submitBtn.style.opacity = '1';
                        submitBtn.disabled = false;
                    }

                    if (response.ok) {
                        // Create nice success modal
                        const overlay = document.createElement('div');
                        overlay.style.position = 'fixed';
                        overlay.style.top = '0';
                        overlay.style.left = '0';
                        overlay.style.width = '100vw';
                        overlay.style.height = '100vh';
                        overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
                        overlay.style.display = 'flex';
                        overlay.style.justifyContent = 'center';
                        overlay.style.alignItems = 'center';
                        overlay.style.zIndex = '100000';
                        
                        const modal = document.createElement('div');
                        modal.style.background = 'white';
                        modal.style.padding = '40px';
                        modal.style.borderRadius = '15px';
                        modal.style.textAlign = 'center';
                        modal.style.maxWidth = '500px';
                        modal.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                        
                        const icon = document.createElement('i');
                        icon.className = 'fas fa-check-circle';
                        icon.style.fontSize = '3.5rem';
                        icon.style.color = '#2ecc71';
                        icon.style.marginBottom = '20px';
                        icon.style.display = 'block';
                        
                        const text = document.createElement('h3');
                        text.style.margin = '0 0 15px 0';
                        text.style.fontFamily = 'Poppins, sans-serif';
                        text.style.color = '#1a1a1a';
                        text.style.fontSize = '1.8rem';
                        text.innerText = 'Success!';
                        
                        const desc = document.createElement('p');
                        desc.style.color = '#444';
                        desc.style.lineHeight = '1.6';
                        desc.style.fontSize = '1.1rem';
                        desc.innerText = `Thank you ${name} for your response. We will get back to you on ${email} in 2-3 working days.`;
                        
                        const closeBtn = document.createElement('button');
                        closeBtn.innerText = 'Close';
                        closeBtn.style.marginTop = '25px';
                        closeBtn.style.padding = '12px 35px';
                        closeBtn.style.background = '#345638';
                        closeBtn.style.color = 'white';
                        closeBtn.style.border = 'none';
                        closeBtn.style.borderRadius = '30px';
                        closeBtn.style.cursor = 'pointer';
                        closeBtn.style.fontWeight = 'bold';
                        closeBtn.style.fontSize = '1rem';
                        closeBtn.style.transition = '0.3s';
                        
                        closeBtn.onmouseover = () => closeBtn.style.transform = 'translateY(-2px)';
                        closeBtn.onmouseout = () => closeBtn.style.transform = 'translateY(0)';
                        
                        closeBtn.onclick = () => {
                            document.body.removeChild(overlay);
                        };
                        
                        modal.appendChild(icon);
                        modal.appendChild(text);
                        modal.appendChild(desc);
                        modal.appendChild(closeBtn);
                        overlay.appendChild(modal);
                        document.body.appendChild(overlay);

                        // Clear the form
                        form.reset();
                    } else {
                        throw new Error('Server returned an error');
                    }
                })
                .catch((error) => {
                    console.error('Form submission failed:', error);
                    
                    if (submitBtn) {
                        submitBtn.innerHTML = originalBtnText;
                        submitBtn.style.opacity = '1';
                        submitBtn.disabled = false;
                    }

                    // Create nice error modal
                    const overlay = document.createElement('div');
                    overlay.style.position = 'fixed';
                    overlay.style.top = '0';
                    overlay.style.left = '0';
                    overlay.style.width = '100vw';
                    overlay.style.height = '100vh';
                    overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
                    overlay.style.display = 'flex';
                    overlay.style.justifyContent = 'center';
                    overlay.style.alignItems = 'center';
                    overlay.style.zIndex = '100000';
                    
                    const modal = document.createElement('div');
                    modal.style.background = 'white';
                    modal.style.padding = '40px';
                    modal.style.borderRadius = '15px';
                    modal.style.textAlign = 'center';
                    modal.style.maxWidth = '500px';
                    modal.style.width = '90%';
                    modal.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                    
                    const icon = document.createElement('i');
                    icon.className = 'fas fa-exclamation-triangle';
                    icon.style.fontSize = '3.5rem';
                    icon.style.color = '#e74c3c';
                    icon.style.marginBottom = '20px';
                    icon.style.display = 'block';
                    
                    const text = document.createElement('h3');
                    text.style.margin = '0 0 15px 0';
                    text.style.fontFamily = 'Poppins, sans-serif';
                    text.style.color = '#1a1a1a';
                    text.style.fontSize = '1.6rem';
                    text.innerText = 'Submission Failed';
                    
                    const desc = document.createElement('p');
                    desc.style.color = '#444';
                    desc.style.lineHeight = '1.6';
                    desc.style.fontSize = '1.05rem';
                    desc.style.marginBottom = '25px';
                    desc.innerText = `We are sorry, we are having some technical difficulties and your form information was not sent. You can contact us directly instead:`;

                    const formattedMsg = `Hi, my name is ${rawName}. I tried submitting a form on the website but it failed.\nEmail: ${email}\nSubject: ${subject}\nMessage: ${userMsg}`;
                    const encodedMsg = encodeURIComponent(formattedMsg);

                    const btnContainer = document.createElement('div');
                    btnContainer.style.display = 'flex';
                    btnContainer.style.flexDirection = 'column';
                    btnContainer.style.gap = '15px';

                    // WhatsApp Link
                    const waBtn = document.createElement('a');
                    waBtn.href = `https://wa.me/9232144787532?text=${encodedMsg}`;
                    waBtn.target = '_blank';
                    waBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Contact on WhatsApp';
                    waBtn.style.padding = '14px 20px';
                    waBtn.style.background = '#25D366';
                    waBtn.style.color = 'white';
                    waBtn.style.textDecoration = 'none';
                    waBtn.style.borderRadius = '8px';
                    waBtn.style.fontWeight = 'bold';
                    waBtn.style.fontSize = '1rem';
                    waBtn.style.display = 'block';
                    waBtn.style.transition = '0.3s';
                    waBtn.onmouseover = () => waBtn.style.transform = 'translateY(-2px)';
                    waBtn.onmouseout = () => waBtn.style.transform = 'translateY(0)';

                    // Instagram Button
                    const igBtn = document.createElement('button');
                    igBtn.innerHTML = '<i class="fab fa-instagram"></i> Copy Info & Open Instagram';
                    igBtn.style.padding = '14px 20px';
                    igBtn.style.background = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
                    igBtn.style.color = 'white';
                    igBtn.style.border = 'none';
                    igBtn.style.borderRadius = '8px';
                    igBtn.style.fontWeight = 'bold';
                    igBtn.style.cursor = 'pointer';
                    igBtn.style.fontSize = '1rem';
                    igBtn.style.transition = '0.3s';
                    igBtn.onmouseover = () => igBtn.style.transform = 'translateY(-2px)';
                    igBtn.onmouseout = () => igBtn.style.transform = 'translateY(0)';
                    
                    igBtn.onclick = () => {
                        navigator.clipboard.writeText(formattedMsg).then(() => {
                            alert("Message copied to clipboard!"); // Instagram click
                            window.open('https://www.instagram.com/thecmpunjabmun?igsh=MXJ5MzNnb2tla25pNg%3D%3D&utm_source=qr', '_blank');
                        });
                    };

                    const closeBtn = document.createElement('button');
                    closeBtn.innerText = 'Cancel';
                    closeBtn.style.padding = '10px 20px';
                    closeBtn.style.background = 'transparent';
                    closeBtn.style.color = '#888';
                    closeBtn.style.border = 'none';
                    closeBtn.style.cursor = 'pointer';
                    closeBtn.style.fontWeight = 'bold';
                    closeBtn.style.marginTop = '10px';
                    closeBtn.onclick = () => {
                        document.body.removeChild(overlay);
                    };

                    btnContainer.appendChild(waBtn);
                    btnContainer.appendChild(igBtn);
                    btnContainer.appendChild(closeBtn);

                    modal.appendChild(icon);
                    modal.appendChild(text);
                    modal.appendChild(desc);
                    modal.appendChild(btnContainer);
                    overlay.appendChild(modal);
                    document.body.appendChild(overlay);
                });
            }
        };

        forms.forEach(form => {
            form.addEventListener('submit', gibberishHandler);
        });

        return () => {
            observer.disconnect();
            forms.forEach(form => {
                form.removeEventListener('submit', gibberishHandler);
            });
        };
    }, [pathname]);

    return null;
}
