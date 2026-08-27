document.getElementById('notify-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const message = document.getElementById('notify-message');
  message.textContent = "Thanks — we'll let you know when we launch!";
  message.hidden = false;

  event.target.reset();
});
