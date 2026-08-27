const SUPABASE_URL = 'https://myoxyugwxenanmugrfgx.supabase.co';
const SUPABASE_KEY = 'sb_publishable_NqcOJNe0afXuS4JPrLZKuQ_Jqpw20L-';

const form = document.getElementById('notify-form');
const message = document.getElementById('notify-message');
const submitButton = form.querySelector('button');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const email = form.email.value.trim();
  submitButton.disabled = true;

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      message.textContent = "Thanks — we'll let you know when we launch!";
    } else if (response.status === 409) {
      message.textContent = "You're already on the list!";
    } else {
      message.textContent = 'Something went wrong. Please try again later.';
    }
  } catch (error) {
    message.textContent = 'Something went wrong. Please try again later.';
  }

  message.hidden = false;
  submitButton.disabled = false;
  form.reset();
});
