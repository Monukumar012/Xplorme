import React from 'react'
import './AdminDashBoardStyle.css'
const AdminDashBoard = () => {
  return (
    <div className='dashboard-main'>
        <h1>Admin Dashboard</h1>
        <div className='dashboard-main-top'>
            <button>Add Blog</button>
            <button>Add Project</button>
            <button>Add Skill</button>
        </div>
    </div>
  )
}

export default AdminDashBoard