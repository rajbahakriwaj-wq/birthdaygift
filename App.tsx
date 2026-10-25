import React, { useState } from 'react';
import { ThemeMode } from './types';
import { BackgroundEffects } from './components/BackgroundEffects';
import { ThemeSelector } from './components/ThemeSelector';
import { MusicPlayer } from './components/MusicPlayer';
import { SurpriseLanding } from './components/SurpriseLanding';
import { BirthdayCelebration } from './components/BirthdayCelebration';
import { BirthdayMessage } from './components/BirthdayMessage';
import { HeartfeltLetter } from './components/HeartfeltLetter';
import { PhotoGallery } from './components/PhotoGallery';
import { FinalSurprise } from './components/FinalSurprise';
import { ShareSection } from './components/ShareSection';

export const App: React.FC = () => {
  const [hasOpened, setHasOpened] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeMode>('pink');
  const [startMusicTrigger, setStartMusicTrigger] = useState<boolean>(false);

  const handleOpenSurprise = () => {
    setHasOpened(true);
    setStartMusicTrigger(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setHasOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-between transition-colors duration-700 selection:bg-pink-300 selection:text-pink-900">
      {/* Dynamic Background Aesthetic with glowing hearts, sparkles, butterflies, petals */}
      <BackgroundEffects theme={theme} />

      {/* Background Music Player (never unmounts or restarts on theme changes) */}
      <MusicPlayer autoStartTrigger={startMusicTrigger} />

      {!hasOpened ? (
        /* Surprise Landing Screen */
        <SurpriseLanding onOpen={handleOpenSurprise} />
      ) : (
        /* Birthday Celebration World */
        <div className="w-full flex flex-col items-center animate-fade-in">
          {/* Top Sticky Bar: Theme Selector and Title */}
          <header className="sticky top-3 z-30 w-full max-w-4xl px-4 flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-pink-200/80 shadow-sm text-xs font-serif font-bold text-pink-700">
              <span>🎀</span>
              <span className="hidden sm:inline">A Little World of Love for Didu</span>
              <span className="sm:hidden">For Didu</span>
              <span>💗</span>
            </div>

            {/* Working Theme Selector */}
            <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />
          </header>

          {/* Main Content Sections */}
          <main className="w-full flex flex-col items-center space-y-4 sm:space-y-8">
            {/* 1. Animated Heading & Birthday Cake */}
            <BirthdayCelebration />

            {/* 2. Birthday Message & Make a Wish Button */}
            <BirthdayMessage />

            {/* 3. Heartfelt Letter with Animated Envelope */}
            <HeartfeltLetter />

            {/* 4. Scrapbook Photo Gallery with Polaroid Frames */}
            <PhotoGallery />

            {/* 5. Final Gift Box Surprise */}
            <FinalSurprise onRestart={handleRestart} />

            {/* 6. Shareable Link & Social Options */}
            <ShareSection />
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
