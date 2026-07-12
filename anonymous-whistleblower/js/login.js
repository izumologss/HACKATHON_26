document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentLoginForm');
    const toast = document.getElementById('toast');

    function displaySystemToast(message, mode = 'info') {
        if (!toast) return;
        toast.textContent = message;
        toast.className = `toast visible ${mode}`;
        
        // Inline system notification toast styles inject programmatically safely
        toast.style.position = 'fixed';
        toast.style.bottom = '30px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.padding = '1rem 2rem';
        toast.style.borderRadius = '8px';
        toast.style.backdropFilter = 'blur(10px)';
        toast.style.zIndex = '10000';
        toast.style.fontSize = '0.9rem';
        toast.style.boxShadow = '0 8px 24px rgba(0,0,0,0.5)';
        
        if (mode === 'error') {
            toast.style.background = 'rgba(239, 68, 68, 0.2)';
            toast.style.border = '1px solid #ef4444';
            toast.style.color = '#ef4444';
        } else {
            toast.style.background = 'rgba(0, 242, 254, 0.2)';
            toast.style.border = '1px solid var(--neon-blue)';
            toast.style.color = 'var(--neon-blue)';
        }

        setTimeout(() => {
            toast.classList.remove('visible');
            toast.classList.add('hidden');
        }, 4000);
    }

    if (studentForm) {
        studentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputVal = document.getElementById('secretCode').value.trim();
            
            // Validation Logic Configuration parameters evaluation parsing
            if (inputVal.length < 5) {
                displaySystemToast('Cryptographic structural token failed safety check validation size.', 'error');
                return;
            }

            displaySystemToast('Handshake authorization confirmed. Relaying vectors...', 'success');
            setTimeout(() => {
                window.location.href = 'complaint.html';
            }, 1500);
        });
    }

    const forgotTrigger = document.getElementById('forgotTrigger');
    if (forgotTrigger) {
        forgotTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Lost Code Pipeline Manifest: Please communicate directly with your classroom structural supervisor nodes anonymously.');
        });
    }
});