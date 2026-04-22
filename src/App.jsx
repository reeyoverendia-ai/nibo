import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Videos from './components/Videos';
import Testimony from './components/Testimony';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Make sure there are NO curly braces or style attributes here */}
        <div className="w-full relative fluid-scroll-wrapper">
          <Videos />
          <Testimony />
          <Contact />
        </div>

      </main>
      
      <footer className="py-10 text-center text-[#FFFFF0]/60 text-sm bg-[#667b68]">
        © 2026 NIBO Manufacturing Co. | Built with Vite + React
      </footer>
    </div>
  );
}
export default App;