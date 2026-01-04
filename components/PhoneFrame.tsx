import React from 'react';
import { Battery, Wifi, Signal } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

const StatusBar = () => (
  <div className="h-12 w-full px-6 flex justify-between items-center text-calm-text select-none z-50 absolute top-0 left-0 bg-calm-bg/90 backdrop-blur-sm">
    <div className="text-[15px] font-semibold tracking-wide">9:41</div>
    <div className="flex gap-2 items-center">
      <Signal size={16} strokeWidth={2.5} className="text-calm-text" />
      <Wifi size={16} strokeWidth={2.5} className="text-calm-text" />
      <Battery size={20} strokeWidth={2.5} className="text-calm-text" />
    </div>
  </div>
);

const HomeIndicator = () => (
  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-stone-300 rounded-full z-50"></div>
);

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children }) => {
  return (
    <div className="relative w-[375px] h-[812px] bg-calm-bg rounded-[50px] shadow-[0_0_0_12px_#292524,0_20px_50px_-10px_rgba(0,0,0,0.3)] overflow-hidden border-[6px] border-stone-800 box-border">
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[32px] w-[120px] bg-stone-900 rounded-b-[20px] z-[60]"></div>
      
      <StatusBar />
      
      <div className="h-full w-full pt-12 pb-8 overflow-hidden flex flex-col bg-calm-bg">
        {children}
      </div>

      <HomeIndicator />
    </div>
  );
};