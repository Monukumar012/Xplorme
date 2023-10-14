import { useContext } from 'react'
import './CodingProfileStyle.css'
import { ThemeContext } from '../../../Context/ThemeContext'

const CodingProfile = ({h3,h4,username,link}) => {
    const dark = useContext(ThemeContext);
  return (
    <div className='coding-profile-main'>
            {/* <div className='coding-profile-left'>
                <img src={url}/>
            </div> */}
            <div className='coding-profile-right'>
                <div className='coding-profile-right-1'>
                </div>
                <div className='coding-profile-right-2'>
                    <div className='coding-profile-right-2-1'>
                        <h3 className={`${dark && 'text-dark-green'}`}>{h3}</h3>
                        <h4 className={`${dark && 'text-dark-green'}`}>{h4}</h4>
                    </div>
                    
                    <a target='new' className={`${dark && 'text-dark-grey'}`} href={link}>{username}</a>
                </div>
            </div>
        </div>
  )
}

export default CodingProfile