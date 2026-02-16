import HeroScroll from "@/components/home/HeroScroll";
import Billboard from "@/components/home/Billboard";
import LatestThreads from "@/components/home/LatestThreads";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <HeroScroll />
      <Billboard />
      <LatestThreads />
      <ScrollToTop />
    </>
  );
}
