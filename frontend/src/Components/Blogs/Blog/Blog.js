import './BlogStyle.css'
import {useNavigate} from 'react-router-dom';

const Blog = ({blog,key}) => {


  const navigate = useNavigate()

  function handleClick(){
    // alert(props.blog.title);
    navigate(`./${blog._id}`);
  }

  return (
    <li className='blog-main' key={key} onClick={handleClick}>
        <div className='blog-main-top' >
          <h1>{blog.title}</h1>
          <img src={blog.image} alt='blog-pic'/>
          <p>{blog.description}</p>
        </div>
    </li>
  )
}

export default Blog