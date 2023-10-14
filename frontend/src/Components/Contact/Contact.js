import './ContactStyle.css'
import ContactWay from './ContactWay/ContactWay.js'
import ContactForm from './ContactForm/ContactForm.js'
import { ThemeContext } from '../../Context/ThemeContext';
import { useContext } from 'react';

const Contact = () => {
  const dark = useContext(ThemeContext);
  return (
    <div className={`contact-main ${dark && 'dark'}`}>
      <div className='contact-main-top'>
        <h3 className={`${dark && 'text-dark-golden'}`}>CONTACT</h3>
        <h2 className={`${dark && 'text-dark-green'}`}>Don't be shy! Hit me up! 👇</h2>
      </div>
      <div className='contact-bottom'>
        <div className='contact-bottom-left'>
          <ContactWay
            link='http://www.linkedin.com/monukumar012'
            icon='fa-brands fa-linkedin fa-2xl'
            heading='Linkedin'
            username='@monukumar012'
          />
          <ContactWay
            link='https://twitter.com/im_monukumar'
            icon='fa-brands fa-twitter fa-2xl'
            heading='Twitter'
            username='@Monukumar012'
            />
          <ContactWay
            link='monukumar.offical@gmail.com'
            icon='fa-solid fa-envelope fa-2xl'
            heading='Gmail'
            username='monukumar.offical@gmail.com'
            
          />
        </div>
        <div className='contact-bottom-right'>
            <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Contact