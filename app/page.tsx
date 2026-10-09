'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDownToLine,
  BellDot,
  Disc3,
  Equalizer,
  Headphones,
  Music2,
  Palette,
  Sparkles,
  Star,
  Download
} from 'lucide-react';
import { GiscusForum } from '@/components/GiscusForum';

type ReleaseAsset = {
  name: string;
  browser_download_url: string;
};

type GitHubRelease = {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  assets?: ReleaseAsset[];
};

const features = [
  {
    title: 'Local Playback',
    description: 'Stream your library with smooth decoding, gapless transitions, and instant queue control.',
    icon: Headphones
  },
  {
    title: 'Equalizer',
    description: 'Fine-tune audio with presets for bass, vocals, jazz, cinema, and custom frequencies.',
    icon: Equalizer
  },
  {
    title: 'Themes',
    description: 'Choose dark, neon, or custom UI palettes for the immersive player experience you want.',
    icon: Palette
  },
  {
    title: 'Lyrics',
    description: 'Enjoy synced lyrics and full track info for a more engaging listening session.',
    icon: Sparkles
  },
  {
    title: 'Playlist Manager',
    description: 'Build smart playlists, favorite mixes, and organize your collection by mood and genre.',
    icon: Music2
  },
  {
    title: 'Smart Notifications',
    description: 'Keep up with updates, track events, and new releases without leaving the app.',
    icon: BellDot
  }
];

const changelog = [
  {
    version: 'v2.1.0',
    date: 'Oct 2026',
    title: 'Immersive audio engine',
    detail: 'Improved equalizer responsiveness, refined playlist sync, and better offline performance.'
  },
  {
    version: 'v2.0.5',
    date: 'Sep 2026',
    title: 'Lyrics & theme improvements',
    detail: 'Added more visual styles, smoother lyrics rendering, and improved UI transitions.'
  },
  {
    version: 'v2.0.0',
    date: 'Aug 2026',
    title: 'Modernized interface',
    detail: 'Fresh UI, better search indexing, background playback improvements, and Android 14 tuning.'
  }
];

export default function HomePage() {
  const [downloadUrl, setDownloadUrl] = useState<string>('');
  const [releaseInfo, setReleaseInfo] = useState<GitHubRelease | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const repo = 'juanjosehurtadonaranjo31-svg/mp3-player-landing';
    fetch(`https://api.github.com/repos/${repo}/releases/latest`)
      .then((res) => {
        if (!res.ok) throw new Error('release fetch failed');
        return res.json();
      })
      .then((data: GitHubRelease) => {
        setReleaseInfo(data);
        const apkAsset = data.assets?.find((asset) => /\\.apk$/i.test(asset.name));
        if (apkAsset) {
          setDownloadUrl(apkAsset.browser_download_url);
        } else {
          setDownloadUrl('');
        }
      })
      .catch(() => {
        setDownloadUrl('');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="relative overflow-hidden text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,.12),transparent_20%),radial-gradient(circle_at_80%_15%,rgba(139,92,246,.18),transparent_25%)]" />

      <header className="mx-auto max-w-7xl px-4 pt-6 md:px-8">
        <nav className="glass flex items-center justify-between rounded-full px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 via-cyan-500 to-violet-500 shadow-glow">
              <Disc3 className="h-5 w-5 text-slate-950" />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.2em] text-slate-300 uppercase">
                PulseBeat
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#releases" className="transition hover:text-white">Releases</a>
            <a href="#community" className="transition hover:text-white">Community</a>
          </div>

          <a
            href={downloadUrl || '#'}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:scale-[1.02] hover:bg-slate-200"
          >
            <Download className="h-4 w-4" />
            {loading ? 'Checking...' : 'Download APK'}
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-14 md:px-8 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-teal-200">
              <Star className="h-3.5 w-3.5" />
              Premium Offline Audio
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Listen louder.
              <span className="gradient-text block">Feel every beat.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-slate-300">
              PulseBeat is a fast, beautiful Android MP3 player built for local music lovers —
              rich sound, personal themes, lyrics, playlists, and zero noise.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={downloadUrl || '#'}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
              >
                <ArrowDownToLine className="h-5 w-5" />
                {loading ? 'Loading latest release...' : releaseInfo ? `Download ${releaseInfo.tag_name}` : 'Download APK'}
              </a>

              <a
                href="#community"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/40 px-6 py-3 text-base font-medium text-slate-100 transition hover:border-slate-400"
              >
                Join community
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                4.9/5 user rating
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                12M+ tracks supported
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                100% offline-ready
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="mobile-frame w-full max-w-[420px] p-4">
              <div className="rounded-[1.4rem] border border-slate-700/80 bg-slate-950/80 p-4">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-950">
                      <Music2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Now Playing</div>
                      <div className="text-xs text-slate-400">Midnight Drive</div>
                    </div>
                  </div>
                  <button className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-300">
                    Live
                  </button>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 shadow-lg" />
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Album</div>
                      <div className="text-sm font-semibold text-slate-200">Afterglow</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>01:28</span>
                      <span>03:52</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: 16 }).map((_, idx) => (
                        <span
                          key={idx}
                          className="music-bar block w-2 rounded-full bg-gradient-to-t from-teal-400 to-violet-500"
                          style={{
                            height: `${18 + ((idx * 13) % 32)}px`,
                            animationDelay: `${idx * 0.08}s`
                          }}
                        />
                      ))}
                    </div>

                    <div className="mt-2 h-2 w-full rounded-full bg-slate-800">
                      <div className="h-2 w-[66%] rounded-full bg-gradient-to-r from-teal-400 to-violet-500" />
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <button className="rounded-full border border-slate-700 p-2 text-slate-200">
                      <span>⏮</span>
                    </button>
                    <button className="rounded-full bg-white p-3 text-slate-950">
                      <span>⏸</span>
                    </button>
                    <button className="rounded-full border border-slate-700 p-2 text-slate-200">
                      <span>⏭</span>
                    </button>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
                  <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-3">
                    <div className="text-lg font-bold text-teal-300">23</div>
                    <div>Playlists</div>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-3">
                    <div className="text-lg font-bold text-violet-300">4.9</div>
                    <div>Rating</div>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-3">
                    <div className="text-lg font-bold text-pink-300">320</div>
                    <div>EQ Presets</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-teal-300/80">Features</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Everything your music library needs</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="glass rounded-3xl p-6 shadow-card">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 via-cyan-500 to-violet-500 text-slate-950">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="releases" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-violet-300/80">Releases</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Latest updates and patch notes</h2>
          </div>

          {releaseInfo && (
            <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
              Latest: {releaseInfo.tag_name}
            </div>
          )}
        </div>

        <div className="space-y-5">
          {changelog.map((item) => (
            <article key={item.version} className="glass rounded-3xl p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="inline-flex rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                    {item.version}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                </div>
                <div className="text-sm text-slate-400">{item.date}</div>
              </div>

              <p className="mt-4 max-w-3xl text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>

        {releaseInfo && (
          <div className="glass mt-8 rounded-3xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Release notes</h3>
              <span className="text-sm text-slate-400">
                {new Date(releaseInfo.published_at).toLocaleDateString()}
              </span>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300">
              <p className="whitespace-pre-line">
                {releaseInfo.body || 'No release description provided yet.'}
              </p>
            </div>
          </div>
        )}
      </section>

      <section id="community" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <GiscusForum />
      </section>

      <footer className="mx-auto max-w-7xl px-4 pb-10 pt-8 text-center text-sm text-slate-400 md:px-8">
        © 2026 PulseBeat. Built for a premium Android music experience.
      </footer>
    </main>
  );
}
