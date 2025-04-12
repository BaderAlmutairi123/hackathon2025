import { useState } from 'preact/hooks';
import ChatInput from './ChatInput';
import { fetchServices } from './messages';
import type { ServiceResult } from './messages';

type Message = {
  role: 'user' | 'ai';
  content: string;
};

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = async (userMessage: string) => {
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    const services: ServiceResult[] = await fetchServices(userMessage, 'Hempstead, NY');

    if (!services.length) {
      setMessages(prev => [...prev, { role: 'ai', content: "No matching services found." }]);
      return;
    }

    const serviceText = services.map(s =>
      `• ${s.name} (${s.rating}⭐) - ${s.location}`
    ).join('\n');

    setMessages(prev => [...prev, { role: 'ai', content: serviceText }]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white p-4">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className={`my-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-4 py-2 rounded-xl ${msg.role === 'user' ? 'bg-blue-500' : 'bg-gray-700'}`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}
