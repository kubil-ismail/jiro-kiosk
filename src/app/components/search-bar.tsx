import { Search, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const IDLE_TIMEOUT = 60_000; // 1 minute

export function SearchBar({ value, onChange }: SearchBarProps) {
  const timerRef = useRef<any | null>(null);
  const [isClearing, setIsClearing] = useState(false);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      if (!value) return;

      setIsClearing(true);

      // Soft delay for animation
      setTimeout(() => {
        onChange("");
        setIsClearing(false);
      }, 250);
    }, IDLE_TIMEOUT);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [value]);

  return (
    <div className="relative mb-6">
      <Search
        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-opacity duration-200 ${
          isClearing ? "opacity-0" : "opacity-100"
        } text-gray-400`}
        size={20}
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={resetTimer}
        onTouchStart={resetTimer}
        placeholder="Search offices..."
        className={`
          w-full pl-12 pr-12 py-3 text-sm bg-white border border-gray-200 rounded-xl
          focus:outline-none focus:border-[#3B82F680]
          transition-all duration-300
          ${isClearing ? "opacity-60 scale-[0.99]" : "opacity-100 scale-100"}
        `}
      />

      {/* Clear indicator (soft UX hint) */}
      {value && (
        <div
          className={`absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 transition-opacity duration-300 ${
            isClearing ? "opacity-0" : "opacity-60"
          }`}
        >
          auto reset
        </div>
      )}
    </div>
  );
}
