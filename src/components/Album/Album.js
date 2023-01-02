import React, { useEffect, useState } from 'react'
import { getVideoList } from '../../utils/getVideoList';

function Album() {
  const [videos, setVideos] = useState([]);
  async function getVideos() {
    const videoList = await getVideoList()
    setVideos(videoList);
  }
  useEffect(()=>{
    getVideos();
  }, [])
  return (
    <div className='album py-5 bg-light'>
      <div className="container">
        <div className="row">
          {
            videos.map((video)=>(
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <iframe height={200} src={`https://www.youtube.com/embed/${video.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="card-body">
                  <p className="card-text">{video.description}</p>
                </div>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Album