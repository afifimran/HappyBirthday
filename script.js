// Countdown timer
const countdownElement = document.getElementById('countdown-timer');

function updateCountdown() {
    const now = new Date();
    const birthday = new Date('2024-04-01'); // Change this date to the birthday date

    const difference = birthday - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (difference <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = 'Happy Birthday!';
    }
}

updateCountdown(); // Initial call
const countdownInterval = setInterval(updateCountdown, 1000);

// Birthday wishes
function submitWish() {
    const wishTextarea = document.getElementById('wishes');
    const wish = wishTextarea.value.trim();

    if (wish) {
        alert(`Thank you for your wish: ${wish}`);
        wishTextarea.value = '';
    } else {
        alert('Please enter your wish before submitting.');
    }
}
