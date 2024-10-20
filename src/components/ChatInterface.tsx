import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ChatInterface = ({ activeConversation }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle message submission
    setMessage('');
  };

  return (
    <div className="flex-grow flex flex-col bg-dark-surface border-l border-r border-dark-border">
      <div className="flex-grow p-4 overflow-y-auto">
        {activeConversation ? (
          // Render chat messages here
          <div className="space-y-4">
            <div className="bg-opacity-20 bg-gray-700 p-3 rounded-lg max-w-3/4 ml-auto">
              <p className="text-sm">Hello! How can I assist you today?</p>
            </div>
            <div className="bg-opacity-30 bg-blue-600 p-3 rounded-lg max-w-3/4">
              <p className="text-sm">Can you help me with a coding problem?</p>
            </div>
            {/* Add more messages as needed */}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-20">
            <p>Select a conversation or start a new one</p>
          </div>
        )}
      </div>
      <div className="p-4 border-t border-dark-border">
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow bg-dark-bg text-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-r-lg px-4 py-2 hover:bg-blue-700 transition duration-200"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;