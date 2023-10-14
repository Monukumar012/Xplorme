import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './AboutStyle.css';
import hero1 from '../../assest/hero1.jpg'
import hero2 from '../../assest/hero2.jpg'

function About() {
    const dark = useContext(ThemeContext);
    return (

        <div className={`about ${dark && 'dark'}`}>
            <div className={`about-main  ${dark && 'about-box-dark'}`} >

                <div className={`about-left  ${dark && 'about-box-dark'}`}>
                    <img src={!dark ? hero2 : hero1} alt='img' />

                </div>

                <div className={`about-right ${dark && 'about-box-dark'}`}>
                    <h3 className={`${dark && `text-dark-golden`}`}>ABOUT ME</h3>
                    {/* <h2 className={`${dark && `text-dark-white`}`}>A dedicated Full Stack Developer</h2> */}
                    <p className={`${dark && `text-dark-grey`}`}>Hello, 
I'm Monu Kumar, a passionate computer science student currently pursuing my B.Tech from Meerut Institute of Technology, Meerut. I have a strong foundation in programming and a keen interest in competitive programming and back-end development, with my proficiency in data structures and algorithms and Reactjs and Nestjs.
I have solved over 700 problems on various platforms related to DSA, which has helped me develop a logical and analytical mindset.

In my free time, I enjoy helping others by clearing their doubts related to data structures and algorithms. It brings me great joy to share my knowledge and help others in their learning journey.
I'm always eager to learn new things and take on new challenges that allow me to grow and develop both personally and professionally. If you're interested in connecting or collaborating, please feel free to reach out.</p>
                </div>

            </div>
        </div>
    );
}


export default About;