import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import { navLinks } from '../../constants'

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger : {
        trigger : 'nav',
        start : 'bottom top',
      }
    });

    navTween.fromTo('nav', {
      backgroundColor : 'transparent'},
      {backgroundColor : '#000', backgroundFilter : 'blur(10px)', duration : 2, ease : 'power1.inOut'}
    );
  })
  return (
    <nav>
      <div>
        <a href='#home' className='flex items-center gap-2'>
          <img src='/images/logo.png' alt='logo'></img>
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link) =>(
            <li key={link.id}>
              <a href={`#${link.id}`}>
                  {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar