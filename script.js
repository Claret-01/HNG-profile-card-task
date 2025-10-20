function updateTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    if (timeElement) {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        timeElement.textContent = `Time: ${formattedTime}`;
    }
}

function initProfileCard() {
    updateTime();
    
    setInterval(updateTime, 1000);
    
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                this.click();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initProfileCard);