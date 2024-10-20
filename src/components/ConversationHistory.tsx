import React from 'react';
import { MessageCircle } from 'lucide-react';

const ConversationHistory = ({ setActiveConversation, activeConversation }) => {
  const conversations = [
    { id: 1, title: 'Coding assistance', date: '2023-04-15' },
    { id: 2, title: 'Data analysis', date: '2023-04-14' },
    { id: 3, title: 'Project planning', date: '2023-04-13' },
  ];

  return (
    <div className="w-80 bg-dark-surface p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-200">Conversations</h2>
      <div className="space-y-2">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className={`p-3 rounded-lg cursor-pointer transition duration-200 ${
              activeConversation === conv.id
                ? 'bg-blue-600 bg-opacity-30'
                : 'bg-dark-bg hover:bg-opacity-hover'
            }`}
            onClick={() => setActiveConversation(conv.id)}
          >
            <div className="flex items-center">
              <MessageCircle className="mr-3" size={18} />
              <div>
                <h3 className="font-medium text-gray-200 text-sm">{conv.title}</h3>
                <p className="text-xs text-gray-400">{conv.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationHistory;