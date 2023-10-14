import './ProjectsStyle.css';
import Project from './Project/Project.js';
import { ThemeContext } from '../../Context/ThemeContext';
import { useContext } from 'react';
const vid1 = require('../../assest/vid1.mp4')
const vid2 = require('../../assest/vid2.mp4')
const vid3 = require('../../assest/vid3.mp4')

const Projects = () => {
  const dark = useContext(ThemeContext);
  return (
    <div className={`projects-main ${dark && 'dark'}`}>
      <div className='projects-main-top'>
        <h3 className={`${dark && 'text-dark-golden'}`}>PORTFOLIO</h3>
        <h2 className={`${dark && 'text-dark-green'}`}>Each project is a unique piece of development</h2>
      </div>

      <div className='projects-main-bottom'>
        <Project
          link = "https://github.com/Monukumar012/Portfolio"
          url={vid1}
          videoo='true'
          heading="Portfolio (September 2023)"
          techstack={['HTML','CSS', 'Reactjs']}
          para="Portfolio website for showcasing my development and technical skills, With portfolio website showcasing your skills is become eaiser"
        />
        <Project
          link = "https://github.com/Monukumar012/Login_Signup_API"
          url={vid3}
          videoo='true'
          heading="Login SignUp Page (September 2023)"
          techstack={['Reactjs','Nestjs', 'MongoDb']}
          reverse="true"
          para="It is Login Signup page in which user can register through email and all data stored in Mongo Database then user can login through register email and password, and user login and register request handled by backend in which I use Nestjs."
        />
        <Project
          link = "https://github.com/Monukumar012/Attandance_System_Based_on_Face_Recognition"
          url={vid2}
          videoo='true'
          heading="Attendance System Based on Face Recognition (FEBRUARY 2023)"
          techstack={['Python','Tkinter', 'OpenCV', 'Machine Learning']}
          para="The project is revolutionized in order to overcome the problems of conventional system.
          Face recognition and then marking the attendance is our project all about. The database of all the
          students in the class is stored in a folder and when the face of the individual student matches with
          one of the faces stored image, attendance is marked else the face is ignored and attendance not
          marked."
        />
      </div>
    </div>
  )
}

export default Projects;