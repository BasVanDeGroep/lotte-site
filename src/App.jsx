import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';

import './App.css';
import {
  ArrowLeft,
  CloseIcon,
  DiscordIcon,
  ExternalIcon,
  SteamIcon,
  TwitchIcon,
  XIcon,
} from './assets/Icons';

import SETUP from './assets/SETUP';
import CT_SKINS from './assets/CT';
import T_SKINS from './assets/T';

const CLASS = {
  CARD: 'border-border bg-primary/25 backdrop-blur-xl border-[2px] p-5 rounded-[16px] lg:rounded-[24px] card-bg relative overflow-hidden group hover:border-white transition-colors cursor-pointer h-[172px] md:h-[196px] lg:h-full',
  CARD_TEXT:
    'p-5 lg:p-8 lg:pt-16 text-start lg:text-center  absolute left-0 lg:inset-x-0 bottom-0 lg:bg-gradient-to-t from-[#CD42C1] to-transparent z-20',
  CARD_H: 'font-[900]  text-[24px] lg:text-[36px]',
  CARD_P: 'text-sm md:text-lg font-[300]',
  CARD_IMAGE_WRAPPER: 'left-20 md:left-[96px] lg:inset-0 h-full relative',
  CARD_SYMBOL:
    'absolute max-lg:w-[64px] -left-20 top-0 lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 mix-blend-color-dodge lg:group-hover:scale-120 lg:transition-transform',
  BUTTON:
    'rounded-[12px] bg-primary/25 max-md:flex items-center gap-3 flex-1 border-border border-[2px] py-6 p-4 md:pb-3 button-bg md:space-y-2 cursor-pointer hover:border-white transition-colors',
  BUTTON_TEXT: 'flex flex-1 justify-between text-lg',
};

function getSkinWear(wear) {
  if (wear < 0 || wear > 1) {
    throw new Error('Wear value must be between 0 and 1');
  }
  if (wear <= 0.07) return 'FN';
  if (wear <= 0.15) return 'MW';
  if (wear <= 0.38) return 'FT';
  if (wear <= 0.45) return 'WW';
  return 'BS';
}

function App() {
  const [activePage, setActivePage] = useState('idle');
  const [setupPage, setSetupPage] = useState({
    hover: 'idle',
    page: 'idle',
  });

  const CloseButton = () => (
    <button
      onClick={() => setSetupPage({ ...setupPage, page: 'idle' })}
      className="absolute w-16 flex items-center justify-center pr-1 aspect-square top-5 right-5 rounded-lg border-[2px] hover:bg-white hover:text-primary transition-colors border-white/40 bg-white/10 backdrop-blur-[24px]"
    >
      <CloseIcon className="w-5" />
    </button>
  );

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center max-lg:pt-4 max-lg:pb-8">
      {activePage === 'idle' && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-[1280px] space-y-6 p-3 lg:p-8 mx-auto flex-1 flex flex-col max-h-[1020px]"
          >
            <div className="px-3">
              <h1 className="text-[32px] md:text-[42px] lg:text-[56px] font-[900]">
                Hey, I'm Lotte
              </h1>
              <p className="md:text-[18px] font-[400]">
                I’m a 24 year old gamer that has been playing since 2006
              </p>
            </div>
            <div className="grid h-max md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 flex-1 auto-rows-fr items-stretch">
              {/*CT CARD*/}
              <button
                className={CLASS.CARD}
                onClick={() => setActivePage('CT')}
              >
                <div className={CLASS.CARD_TEXT}>
                  <h1 className={CLASS.CARD_H}>CT LOADOUT</h1>
                  <p className={CLASS.CARD_P}>My CS Inventory</p>
                </div>
                <div className={CLASS.CARD_IMAGE_WRAPPER}>
                  <img
                    src="/CT_AGENT.webp"
                    className="absolute -translate-x-1/2 left-1/2 max-lg:-top-4 max-lg:w-[180px] lg:-bottom-10 z-10 max-h-[648px] group-hover:scale-105 transition-transform"
                  />
                  <img src="/CT.webp" className={CLASS.CARD_SYMBOL} />
                </div>
              </button>
              {/*T CARD*/}
              <button className={CLASS.CARD} onClick={() => setActivePage('T')}>
                <div className={CLASS.CARD_TEXT}>
                  <h1 className={CLASS.CARD_H}>T LOADOUT</h1>
                  <p className={CLASS.CARD_P}>My CS Inventory</p>
                </div>
                <div className={CLASS.CARD_IMAGE_WRAPPER}>
                  <img
                    src="/T_AGENT.webp"
                    className="absolute -translate-x-1/2  left-1/2 max-lg:-top-16 max-lg:w-[180px] lg:-bottom-4 z-10 group-hover:scale-105 transition-transform"
                  />
                  <img src="/T.webp" className={CLASS.CARD_SYMBOL} />
                </div>
              </button>
              {/*Setup CARD*/}
              <button
                className={twMerge(CLASS.CARD, 'sm:col-span-2 lg:col-span-1')}
                onClick={() => setActivePage('SETUP')}
              >
                <div className={CLASS.CARD_TEXT}>
                  <h1 className={CLASS.CARD_H}>MY SETUP</h1>
                  <p className={CLASS.CARD_P}>My Desk & Hardware</p>
                </div>
                <img
                  src="/setup.webp"
                  className="absolute max-lg:opacity-50 inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              <a
                className={CLASS.BUTTON}
                href="https://x.com/BakaLovey"
                target="_blank"
              >
                <div className="flex items-start justify-between">
                  <XIcon className="w-8 md:w-12" />
                  <ExternalIcon className="w-6 max-md:hidden" />
                </div>
                <div className={CLASS.BUTTON_TEXT}>
                  <p className="font-[300]">Twitter</p>
                  <p className="font-[400]">BakaLovey</p>
                </div>
              </a>
              <a
                className={CLASS.BUTTON}
                href="https://steamcommunity.com/id/loveyCS/"
                target="_blank"
              >
                <div className="flex items-start justify-between">
                  <SteamIcon className="w-8 md:w-12" />
                  <ExternalIcon className="w-6 max-md:hidden" />
                </div>
                <div className={CLASS.BUTTON_TEXT}>
                  <p className="font-[300]">Steam</p>
                  <p className="font-[400]">LoveyCS</p>
                </div>
              </a>
              <a className={CLASS.BUTTON}>
                <div className="md:flex items-start justify-between">
                  <DiscordIcon className="w-8 md:w-12" />
                  <ExternalIcon className="w-6 max-md:hidden" />
                </div>
                <div className={CLASS.BUTTON_TEXT}>
                  <p className="font-[300]">Discord</p>
                  <p className="font-[400]">LoveyCS</p>
                </div>
              </a>
              <a
                className={CLASS.BUTTON}
                href="https://www.twitch.tv/shylottie"
                target="_blank"
              >
                <div className="flex items-start justify-between">
                  <TwitchIcon className="w-8 md:w-12" />
                  <ExternalIcon className="w-6 max-md:hidden" />
                </div>
                <div className={CLASS.BUTTON_TEXT}>
                  <p className="font-[300]">Twitch</p>
                  <p className="font-[400]">ShyLottie</p>
                </div>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      {(activePage === 'CT' || activePage === 'T') && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[1356px] w-full mx-auto px-4 md:py-8 flex flex-col lg:flex-row gap-8"
          >
            <button
              onClick={() => setActivePage('idle')}
              className="fixed flex lg:hidden items-center gap-1 -translate-x-1/2 left-1/2 bottom-4 bg-white px-6 py-2.5 rounded-full z-20 text-primary"
            >
              <ArrowLeft className="w-6" />
              Go Back
            </button>
            <div className="space-y-6 md:min-w-[400px]">
              <div className="rounded-[32px] backdrop-blur-lg overflow-hidden relative border-[2px] border-border h-[320px]  lg:h-[800px] bg-gradient-loadout-cover">
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-bg to-transparent z-20">
                  <h1 className="font-[500] text-[28px] md:text-[32px]">
                    {activePage === 'CT' ? 'Counter Terrorist' : 'Terrorist'}
                  </h1>
                  <p className="opacity-60 font-[400]">Full Loadout</p>
                </div>
                <div className="absolute max-lg:right-20 lg:bottom-0">
                  <img
                    src={`${activePage}_AGENT.webp`}
                    className="w-[360px]  lg:min-w-[400px] relative z-[15]"
                  />
                  <div className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 z-[10]">
                    <img
                      src={`${activePage}.webp`}
                      className="min-w-[440px] mix-blend-color-dodge"
                    />
                  </div>
                </div>
              </div>
              <button
                className="gap-3 flex items-center text-[24px] px-4 hover:gap-2 transition-all max-lg:hidden"
                onClick={() => setActivePage('idle')}
              >
                <ArrowLeft className="w-6" />
                Go Back
              </button>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 h-max">
              {{
                CT: CT_SKINS,
                T: T_SKINS,
              }[activePage].map((skin) => (
                <a
                  href={skin.inspect}
                  target="_blank"
                  key={skin.item}
                  className="px-3 bg-primary/25 hover:border-white transition-colors flex max-md:flex-col gap-3 py-4 md:items-center backdrop-blur-lg border-[2px] border-border rounded-[16px] w-full"
                >
                  <div className="w-full md:w-[112px]">
                    <img src={`/skins/${skin.image}.webp`} />
                  </div>
                  <div className="space-y-1.5 md:space-y-4">
                    <div>
                      <p className="text-white/80 text-xs font-[300]">
                        {skin.item}
                      </p>
                      <p className="md:text-lg leading-[120%] lg:leading-[120%] font-[700]">
                        {skin.finish}
                      </p>
                    </div>
                    <p className="text-xs font-[400] text-white/80">
                      {getSkinWear(skin.float)} {skin.float}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      {activePage === 'SETUP' && (
        <div className="max-h-screen aspect-[403/182] mx-auto relative ">
          <button
            onClick={() => setActivePage('idle')}
            className="absolute w-16 flex items-center z-40 justify-center pr-1 aspect-square top-5 left-5 rounded-lg border-[2px] hover:bg-white hover:text-primary transition-colors border-white/40 bg-white/10 backdrop-blur-[24px]"
          >
            <CloseIcon className="w-5" />
          </button>
          <AnimatePresence>
            {setupPage.page === 'pc' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                exit={{ opacity: 0 }}
                className="absolute z-50 inset-0"
              >
                <CloseButton />
                <div className="absolute p-6 space-y-8 border-[2px] rounded-2xl bg-white/10 backdrop-blur-[24px] right-5 bottom-5 border-white/40">
                  {Object.entries(SETUP.PC).map(([k, v]) => (
                    <div className="space-y-1">
                      <p className="font-medium text-sm uppercase">{k}</p>
                      <p className="font-black">{v}</p>
                    </div>
                  ))}
                </div>
                <img src="CLOSEUP_PC.webp" className="h-full" />
              </motion.div>
            )}
            {setupPage.page === 'kb' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                exit={{ opacity: 0 }}
                className="absolute z-50 inset-0"
              >
                <CloseButton />
                <div className="absolute p-6 space-y-8 border-[2px] rounded-2xl bg-white/10 backdrop-blur-[24px] right-5 bottom-5 border-white/40">
                  {Object.entries(SETUP.KB).map(([k, v]) => (
                    <div className="space-y-1">
                      <p className="font-medium text-sm uppercase">{k}</p>
                      <p className="font-black">{v}</p>
                    </div>
                  ))}
                </div>
                <img src="CLOSEUP_KB.webp" className="h-full" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* <button
            className="absolute h-[50%] w-[25%] left-[0] top-[15%] z-30"
            onClick={() => setSetupPage({ ...setupPage, page: 'misc' })}
            onMouseEnter={() => setSetupPage({ ...setupPage, hover: 'misc' })}
            onMouseLeave={() => setSetupPage({ ...setupPage, hover: 'idle' })}
          /> */}
          {/* <button
            className="absolute h-[20%] w-[15%] left-[43%] top-[36%] z-30 "
            onClick={() => setSetupPage({ ...setupPage, page: 'pc' })}
            onMouseEnter={() => setSetupPage({ ...setupPage, hover: 'pc' })}
            onMouseLeave={() => setSetupPage({ ...setupPage, hover: 'idle' })}
          />
          <button
            onClick={() => setSetupPage({ ...setupPage, page: 'kb' })}
            className="absolute h-[14%] w-[50%] left-[20%] top-[85%] z-30  "
            onMouseEnter={() => setSetupPage({ ...setupPage, hover: 'kb' })}
            onMouseLeave={() => setSetupPage({ ...setupPage, hover: 'idle' })}
          />
          <button
            className="absolute w-[48%] h-[28%] left-[25%] top-[50%] z-20"
            onClick={() => setSetupPage({ ...setupPage, page: 'monitor' })}
            onMouseEnter={() =>
              setSetupPage({ ...setupPage, hover: 'monitor' })
            }
            onMouseLeave={() => setSetupPage({ ...setupPage, hover: 'idle' })}
          /> */}
          <div
            className={twMerge(
              'w-full h-full transition-opacity absolute inset-0 bg-[#2F002F]/60 z-10 opacity-0',
              !(setupPage.hover === 'idle') && 'opacity-100'
            )}
          >
            <img
              src={`HOVER_${setupPage.hover.toUpperCase()}.webp`}
              className="h-full"
            />
          </div>
          <img src="test.jpg" className="h-full" />
        </div>
      )}
    </div>
  );
}

export default App;
