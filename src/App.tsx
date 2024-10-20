import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import ConversationHistory from './components/ConversationHistory';

function App() {
  const [activeConversation, setActiveConversation] = useState(null);

  return (
    <div className="min-h-screen bg-dark-bg text-gray-300 flex font-inter">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <div className="flex-grow flex">
          <ChatInterface activeConversation={activeConversation} />
          <ConversationHistory
            setActiveConversation={setActiveConversation}
            activeConversation={activeConversation}
          />
        </div>
      </div>
    </div>
  );
}

export default App;