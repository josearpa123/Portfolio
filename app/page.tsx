"use client"

import { CoverParticles } from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-screen h-auto sm:bg-fallback sm:bg-cover bg-no-repeat bg-gradient-cover">
    
                      <Introduction />
      </div>
    </main>
  );
}
