import { useState, useRef, useEffect } from 'preact/hooks';
import { JSX } from 'preact';

type ChatInputProps = {
  onSend: (message: string) => void;
  placeholder?: string;
  isProcessing?: boolean;
}

export default function ChatInput({ 
  onSend, 
  placeholder = "Describe your home issue...",
  isProcessing = false 
}: ChatInputProps) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea as content grows
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "24px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [text]);

  const handleSubmit = () => {
    if (text.trim() === "" || isProcessing) return;
    onSend(text);
    setText(""); // clear after sending
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // prevents newline
      handleSubmit();
    }
  };

  // Calculate button color based on text content
  const buttonClass = text.trim() === "" || isProcessing
    ? "text-gray-400 cursor-not-allowed"
    : "text-white hover:bg-blue-600 cursor-pointer";

  return (
    <div className={`
      w-full max-w-2xl px-4 py-3 
      bg-gray-900 border 
      ${isFocused ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-700'} 
      rounded-2xl transition-all duration-200 ease-in-out justify-center
    `}>
      <div className="flex items-end gap-2">
        <div className="relative flex-1">
          <textarea
            ref={textareaRef}
            value={text}
            onInput={(e: JSX.TargetedEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows={1}
            disabled={isProcessing}
            className={`
              w-full resize-none overflow-hidden
              bg-transparent text-white placeholder-gray-500
              py-2 pr-10 focus:outline-none
              text-base leading-6 max-h-32
              ${isProcessing ? 'opacity-50' : ''}
            `}
            placeholder={isProcessing ? "Waiting for response..." : placeholder}
          />
          {text.length > 0 && (
            <button 
              onClick={() => setText("")}
              className="absolute right-2 bottom-1.5 text-gray-400 hover:text-gray-200 p-1 rounded-full"
              aria-label="Clear input"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </button>
          )}
        </div>
        <button
          onClick={handleSubmit}
          disabled={text.trim() === "" || isProcessing}
          className={`
            p-2 rounded-full 
            transition-all duration-200
            ${buttonClass}
          `}
          aria-label="Send message"
        >
          {isProcessing ? (
            // Loading spinner
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class sName="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            // Send icon
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Footer with hints */}
      <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
        <div>
          {isFocused && (
            <span className="inline-flex items-center">
              <span className="mr-4">⏎ to send</span>  
              <span>⇧ + ⏎ for new line</span>
            </span>
          )}
        </div>
        <div>
          {text.length > 0 && (
            <span className="text-gray-500">{text.length} characters</span>
          )}
        </div>
      </div>
    </div>
  );
}