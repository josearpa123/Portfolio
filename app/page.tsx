import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";
import Changelog from "@/components/changelog";
import ContainerPage from "@/components/container-page";

export default function Home() {
  return (
    <main className="bg-[#000212] overflow-x-hidden">
      <TransitionPage />
      <Introduction />
      <ContainerPage>
        <Changelog />
      </ContainerPage>
    </main>
  );
}
