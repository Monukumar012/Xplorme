import './BlogsStyle.css';
import axios from 'axios';
import Blog from './Blog/Blog.js';
import { useContext, useEffect, useState } from 'react';
import { blogCat } from './blogCategory'
import { ThemeContext } from '../../Context/ThemeContext';
import Loader from '../Loader/Loader.js'


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [mainBlog, setMainBlog] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(blogCat[0].type);


    // light-dark
    const theme = useContext(ThemeContext);

    useEffect(() => {
        async function fetchBlog() {
            const res = await axios.get("http://localhost:8000/api/v1/blogs");
            const data = res.data;
            if (data.success) {
                setBlogs(data.blogs);
                setMainBlog(data.blogs);
                setLoading(false);
            }
        }
        fetchBlog();
    }, []);


    function filterBlogs(type) {
        if (type === "recents") {
            const recentsBlog = mainBlog.filter((blog) => blog.code === "");
            setBlogs(recentsBlog);
        }
        else if (type === "all") {
            setBlogs(mainBlog);
        } else {
            const filterBlog = mainBlog.filter((blog) => blog.type === type);
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
                            blogs.length === 0 ? <li className='no-blog-found'>No Blog Uploaded!</li> :

                                blogs.map((blog, ind) => (
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