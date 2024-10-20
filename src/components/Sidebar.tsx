import React from 'react';
import { MessageSquare, Upload, Link, Zap, Settings, Search } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-dark-surface p-4 flex flex-col border-r border-dark-border">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-400">AI Dashboard</h1>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center text-gray-400 hover:text-white hover:bg-opacity-hover p-2 rounded transition duration-200">
              <MessageSquare className="mr-3" size={18} />
              New Chat
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-400 hover:text-white hover:bg-opacity-hover p-2 rounded transition duration-200">
              <Search className="mr-3" size={18} />
              Web Search
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-400 hover:text-white hover:bg-opacity-hover p-2 rounded transition duration-200">
              <Upload className="mr-3" size={18} />
              Upload Document
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-400 hover:text-white hover:bg-opacity-hover p-2 rounded transition duration-200">
              <Link className="mr-3" size={18} />
              Add Link
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-400 hover:text-white hover:bg-opacity-hover p-2 rounded transition duration-200">
              <Zap className="mr-3" size={18} />
              Quick Actions
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <a href="#" className="flex items-center text-gray-400 hover:text-white hover:bg-opacity-hover p-2 rounded transition duration-200">
          <Settings className="mr-3" size={18} />
          Settings
        </a>
      </div>
    </div>
  );
};

export default Sidebar;