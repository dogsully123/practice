// Counter functionality
let counter = 0;
const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

function updateCounter() {
    counterDisplay.textContent = counter;
    counterDisplay.style.transform = 'scale(1.1)';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 150);
}

increaseBtn.addEventListener('click', () => {
    counter++;
    updateCounter();
});

decreaseBtn.addEventListener('click', () => {
    counter--;
    updateCounter();
});

// Color changer functionality
const colorBtn = document.getElementById('colorBtn');
const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)'
];

let currentColorIndex = 0;

colorBtn.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.style.background = colors[currentColorIndex];
    
    // Add a fun animation to the button
    colorBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        colorBtn.style.transform = 'rotate(0deg)';
    }, 300);
});

// Clock functionality
const clockDisplay = document.getElementById('clock');
const toggleClockBtn = document.getElementById('toggleClock');
let clockInterval;
let clockRunning = false;

function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    clockDisplay.textContent = time;
}

function startClock() {
    clockInterval = setInterval(updateClock, 1000);
    updateClock(); // Update immediately
    clockRunning = true;
    toggleClockBtn.textContent = 'Stop Clock';
}

function stopClock() {
    clearInterval(clockInterval);
    clockDisplay.textContent = '';
    clockRunning = false;
    toggleClockBtn.textContent = 'Start Clock';
}

toggleClockBtn.addEventListener('click', () => {
    if (clockRunning) {
        stopClock();
    } else {
        startClock();
    }
});

// Initialize the clock when page loads
document.addEventListener('DOMContentLoaded', () => {
    startClock();
    
    // Add some fun animations on load
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add some keyboard shortcuts for fun
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            event.preventDefault();
            counter++;
            updateCounter();
            break;
        case 'ArrowDown':
            event.preventDefault();
            counter--;
            updateCounter();
            break;
        case ' ':
            event.preventDefault();
            colorBtn.click();
            break;
        case 'c':
        case 'C':
            toggleClockBtn.click();
            break;
    }
});