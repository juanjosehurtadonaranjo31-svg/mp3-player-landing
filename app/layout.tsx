import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://juanjosehurtadonaranjo31-svg.github.io/mp3-player-landing'),
  title: 'PulseBeat | MP3 Player for Android',
  description:
    'PulseBeat is a modern Android MP3 music player with themes, equalizer, playlist management, lyrics support, and offline listening.',
  keywords: [
    'Android MP3 player',
    'music player app',
    'offline music player',
    'equalizer app',
    'mp3 player'
  ],
  openGraph: {
    title: 'PulseBeat | Android MP3 Player',
    description:
      'Experience luxury-level audio playback with smart playlists, equalizer, lyrics, and immersive themes.',
    url: 'https://juanjosehurtadonaranjo31-svg.github.io/mp3-player-landing',
    siteName: 'PulseBeat',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'PulseBeat Android MP3 Player'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PulseBeat | Android MP3 Player',
    description:
      'Modern Android music player with local playback, lyrics, themes, and advanced controls.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
