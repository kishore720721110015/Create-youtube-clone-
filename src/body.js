import React from 'react';
import './body.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';
import image9 from './image9.jpg';
function VideoGrid() {
  return (
    <div className="video-grid">
      <div className="video-item">
        <img src={image1} className="thumbnail" />
        <div className="title"><h4>Amazing Pottery Art</h4></div>
        <h5>Art Channel</h5>
        <p>1.2M views • 1 day ago</p>
      </div>
      <div className="video-item">
        <img src={image2} className="thumbnail" />
        <div className="title"><h4>City Lights Timelapse</h4></div>
        <h5>Timelapse Hub</h5>
        <p>823K views • 3 days ago</p>
      </div>
      <div className="video-item">
        <img src={image3} className="thumbnail" />
        <div className="title"><h4>Extreme Moto Stunts</h4></div>
        <h5>Thrill Seekers</h5>
        <p>3.4M views • 2 weeks ago</p>
      </div>
      <div className="video-item">
        <img src={image4} className="thumbnail" />
        <div className="title"><h4>Wakeboarding Adventure</h4></div>
        <h5>Water Sports TV</h5>
        <p>500K views • 5 days ago</p>
      </div>
      <div className="video-item">
        <img src={image5} className="thumbnail" />
        <div className="title"><h4>Paralympic Achievements</h4></div>
        <h5>Sports World</h5>
        <p>900K views • 1 week ago</p>
      </div>
      <div className="video-item">
        <img src={image6} className="thumbnail" />
        <div className="title"><h4>Epic Mountain Jump</h4></div>
        <h5>Outdoor Explorers</h5>
        <p>823K views • 3 days ago</p>
      </div>
      <div className="video-item">
        <img src={image7} className="thumbnail" />
        <div className="title"><h4>City Lights Timelapse</h4></div>
        <h5>Timelapse Hub</h5>
        <p>2.8M views • 3 days ago</p>
      </div>
      <div className="video-item">
        <img src={image8} className="thumbnail" />
        <div className="title"><h4>City Lights Timelapse</h4></div>
        <h5>Timelapse Hub</h5>
        <p>823K views • 3 days ago</p>
      </div>
      <div className="video-item">
        <img src={image9} className="thumbnail" />
        <div className="title"><h4>City Lights Timelapse</h4></div>
        <h5>Timelapse Hub</h5>
        <p>823K views • 3 days ago</p>
      </div>
    </div>
  );
}

export default VideoGrid;