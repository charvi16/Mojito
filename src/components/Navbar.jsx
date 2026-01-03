import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { navLinks } from '../../constants'

function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger : {
        trigger : 'nav',
        start : 'bottom-up',
      }
    });

    navTween.fromTo('nav', {
      backgroundColor : 'transparent'},
      {backgroundColor : '#000050', backgroundFilter : 'blur(10px)', duration : 2, ease : 'power1.inOut'}
    );
  })
  return (
    <nav>
      <div>
        <a href='#home' className='flex items-center gap-2'>
          <img src='/images/logo.png' a lt='logo'></img>
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