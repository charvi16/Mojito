import { ScrollTrigger, SplitText } from 'gsap/all';
//will probobly have to use splittext from gsap-trial/all (its paid)😩
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Cocktail from './components/Cocktail';
import About from './components/About';
import './App.css'

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main>
       <Navbar/>
       <Hero/>
       <Cocktail/>
       <About/>
    </main>
  );
}

