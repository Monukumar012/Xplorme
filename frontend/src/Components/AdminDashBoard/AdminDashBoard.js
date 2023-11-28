import React from 'react'
import './AdminDashBoardStyle.css'
import { Link, useNavigate } from 'react-router-dom'

const AdminDashBoard = ({ setUserAuth }) => {

  const navigate = useNavigate();

  function handleLogout(){
    setUserAuth(false);
    alert('Logout Successfully !')
    navigate('/');
  }

  return (
    <>

      <div className='dashboard-main'>
        <div className='dashboard-top'>
          <h3>Admin Dashboard</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
        {/* <div className='dashboard-middle'>
        <h2>Overview</h2>
        <div className='dashboard-middle-1'>
          <div className='dashboard-middle-1-main'>
              <h3>Blogs</h3>
              <div>
                <p>Public: 15</p>
                <p>Private: 15</p>
              </div>
          </div>
          <div className='dashboard-middle-1-main'>

          </div>
          <div className='dashboard-middle-1-main'>

          </div>
        </div>
      </div> */}
        <div className='dashboard-middle'>
          {/* <h2>Operation</h2> */}
          <div className='dashboard-middle-2'>
            <Link to='./addblog'>Add Blog</Link>
            <Link to='./addproject'>Add Project</Link>
            <Link to='./addskills'>Add Skill</Link>
            <Link to='./removeblog'>Remove Blog</Link>
            <Link to='./removeproject'>Remove Project</Link>
            <Link to='./removeskills'>Remove Skill</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashBoard;