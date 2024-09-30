function messageFunc(messageCustom) {
  return `<div class="Message">
          <p>${messageCustom}</p>
        </div>`;
}
function messageReceiveFunc(messageCustomReceive) {
  return `<div class="receiveMessage">
          <p>${messageCustomReceive}</p>
        </div>`;
}

function sendMessage() {
  const messageInput = document.querySelector(".messageInput");

  if (messageInput.value == "") {
  } else {
    const messagesArea = document.querySelector(".messagesArea");
    messagesArea.innerHTML += messageFunc(messageInput.value);
    messageInput.value = "";
  }
}

function receiveMessage() {
  const messageInput = document.querySelector(".messageInput");

  if (messageInput.value == "") {
  } else {
    const messagesArea = document.querySelector(".messagesArea");
    messagesArea.innerHTML += messageReceiveFunc(messageInput.value);
    messageInput.value = "";
  }
}
