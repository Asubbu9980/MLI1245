import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import './FrontPage.css';
import { useNavigate } from 'react-router-dom';


const FrontPage = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSort, setIsSort] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3002/videos")
      .then((res) => {
        console.log(res.data)
        sorting(res.data)
        setSearchData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])



  function playVideo(id) {

    navigate('/' + id)


  }

  function sorting(data) {
    const sortedData = data.sort((a, b)=> a.date>b.date?-1:1)
    setIsSort(true)
    setData([...sortedData])
 
  }

  function searchHandler(event) {
    const text = event.target.value.toLowerCase();
    const filteredData = searchData.filter((each) => {
      return each.title.toLowerCase().includes(text)
    })
    setData(filteredData)
  }


  return (
    <>
      <div className="container">
        <div className="row">





          <div className='col-12 d-flex justify-content-center'>
            <input type='search' className='m-3 searchbar' placeholder='search here' onChange={searchHandler} />
          </div>

          {data.map((each) => {
            return (
            
              <div key={each._id} className="col-12 col-md-6 col-lg-3">
                
                  <div className='m-3'>

                    <div onClick={() => playVideo(each._id)}>

                      <img className='img' src={each.posterurl} />



                      <div className='d-flex justify-content-between m-2' >
                      <h5>{each.title}</h5>
                        <span className='duration'>{each.duration}</span>
                        
                      </div>
                    </div>
                  </div>



                 
                    
                    <p >Created At: <span className='time-style'>{each.date} {each.time}</span></p>
                 
                
              </div>
            )
          })}

        </div>
      </div>

    </>
  )

}
{/* <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="play bi bi-play-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                      </svg> */}



export default FrontPage