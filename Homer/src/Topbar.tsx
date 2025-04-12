// Import your logo
import homerLogo from "./assets/Homer logo final.svg";

export function Topbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-3">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo Section - Left aligned */}
        <div className="flex items-center">
          <a href="/" className="inline-flex items-center">
            <img 
              src={homerLogo} 
              alt="Homer" 
              className="h-10 w-auto" 
            />
          </a>
        </div>

        {/* Center Tagline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="font-medium text-blue-500 text-xl">Homer</h1>
          <p className="font-medium text-white text-sm">A hub for skilled trades</p>
        </div>
        
        <div className="w-10"></div>
      </div>
    </header>
  );
}