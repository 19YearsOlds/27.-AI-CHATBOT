async function sendMessage() {
    const inputField = document.getElementById('user-input');
    const message = inputField.ariaValueMax.trim();
    if (message === '') return;

    addMessage('user', message);
    inputField.value = '';

    const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    });

    const data = await response.json();
    addMessage('bot', data.response);
}

function addMessage(sender, text) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);

    const content = document.createElement('div');
    content.classList.add('message');
    content.innerText = text;

    messageDiv.appendChild(content);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}