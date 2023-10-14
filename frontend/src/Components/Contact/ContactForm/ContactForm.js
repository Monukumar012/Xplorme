import { useContext, useState } from 'react'
import './ContactFormStyle.css'
import { ThemeContext } from '../../../Context/ThemeContext'

const ContactForm = () => {
  const [data, setData] = useState({
    name:"",
    email:"",
    message:""
  })
  const dark = useContext(ThemeContext);

  function handleChange(e){
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(data);
    alert(`Hey ${data.name}, Your Email Send Successfully! I will be reply under 24 hours!`)
    setData({
      name:"",
      email:"",
      message:""
    })
  }

  return (
    <form className='contact-form'>
        <h2 className={`${dark && 'text-dark-golden'}`}>Send Email</h2>
        <input onChange={handleChange} value={data.name} required name='name' type='text' placeholder='Enter Name' />
        <input onChange={handleChange} value={data.email} required name='email' type='email' placeholder='Enter Email' />
        <textarea onChange={handleChange} value={data.message} required name='message' type='text' placeholder='Enter Message' />
        <div className='contact-form-btn'>
          <button onClick={handleSubmit}>Send</button>
        </div>
    </form>
  )
}

export default ContactForm