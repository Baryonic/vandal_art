const sendMessageContainer = document.getElementById('sendMessageContainer');
const messageAreaContainer = document.getElementById('messageAreaContainer');
const sendMessageBtn = document.getElementById('sendMessageBtn');
const cancelBtn = document.getElementById('cancelBtn');
const sendBtn = document.getElementById('sendBtn');

sendMessageBtn.addEventListener('click', () => {
    sendMessageContainer.style.display = 'none';
    messageAreaContainer.style.display = 'flex';
});

cancelBtn.addEventListener('click', () => {
    sendMessageContainer.style.display = 'block';
    messageAreaContainer.style.display = 'none';
});

sendBtn.addEventListener('click', () => {
    // Temporarily unavailable
    alert('Sending functionality is temporarily unavailable.');
});
