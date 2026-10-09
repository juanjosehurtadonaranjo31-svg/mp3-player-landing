'use client';

import Giscus from '@giscus/react';

export function GiscusForum() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-6">
      <h3 className="mb-4 text-2xl font-bold text-white">Foro y Comunidad</h3>
      <Giscus
        repo="juanjosehurtadonaranjo31-svg/mp3-player-landing"
        repoId="REPLACE_WITH_REPO_ID"
        category="General"
        categoryId="REPLACE_WITH_CATEGORY_ID"
        mapping="pathname"
        term="general"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark_dimmed"
        lang="es"
      />
    </div>
  );
}
