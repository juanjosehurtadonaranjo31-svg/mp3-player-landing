'use client';

import { useEffect, useState } from 'react';
import { Download, Music, Disc, MessageSquare } from 'lucide-react';
import { GiscusForum } from '@/components/GiscusForum';

export default function HomePage() {
  const [downloadUrl, setDownloadUrl] = useState('');
  const [version, setVersion] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/repos/juanjosehurtadonaranjo31-svg/mp3-player-landing/releases/latest')
      .then((res) => res.json())
      .then((data) => {
        setVersion(data.tag_name || '');
        const apk = data.assets?.find((a: any) => /\.apk$/i.test(a.name));
        if (apk) setDownloadUrl(apk.browser_download_url);
      })
      .catch(() => {});
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <header className="max-w-5xl mx-auto flex justify-between items-center mb-16">
        <div className="flex items-center gap-3">
          <Disc className="h-8 w-8 text-cyan-400 animate-spin" />
          <h1 className="text-xl font-bold tracking-wider">REPRODUCTOR MP3</h1>
        </div>
        <a
          href={downloadUrl || '#'}
          className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-5 py-2 rounded-full flex items-center gap-2 transition"
        >
          <Download className="h-4 w-4" />
          {version ? `Descargar ${version}` : 'Descargar APK'}
        </a>
      </header>

      <section className="max-w-3xl mx-auto text-center my-20">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-6">
          Tu música local como nunca antes.
        </h2>
        <p className="text-slate-400 text-lg mb-8">
          Reproductor ligero, temas personalizados, ecualizador avanzado y sincronización con la comunidad.
        </p>
      </section>

      <section className="max-w-4xl mx-auto my-20">
        <GiscusForum />
      </section>
    </main>
  );
}
