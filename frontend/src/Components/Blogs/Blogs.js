import './BlogsStyle.css';
import Blog from './Blog/Blog.js';
import { useContext, useEffect, useState } from 'react';
import { blogCat } from './blogCategory'
import { ThemeContext } from '../../Context/ThemeContext';
import Loader from '../Loader/Loader.js'
import {useSelector} from 'react-redux';


const Blogs = () => {

    const {blogs,loading,error} = useSelector(state=>state.blogs);
    const [blogCopy, setBlogs] = useState(blogs);

    useEffect(() => {
      setBlogs(blogs)
    }, [loading])
    

    const [activeCategory, setActiveCategory] = useState(blogCat[0].type);


    // light-dark
    const theme = useContext(ThemeContext);




    function filterBlogs(type) {
        if (type === "recents") {
            const recentsBlog = blogs.filter((blog) => blog.code === "");
            setBlogs(recentsBlog);
        }
        else if (type === "all") {
            setBlogs(blogs);
        } 
        else {
            const filterBlog = blogs.filter((blog) => blog.type === type);
            setBlogs(filterBlog);
        }
    }

    return (
        <div className={`blogs-main ${theme && 'dark'}`}>
            <div className='blog-main-type'>
                <ul>
                    {blogCat.map((cat, ind) => (
                        <li
                            key={ind}
                            className={`${theme && 'dark-btn'} ${activeCategory === cat.type && 'active'}`}
                            onClick={() => {
                                setActiveCategory(cat.type);
                                filterBlogs(cat.type);
                            }}
                        >
                            {cat.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='blogs-main-bottom'>
                {loading ? <Loader/> :

                    <ul className='blogs-main-bottom-1'>
                        {
                            blogCopy.length === 0 ? <li className='no-blog-found'>No Blog Uploaded!</li> :

                                blogCopy.map((blog, ind) => (
                                    <Blog blog={blog} key={ind} />
                                ))
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default Blogs