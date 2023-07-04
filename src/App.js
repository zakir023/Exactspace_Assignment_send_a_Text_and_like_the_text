import React, { useState } from 'react';
import './App.css';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function App() {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newChatMessage = {
        username: randomUser,
        content: message,
        likes: 0
      };
      setChatMessages([...chatMessages, newChatMessage]);
      setMessage('');
    }
  };

  const handleLike = (index) => {
    const updatedChatMessages = [...chatMessages];
    updatedChatMessages[index].likes += 1;
    setChatMessages(updatedChatMessages);
  };

  return (
    <div className="App">
      <div className="chat-thread">
        {chatMessages.map((chatMessage, index) => (
          <div key={index} className="message">
            <span className="username">{chatMessage.username}: </span>
            <span className="content">{chatMessage.content}</span>
            <button className="like-button" onClick={() => handleLike(index)}>
              Like ({chatMessage.likes})
            </button>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
