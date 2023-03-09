import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Feature from './pages/Feature';

function App() {
  return (
    <div className='px-10 pt-14 sm:px-36 sm:pt-24 bg-[#1A1A1A] max-h-full font-sans'>
      <Navbar />
      <Hero />
      <Feature />
    </div>
  );
}

export default App;
