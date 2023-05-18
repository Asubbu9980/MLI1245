import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './VideoPlay.css'

const VideoPlay = () => {
    const params = useParams()
    const [data, setData] = useState({})
    const id = params.id
    //console.log(id)
    useEffect(() => {
        axios.get('http://localhost:3002/videos/' + id)
            .then((res) => {
                console.log(res)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    console.log(data.videourl)
    //    const stringdata = JSON.stringify(data)
    //    console.log(stringdata)

useEffect(()=>{
    
},[])




    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='d-flex justify-content-center m-5 video-container'>

                <video height={500} width={600} controls key={data.videourl}>

                    <source src={data.videourl} type="video/mp4" />

                </video>

               
            </div>
            <h5>{data.title}</h5>
        </div>
    )
}

export default VideoPlay