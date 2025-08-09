function validateForm() {
  let isValid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const age = document.getElementById('age').value.trim();

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('phoneError').textContent = '';
  document.getElementById('ageError').textContent = '';

  if (!name) {
    document.getElementById('nameError').textContent = 'Name is required';
    isValid = false;
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = 'Valid email required';
    isValid = false;
  }

  if (!phone || !/^[0-9]{10}$/.test(phone)) {
    document.getElementById('phoneError').textContent = 'Valid 10-digit phone required';
    isValid = false;
  }

  if (!age || age < 1 || age > 120) {
    document.getElementById('ageError').textContent = 'Valid age required';
    isValid = false;
  }

  if (isValid) alert('Form is valid and ready to submit!');
}
