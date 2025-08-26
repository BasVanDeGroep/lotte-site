import React from 'react';
import { twMerge } from 'tailwind-merge';
import { SoundIcon, MutedSoundIcon } from '../assets/Svgs';

const SoundButton = ({ onClick, isPlaying, className }) => {
  return (
    <div
      className={twMerge(
        'bg-gradient-card mt-8 group overflow-hidden cursor-pointer transition-colors hover:border-borderHover relative w-max rounded-xl p-4 border border-border flex items-center gap-3',
        className
      )}
      onClick={onClick}
    >
      <div className='relative z-10'>
        {isPlaying ? (
          <SoundIcon className='w-10' />
        ) : (
          <MutedSoundIcon className='w-10' />
        )}
      </div>
      <p className='font-medium relative z-10'>
        {isPlaying ? 'Mute Audio' : 'Play Audio'}
      </p>
      <div className='w-full h-full cursor-pointer bg-gradient-card-hover transition-opacity absolute left-0 top-0 opacity-0 group-hover:opacity-100' />
    </div>
  );
};

export default SoundButton;
