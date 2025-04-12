import { useState } from 'preact/hooks';
import { fetchServices, ServiceResult } from './messages'; 

export type Message = {
    role: 'user' | 'ai';
    content: string;
    services?: ServiceResult[]; // Add this to track service results in a message
  };
  

export function useChatHandler(initialMessages: Message[] = []) {
const [messages, setMessages] = useState<Message[]>(initialMessages);

const handleSend = async (message: string) => {
    // First, add the user's message
    setMessages((prev) => [...prev, { role: "user", content: message }]);

    // Then fetch results
    const results = await fetchServices(message, "Hempstead, NY");

    if (results.length === 0) {
    setMessages((prev) => [
        ...prev,
        { role: "ai", content: "No services found for that." },
    ]);
    return;
    }

    // Add AI response with results
    const formatted =
    "Here are some services I found:";


    setMessages((prev) => [
    ...prev,
    { 
        role: "ai", 
        content: formatted,
        services: results 
    }
    ]);
};

return { messages, handleSend };
}