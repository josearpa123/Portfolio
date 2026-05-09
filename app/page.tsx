"use client"

import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main className="bg-[#000212]">
      <TransitionPage />
      <Introduction />
    </main>
  );
}
