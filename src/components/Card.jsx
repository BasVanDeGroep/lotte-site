import React from 'react';
import { twMerge } from 'tailwind-merge';

const Card = ({ className, children, noPadding }) => {
  return (
    <div
      className={twMerge(
        ' flex flex-col backdrop-blur-lg shadow-glow bg-gradient-card gap-4 sm:gap-6 lg:gap-8 border border-[#FF87F3] rounded-xl overflow-hidden',
        !noPadding && 'p-4 sm:p-6 md:p-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
