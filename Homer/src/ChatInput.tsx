import { useState } from 'preact/hooks';
import { ServiceResult } from './messages';



type ChatInputProps = {
    onSend: (message: string) => Promise<void>;
}


export default function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    if (text.trim() === "") return;
    await onSend(text);
    setText(""); // clear after sending
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // optional, prevents newline
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-md px-4 py-3 flex gap-2 bg-black rounded-xl shadow mt-4">
      <input
        type="text"
        value={text}
        onInput={(e: Event) => {const target = e.target as HTMLInputElement; setText(target.value)}}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150"
        placeholder="Describe your home issue..."
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white transition-all"
      >
        Send
      </button>
    </div>
  );
}
