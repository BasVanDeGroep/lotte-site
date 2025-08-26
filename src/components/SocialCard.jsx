import React from 'react';
import { HeartOutline } from '../assets/Svgs';
const SocialCard = ({ className, Icon, url, socialPlatform, name }) => {
  return (
    <a
      className='p-1.5 group box-border hover:border-borderHover transition-colors relative cursor-pointer overflow-hidden rounded-lg flex items-center gap-6 bg-gradient-social-card border-2 border-border'
      href={url}
      target='_blank'
      rel='noreferrer'
    >
      <div className='bg-shadow group-hover:bg-shadowHover transition-colors relative z-10 flex items-center justify-center rounded-md h-16 w-16'>
        <Icon className='w-8' />
      </div>
      <div className='space-y-1 relative z-10'>
        <h1 className='text-xl font-semibold '>{name}</h1>
        <p className='text-sm text-text'>{socialPlatform}</p>
      </div>
      <div className='bg-gradient-card-hover w-full transition-opacity h-full absolute left-0 top-0 opacity-0 group-hover:opacity-100'></div>
      <HeartOutline className='w-[120px] text-primary group-hover:text-secondary transition-colors absolute -translate-x-1/2 -translate-y-1/2 top-24 rotate-[45deg] left-4' />
      <HeartOutline className='w-[120px] text-primary group-hover:text-secondary transition-colors absolute -translate-x-1/2 -translate-y-1/2 -top-4 top-0 rotate-[180deg] left-1/2' />
      <HeartOutline className='w-[120px] text-primary group-hover:text-secondary transition-colors absolute -translate-x-1/2 -translate-y-1/2 top-14 rotate-[-45deg] -right-32' />
    </a>
  );
};

export default SocialCard;
