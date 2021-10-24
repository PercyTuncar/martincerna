import React from 'react';
import './VideoBackground.css';

 
export default function VideoBackground() {
    return ( 
        <header> 
        <div class="overlay"></div> 
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/photo.mp4?alt=media&token=f37402ce-8df1-4c21-a20c-065be291a309" type="video/mp4"/>
        </video>
  
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <span class="display-3" style={{color:'#fff'}}>MARTIN CERNA</span>
              <div><span class="lead mb-0" style={{color:'rgb(213 213 213)'}} >Fotógrafo Profesional Para Eventos en Perú</span></div>
            </div>
          </div>
        </div>
      </header>
     
    );
  }