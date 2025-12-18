import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  lastInteraction: number;
  timeout: number; // in milliseconds
}

export function CountdownTimer({ lastInteraction, timeout }: CountdownTimerProps) {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - lastInteraction;
      const remaining = Math.max(0, Math.ceil((timeout - elapsed) / 1000));
      setSecondsRemaining(remaining);
    }, 100);

    return () => clearInterval(interval);
  }, [lastInteraction, timeout]);

  const progress = (secondsRemaining / (timeout / 1000)) * 100;

  return (
    <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
      <div className="relative w-6 h-6">
        <svg className="w-6 h-6 -rotate-90" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#E5E7EB"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#3B82F6"
            strokeWidth="2"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 10}`}
            strokeDashoffset={`${2 * Math.PI * 10 * (1 - progress / 100)}`}
            className="transition-all duration-200"
          />
        </svg>
        <Clock size={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500" />
      </div>
      <span className="text-sm text-gray-600">Returning in {secondsRemaining}s</span>
    </div>
  );
}