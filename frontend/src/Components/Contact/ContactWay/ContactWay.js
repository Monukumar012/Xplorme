import React, { useContext } from 'react'
import './ContactWayStyle.css'
import { ThemeContext } from '../../../Context/ThemeContext'

const ContactWay = ({icon,heading,link,username}) => {
    const dark = useContext(ThemeContext);
    return (
        <div className='contact-way-main'>
            <div className='contact-way-left'>
                <i className={icon}></i>
            </div>
            <div className='contact-way-right'>
                <div className='contact-way-right-1'>

                </div>
                <div className='contact-way-right-2'>
                    <h3 className={`${dark && 'text-dark-green'}`}>{heading}</h3>
                    <a className={`${dark && 'text-dark-grey'}`} href={link}>{username}</a>
                </div>
            </div>
        </div>
    )
}

export default ContactWay