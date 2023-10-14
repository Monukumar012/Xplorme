import { useContext, useEffect, useState } from 'react';
import './BlogPageStyle.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ReactMarkdown from 'react-markdown';
import { ThemeContext } from '../../Context/ThemeContext';
import Loader from '../Loader/Loader';


const BlogPage = () => {

    // light-dark
    const theme = useContext(ThemeContext);

    const id = useParams();
    // console.log(id);
    const [blog, setBlog] = useState(null);
    async function fetchBlog() {
        const res = await axios.get(`http://localhost:8000/api/v1/blogs/${id.id}`);
        const data = res.data;;
        if (data.success) {
            setBlog(data.blog);
        }
    }

    useEffect(() => {
        fetchBlog();
    })

    return (
        <div className={`blogpage-main ${theme && 'dark'}`}>
            <div className='back-button'>
                <Link className={`${theme && 'dark-btn'}`} to={'/blogs'}>Back</Link>
                {blog && <p className='blog-date'>Created on: {blog.createdAt}</p>}
            </div>
            {!blog ? <Loader/> :

                <div className='blogpage-main-top'>
                    <h1 className={`${theme && 'text-dark-yellow'}`}>{blog.title}</h1>
                    <div className='blogpage-main-top-img'>
                        <img src={blog.image} alt='blog-pic' />
                    </div>
                    {/* <p>{blog.description}</p> */}
                    <h2 className={`${theme && 'text-dark-orange'}`}>Description</h2>
                    <div className='blog-description'>
                        <ReactMarkdown>{blog.description}</ReactMarkdown>
                    </div>

                    {blog.code &&
                        <div className='blogpage-main-top-algo'>
                            <h2 className={`${theme && 'text-dark-orange'}`}>Algorithm:</h2>
                            <SyntaxHighlighter className={`${theme && 'dark-white'}`} language="java" style={docco}>
                                {blog.code}
                            </SyntaxHighlighter>

                        </div>
                    }
                </div>

            }
        </div>
    )
}

export default BlogPage;