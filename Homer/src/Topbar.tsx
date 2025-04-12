import homerLogo from "./assets/Homer logo final.svg";

export function Topbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 shadow-md h-20">
<div className="relative w-full h-full px-6 flex items-center justify-between">
{/* Left: Logo */}
        <a href="/" className="flex items-center">
          <img src={homerLogo} alt="Homer Logo" className="h-15 w-auto" />
        </a>

        {/* Center: Homer Text */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-blue-400 text-xl font-bold tracking-wide">Homer</h1>
          <p className="text-gray-300 text-sm font-medium -mt-1">A hub for skilled trades</p>
        </div>

        {/* Right: Empty spacer to balance layout */}
        <div className="w-10" />
      </div>
    </header>
  );
}
