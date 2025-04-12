import './app.css';
import ChatInput from './ChatInput';
import { Topbar } from './Topbar';
import { useChatHandler } from './useChatHandler';
import { useState } from 'preact/hooks';
import ServiceCard from './ServiceCard';

export function App() {
  const { messages, handleSend } = useChatHandler();
  const [isProcessing, setIsProcessing] = useState(false);

  const sendMessage = async (msg: string) => {
    setIsProcessing(true);
    try {
      await handleSend(msg);
    } catch (err) {
      console.error("Message failed to send:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gray-900 text-white flex flex-col">
      <Topbar />

      <div className="flex-1 flex flex-col items-center justify-start px-4 py-6 pt-20">
        <div className="w-full max-w-3xl">
          {/* Chat history */}
          <div className="flex flex-col space-y-4">
            {messages.map((msg, i) => (
              <div key={i}>
                <div
                  className={`whitespace-pre-wrap p-4 rounded-xl max-w-xl ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white self-end'
                      : 'bg-gray-800 text-white self-start'
                  }`}
                >
                  {msg.content}
                </div>
                {msg.services && (
                  <div className="mt-4 space-y-4">
                    {msg.services.map((service, index) => (
                      <ServiceCard key={index} service={service} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Chat input */}
          <div className="mt-6">
            <ChatInput
              onSend={sendMessage}
              isProcessing={isProcessing}
              placeholder="Describe your home issue..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}