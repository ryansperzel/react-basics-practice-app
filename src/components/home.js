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
     </div>
   )
}
export default HomePage
