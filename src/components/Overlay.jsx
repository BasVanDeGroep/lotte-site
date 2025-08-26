import React from 'react';
import { HeartIcon } from '../assets/Svgs';
import { motion, useAnimation } from 'framer-motion';
import SoundButton from './SoundButton';
import css from '../gradient.css';

const Overlay = ({ setShowOverlay, setIsPlaying }) => {
  const heartControls = useAnimation();
  const textControls = useAnimation();
  const mainControls = useAnimation();

  const overlayHandler = async () => {
    await textControls.start({ opacity: 0 });

    await heartControls.start({
      scale: 100,
      transition: { duration: 1, ease: 'easeInOut' },
    });
    await mainControls.start({
      opacity: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    });
    setTimeout(() => {
      setShowOverlay(false);
    });
  };

  return (
    <motion.div
      className='  flex-col  flex items-center justify-center fixed gradient w-screen h-screen min-h-screen z-40  top-0 left-0 '
      initial={{ opacity: 1 }}
      animate={mainControls}
    >
      <h1 className='bg-clip-text font-bold  text-[64px] md:text-[180px] lg:text-[200px] xl:text-[240px] text-transparent bg-gradient-to-tr from-[#FF4BD8] to-[#FFD9F7]'>
        Lovey
      </h1>
      <p className='text-center'>
        Heyyy cutie, press continue please.
      </p>
      <motion.div
        className='relative flex items-center justify-center w-32 h-32 mt-8 cursor-pointer'
        onClick={() => {
          overlayHandler();
          setIsPlaying(true);
        }}
        initial={{ scale: 1 }}
        animate={heartControls}
      >
        <motion.p
          className='absolute left-1/2 top-1/2 pb-4 text-xl font-bold -translate-x-1/2 -translate-y-1/2'
          initial={{ opacity: 1 }}
          animate={textControls}
        >
          Continue
        </motion.p>
        <HeartIcon className='w-32 text-primary' />
      </motion.div>
    </motion.div>
  );
};

export default Overlay;
