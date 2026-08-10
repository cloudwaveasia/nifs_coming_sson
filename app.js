/**
 * NIFS Simple & Professional Coming Soon Page Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Countdown logic: Target 30 days ahead
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  targetDate.setHours(9, 0, 0, 0);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Email Notification Form
  const notifyForm = document.getElementById('notifyForm');
  const userEmail = document.getElementById('userEmail');
  const notifyBtn = document.getElementById('notifyBtn');
  const formMsg = document.getElementById('formMsg');

  if (notifyForm) {
    notifyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = userEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        formMsg.textContent = 'Please enter a valid email address.';
        formMsg.className = 'form-msg error';
        userEmail.focus();
        return;
      }

      // Button state
      const originalHtml = notifyBtn.innerHTML;
      notifyBtn.disabled = true;
      notifyBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';

      setTimeout(() => {
        // Store locally
        const list = JSON.parse(localStorage.getItem('nifs_notify_list') || '[]');
        list.push({ email, date: new Date().toISOString() });
        localStorage.setItem('nifs_notify_list', JSON.stringify(list));

        notifyBtn.disabled = false;
        notifyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Done';
        userEmail.value = '';

        formMsg.textContent = 'Thank you! We will notify you once the new website is live.';
        formMsg.className = 'form-msg success';

        setTimeout(() => {
          notifyBtn.innerHTML = originalHtml;
        }, 3500);
      }, 600);
    });
  }
});
