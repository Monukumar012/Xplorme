import React, { useContext } from 'react'
import './HeroStyle.css'
import { RiJavascriptFill } from 'react-icons/ri';
import { SiNestjs } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { BiLogoReact } from 'react-icons/bi';
import { ThemeContext } from '../../Context/ThemeContext';
import profile1 from '../../assest/profile1.jpg'

const Hero = () => {
  const dark = useContext(ThemeContext);
  return (
    <div className={`hero-main ${dark && 'dark'}`}>
      <div className='hero-top'>
        <div className='hero-top-left'>
            <h4>Hello,I'm</h4>
            <h1 className={`${dark && 'text-dark-yellow'}`}>Monu Kumar</h1>
            <p className={`${dark && 'text-dark-green'}`} >And I'm Full Stack Developer</p>
            <div className={`hero-top-left-icon ${dark && 'icon-dark'}`}>
              <a target='new' href='http://www.github.com/Monukumar012'><i className="fa-brands fa-github fa-2xl"></i></a>
              <a target='new' href='https://www.linkedin.com/in/monukumar012'><i className="fa-brands fa-linkedin fa-2xl"></i></a>
              <a target='new' href='https://drive.google.com/file/d/1vT9O9C1yx9w7H7liOS5ZQ_74njT1H9WT/view?usp=sharing'><i className="fa-solid fa-file fa-2xl"></i></a>
              
            </div>
        </div>
        <div className={`hero-top-right ${dark && 'dark'}`}>
            <div className='hero-top-right-profile'>
                <img src={profile1} alt='profile'/>
            </div>
        </div>
      </div>
      <div className={`hero-bottom ${dark && 'dark'}`}>
        <div className={`hero-bottom-top ${dark && 'dark'}`}>
            <h3 className={`${dark && 'text-dark-golden'}`}>Tech Stack:</h3>
            <div className={`hero-bottom-top-tech`}>
              <p className='java-logo'><FaJava/></p>
              <p className='javascript-logo'><RiJavascriptFill/></p>
              <p className='react-logo'><BiLogoReact/></p>
              <p className='nest-logo'><SiNestjs/></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero