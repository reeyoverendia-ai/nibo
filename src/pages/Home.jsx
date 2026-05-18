import Hero from '../components/Hero';
import Executive from '../components/Executive';
import Testimony from '../components/Testimony';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      {/* 🔍 THE FIX: KeyObjectives was likely here. Delete that line! */}
      <div className="w-full relative fluid-scroll-wrapper">
        <Executive />
        <Testimony />
        <Contact />
      </div>
    </>
  );
}
