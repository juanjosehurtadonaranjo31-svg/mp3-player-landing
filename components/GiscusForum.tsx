'use client';

import Giscus from '@giscus/react';

export function GiscusForum() {
  return (
    <div className="glass rounded-3xl p-4 md:p-6 shadow-card">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-teal-300/80">Community</p>
        <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
          Discuss, request, and share
        </h3>
      </div>

      <div className="rounded-2xl border border-slate-700/80 bg-slate-950/40 p-2">
        <Giscus
          repo="juanjosehurtadonaranjo31-svg/mp3-player-landing"
          repoId="REPLACE_WITH_REPO_ID"
          category="General"
          categoryId="REPLACE_WITH_CATEGORY_ID"
          mapping="pathname"
          term="general"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark_dimmed"
          lang="en"
        />
      </div>
    </div>
  );
}
