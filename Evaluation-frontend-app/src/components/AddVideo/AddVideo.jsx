import React, { useState } from 'react';
import './AddVideo.css'
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddVideo = () => {
    const defaultValues = {
        title: '',
        posterurl: '',
        videourl: '',
        duration: '',

    }


    const [data, setData] = useState(defaultValues);
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    function onchangeHandler(event) {
        setData({...data, [event.target.name] : event.target.value})
    }
const date1 = new Date()
const date = `${date1.getDate()}-${date1.getMonth()+1}-${date1.getFullYear()}`;
const time = `${date1.getHours()}:${date1.getMinutes()}`



    function submitHandler(event) {
        event.preventDefault();
        const error = validate(data)
        setErrors(error)
        const hasErr = Object.keys(error).some((item)=>item) // if even single input is empty or beyond conditions hasErr gives true
        //console.log(hasErr)
        if (hasErr) {
            return;
        }
       const { title, posterurl, videourl, duration} = data;
      const values = {title, posterurl, date:date, time, duration, videourl}


        //console.log(data)
        axios.post("http://localhost:3002/videos", values)
        .then((res)=>{
            console.log(res)
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })


    }

    function validate(data) {
        const err = {}
        if (!data.title) {
            err.title = "required"
        }
        if (!data.posterurl) {
            err.posterurl = "required"
        }
        if (!data.videourl) {
            err.videourl = "required"
        }
        if (!data.duration) {
            err.duration = "required"
        }
        return err;
    }

   
    return (

        <div className="container">
            <div className="row form-container">



                <div className="col-12 col-md-5">
                    <img src='https://account.mongodb.com/static/images/auth/login_promo_desktop.png' />
                </div>
                <div className="col-12 col-md-6">

                    <form className='d-flex flex-column align-items-start m-5' onSubmit={submitHandler}>
                        <label className='ms-3'>Title</label>
                        <input type="text" placeholder='Enter Title Here' name='title' value={data.title} onChange={onchangeHandler}/>
                       { errors.title?<p className='text-light'>{errors.title}*</p>:''}

                        <label className='ms-3'>Poster Url</label>
                        <input type="text" placeholder='Enter Poster Url Here' name='posterurl' value={data.posterurl} onChange={onchangeHandler} />
                        {errors.posterurl?<p className='text-light'>{errors.posterurl}*</p>:''}


                        <label className='ms-3'>Video Url</label>
                        <input type="text" placeholder='Enter Video Url Here' name='videourl' value={data.videourl} onChange={onchangeHandler} />
                        {errors.videourl?<p className='text-light'>{errors.videourl}*</p>:errors.videourl}


                        <label className='ms-3'>Duration</label>
                        <input type="text" placeholder='Enter Duration Here' name='duration' value={data.duration} onChange={onchangeHandler} />
                       
                        {errors.duration?<p className='text-light'>{errors.duration}*</p>:""}


                        <div className='d-flex justify-content-start m-2'>
                            <button className='btn btn-outline-light' type='submit'>Submit</button>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default AddVideo