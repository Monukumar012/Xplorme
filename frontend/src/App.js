import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './routes/HomePage';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs.js';
import BlogPage from './Components/BlogPage/BlogPage.js';
import { ThemeContext } from './Context/ThemeContext';
import { useEffect, useState } from 'react';
import Skills from './Components/Skiills/Skills';
import CreateBlog from './Components/CreateBlog/CreateBlog.js';
import Login from './Components/Login/Login.js';
import AdminDashBoard from './Components/AdminDashBoard/AdminDashBoard.js';
import AddProject from './Components/AddProject/AddProject';
import { getBlogs } from './slices/blogsSlice.js';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBlogs());
  },[dispatch])

  const [dark, setDark] = useState(true);
  const [userAuth, setUserAuth] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={dark}>
        <Navbar setDark={setDark} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login userAuth={userAuth} setUserAuth={setUserAuth} />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:id' element={<BlogPage />} />
          <Route path='/admin/dashboard/addblog' element={<CreateBlog />} />
          <Route path='/admin/dashboard/addproject' element={<AddProject />} />

          <Route path='/admin/dashboard' element={userAuth ? <AdminDashBoard  setUserAuth={setUserAuth}/> :<About />} />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
