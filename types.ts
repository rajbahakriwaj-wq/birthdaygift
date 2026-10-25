export type ThemeMode = 'pink' | 'lavender' | 'peach';

export interface PhotoItem {
  id: string;
  src: string;
  title: string;
  caption: string;
  date?: string;
}

export interface BirthdayConfig {
  recipientName: string;
  nickname: string;
  title: string;
  birthdayDate: string;
  opening: {
    greeting: string;
    subheading: string;
    buttonText: string;
  };
  celebrationHeading: string;
  birthdayMessage: {
    heading: string;
    body: string;
    wishButtonText: string;
  };
  letter: {
    buttonText: string;
    title: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    hugButtonText: string;
  };
  gallery: {
    heading: string;
    subtitle: string;
    photos: PhotoItem[];
  };
  finalSurprise: {
    title: string;
    message: string;
    restartButtonText: string;
  };
  music: {
    primarySrc: string;
    fallbackSrc: string;
    statusText: string;
  };
  share: {
    shareMessage: string;
    shareTitle: string;
  };
}
