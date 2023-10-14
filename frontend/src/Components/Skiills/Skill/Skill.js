import './SkillStyle.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../Context/ThemeContext'


const Skill = ({tech,rate}) => {
    const dark =  useContext(ThemeContext);

   return (
    <div className={`skill-main ${dark && 'dark'}`}>
        <div className='skill-top'>
          <h3>{tech}</h3>
          <span>{rate}/10</span>
        </div>
        <div className='skill-bottom'>
          <div className={`skill-bottom-1 ${tech}-bar`} >

          </div>
        </div>
    </div>
  )
}

export default Skill