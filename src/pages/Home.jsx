import Hero from '../components/Hero';
import Videos from '../components/Videos';
import Testimony from '../components/Testimony';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      {/* 🔍 THE FIX: KeyObjectives was likely here. Delete that line! */}
      <div className="w-full relative fluid-scroll-wrapper">
        <Videos />
        <Testimony />
        <Contact />
      </div>
    </>
  );
}