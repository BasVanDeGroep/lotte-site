import React from 'react';
import { HeartIcon } from '../assets/Svgs';

const HeartLabel = ({ children }) => {
  return (
    <div className='flex items-center gap-1.5 '>
      <HeartIcon className='w-3 text-primary' />
      <p className='text-lg font-medium'>{children}</p>
    </div>
  );
};

export default HeartLabel;
