import './SkillsStyle.css'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import Skill from './Skill/Skill'
import CodingProfile from './CodingProfile/CodingProfile.js';

const Skills = () => {

    const dark = useContext(ThemeContext);

    return (
        <div className={`skills-main ${dark && 'dark'}`}>
            <div className='skills-main-top'>
                <h3 className={`${dark && 'text-dark-sky'}`}>TECHNICAL SKILLS</h3>
                {/* <h2 className={`${dark && 'text-dark-white'}`}>More about me 👇</h2> */}
            </div>
            <div className='skills-bottom'>

                <div className='skills-bottom-left'>
                    <Skill tech='Java' rate='8' />
                    <Skill tech='Javascript' rate='9' />
                    <Skill tech='Reactjs' rate='8' />
                    <Skill tech='Nestjs' rate='6' />
                    <Skill tech='Data Stutcture & Alogorithm'  rate='7'/>
                    <Skill tech='SQL' rate='7.5' />
                    <Skill tech='Computer Network'  rate='7.5'/>
                    <Skill tech='Operating System'  rate='7'/>
                </div>

                <div className='skills-bottom-right'>
                    <div className='skills-bottom-right-1'>
                        <h2 className='text-dark-sky'>Coding Profile</h2>
                    </div>
                    <div className='skills-bottom-right-2'>
                        <CodingProfile
                            link='http://www.leetcode.com/monukumar012'
                            h3='Leetcode | '
                            h4="Max Rating:1758"
                            heading1='Leetcode | '
                            username='@monukumar012'
                        />
                        <CodingProfile
                            link='https://auth.geeksforgeeks.org/user/m_o_n_u'
                            h3='GFG | '
                            h4=" Institution Rank 1"
                            username='@m_o_n_u'
                        />
                        <CodingProfile
                            link='https://www.codechef.com/users/monukumar123'
                            h3='Codechef | '
                            h4=" Max Rating:1529"
                            username='@monukumar012'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills