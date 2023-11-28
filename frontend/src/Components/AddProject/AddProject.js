import React, { useState } from 'react'
import './AddProjectStyle.css'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addBlogs } from '../../slices/blogsSlice';

const AddProject = () => {

    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const empty={
        title:"",
        description:"",
        code:"",
        image:"",
    }

    const [inputs, setInputs] = useState(empty);

    function handleChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }

    function handleReset(e){
        e.preventDefault();
        setInputs(empty);
        setImage(null);
    }

    async function handleSubmit(e){
        e.preventDefault();
        dispatch(addBlogs(inputs));
        // alert("Added");


        // console.log(data);
        // const res = await axios.post("http://localhost:8000/api/v1/project",inputs);
        // const data=res.data;
        // console.log(data);
        // if(data.success){
        //     alert(data.message);
        // }

    }


    function handleImage(e){
        const reader= new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = ()=>{
            setImage(reader.result);
            setInputs({...inputs,image:reader.result})
        }
        reader.onerror=(e)=>{
            alert.log('Error: ',e );
        }
    }

    return (
        <div className='create-project-main'>
            <h1>Create Project</h1>
            <form className='create-project-form'>
                <input required
                    type='text'
                    placeholder='Title'
                    name='title'
                    onChange={handleChange}
                    value={inputs.title}
                />
                <textarea required
                    type='text'
                    className='description'
                    placeholder='Description'
                    name='description'
                    onChange={handleChange}
                    value={inputs.description}
                />
                <textarea 
                    type='text'
                    className='code'
                    placeholder='Algorithms'
                    name='code'
                    onChange={handleChange}
                    value={inputs.code}
                />
                {image && 
                    <div className='create-project-image'>
                        <img src={image} alt='img'/>
                    </div>
                }
                <input 
                    accept='image/*'
                    type='file'
                    className='image'
                    placeholder='Choose Image'
                    name='image'
                    onChange={handleImage}
                />
                <div className='create-project-btn'>
                    <button onClick={handleSubmit} className='create-btn'>Add</button>
                    <button onClick={handleReset} className='reset-btn'>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default AddProject