import React from "react";
import type { Office } from "../App";

interface OfficeListProps {
  offices: Office[];
  onSelectOffice: (office: Office) => void;
}

export function OfficeList({ offices, onSelectOffice }: OfficeListProps) {
  if (offices.length === 0) {
    return (
      <div className="flex items-center justify-center h-full py-24">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
          </div>
          <p className="text-gray-400">No offices found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {offices.map((office) => (
        <button
          key={office.id}
          onClick={() => onSelectOffice(office)}
          className="bg-white rounded-xl p-5 text-left transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5 active:scale-[0.98] flex items-start gap-4 shadow-sm border border-gray-100"
        >
          {/* Logo */}
          {office?.logo ? (
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm shadow-md"
              style={{
                boxShadow: `0 4px 12px ${office.logoColor}40`,
              }}
            >
              <img src={office.logo} />
            </div>
          ) : (
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm shadow-md"
              style={{
                backgroundColor: office.logoColor,
                boxShadow: `0 4px 12px ${office.logoColor}40`,
              }}
            >
              {office.logoInitials}
            </div>
          )}

          {/* Office Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-gray-900 mb-1 truncate">{office.name}</h3>
            <p className="text-sm text-gray-500">
              Floor {office.floor} · Room {office.roomNumber}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
