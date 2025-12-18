import { ArrowLeft } from 'lucide-react';
import type { Office } from '../App';
import { CountdownTimer } from './countdown-timer';

interface OfficeDetailProps {
  office: Office;
  onBack: () => void;
  lastInteraction: number;
  timeout: number;
}

export function OfficeDetail({ office, onBack, lastInteraction, timeout }: OfficeDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 px-8 py-6 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-2.5 text-gray-600 bg-white hover:bg-gray-50 rounded-full transition-all shadow-sm border border-gray-100 hover:shadow-md active:scale-95"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Back</span>
          </button>
          <div className="w-px h-6 bg-gray-200"></div>
          <h1 className="text-xl text-gray-900">{office.name}</h1>
        </div>
        <CountdownTimer lastInteraction={lastInteraction} timeout={timeout} />
      </header>

      {/* Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F680] via-[#60A5FA60] to-[#93C5FD60]"></div>
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="relative px-8 py-10">
          <div className="max-w-4xl mx-auto flex items-center gap-6">
            {/* Logo */}
            <div 
              className="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 text-white text-2xl shadow-xl"
              style={{ 
                backgroundColor: office.logoColor,
                boxShadow: `0 8px 24px ${office.logoColor}50`
              }}
            >
              {office.logoInitials}
            </div>
            
            {/* Office Info */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-2">{office.name}</h2>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                  Floor {office.floor} · Room {office.roomNumber}
                </span>
                {office.locationHint && (
                  <>
                    <span className="text-gray-400">·</span>
                    <span className="text-sm">{office.locationHint}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Description */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xs text-gray-500 mb-3 uppercase tracking-wide">About</h3>
            <p className="text-gray-900 leading-relaxed">
              {office.description}
            </p>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xs text-gray-500 mb-3 uppercase tracking-wide">Location</h3>
            <p className="text-gray-900 text-lg mb-2">
              Floor {office.floor}, Room {office.roomNumber}
            </p>
            {office.locationHint && (
              <p className="text-gray-600 text-sm">
                {office.locationHint}
              </p>
            )}
          </div>

          {/* Contact Information */}
          {(office.phone || office.email) && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xs text-gray-500 mb-3 uppercase tracking-wide">Contact</h3>
              <div className="space-y-2">
                {office.phone && (
                  <p className="text-gray-900">
                    {office.phone}
                  </p>
                )}
                {office.email && (
                  <p className="text-gray-900">
                    {office.email}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}