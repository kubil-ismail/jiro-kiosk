import React, { useRef, useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FloorSelectorProps {
  floors: string[];
  selectedFloor: string;
  onSelectFloor: (floor: string) => void;
}

export function FloorSelector({
  floors,
  selectedFloor,
  onSelectFloor,
}: FloorSelectorProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;

      setShowScrollUp(scrollTop > 20);
      setShowScrollDown(scrollTop + clientHeight < scrollHeight - 20);
    };

    handleScroll();
    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-3 relative">
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <img src="/logo.webp" className="w-[200px] h-auto" />
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />

      <p className="text-sm text-gray-500 uppercase tracking-wide text-center mb-4">
        Floor
      </p>

      {/* Scroll Area */}
      <div
        ref={scrollRef}
        className="relative bg-gray-50 rounded-xl p-2 space-y-2 overflow-y-scroll mac-scroll h-[65vh]"
      >
        {floors.map((floor) => (
          <button
            key={floor}
            onClick={() => onSelectFloor(floor)}
            className={`
              w-full py-4 px-5 rounded-lg transition-all duration-300 mb-4
              ${
                selectedFloor === floor
                  ? "bg-[#4bb8a2] text-white font-bold shadow-md shadow-[#fab83487]"
                  : "text-gray-600 bg-white font-bold hover:shadow-sm border border-gray-100"
              }
            `}
          >
            {floor}
          </button>
        ))}
      </div>

      {/* Floating Scroll Up */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="absolute right-[42%] top-[27%] z-10 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm flex items-center justify-center active:scale-95 transition"
        >
          <ChevronUp className="w-5 h-5 text-gray-600" />
        </button>
      )}

      {/* Floating Scroll Down */}
      {showScrollDown && (
        <button
          onClick={scrollToBottom}
          className="absolute right-[42%] bottom-[-20px] z-10 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm flex items-center justify-center active:scale-95 transition"
        >
          <ChevronDown className="w-5 h-5 text-gray-600" />
        </button>
      )}
    </div>
  );
}
