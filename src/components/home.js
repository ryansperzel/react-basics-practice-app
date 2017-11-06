import React, { Component } from 'react'
import '../index.css'
import SoundPlayer from './SoundPlayer'



 const HomePage = (props) => {
   return (
     <div>
       <p className="ghibli-header">Welcome to Ghibli World</p>
       <div className="ghibli-bg-gif">
         <img text-align="center" src="../original2.png" alt="" height="500" width="500" />
       </div>
       <audio autoPlay>
          <source src="../OneSummersDay.mp3" type="audio/mpeg" />
        </audio>
     </div>
   )
}
export default HomePage
