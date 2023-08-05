import { useState } from 'react';

interface TabProps {
  tabs: string[];
  content: React.ReactNode[];
}

const Tab: React.FC<TabProps> = ({ tabs, content }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 text-lg rounded ${
              activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">{content[activeTab]}</div>
    </div>
  );
};

export default Tab;