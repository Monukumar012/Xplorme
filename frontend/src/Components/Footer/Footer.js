import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './FooterStyle.css'

const Footer = () => {
  const dark = useContext(ThemeContext);
  return (
    <div className={`footer-main ${dark && 'dark'}`}>
        <div className='footer-top'>
            <div className='footer-top-1'>
                <p className={`${dark && 'text-dark-green'}`}>Copyright © 2023. All rights are reserved</p>
            </div>
            <div className='footer-top-2'>
                <a target='new' className={dark && `text-dark-white`} href='http://www.github.com/Monukumar012'><i className="fa-brands fa-github fa-xl"></i></a>
                <a target='new' className={dark && `text-dark-white`} href='https://www.linkedin.com/in/monukumar012'><i className="fa-brands fa-linkedin fa-xl"></i></a>
                <a target='new' className={dark && `text-dark-white`} href='http://www.instagram.com/im.monukumar'><i className="fa-brands fa-instagram fa-xl"></i></a>
                <a target='new' className={dark && `text-dark-white`} href='https://twitter.com/im_monukumar'><i className="fa-brands fa-twitter fa-xl"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Footer