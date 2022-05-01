import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import "./home.css";
import { CheckCircleTwoTone } from "@ant-design/icons";
import Typewriter from "typewriter-effect";


const home = () => {
 

  return (
    <div className="home">



      <div className="time"></div>


      <div className="carousel">
        <Carousel isAutoPlaying={true} autoPlayInterval={3000} widgetsHasShadow={true} hasIndexBoard={false} hasDotButtons={"bottom"} hasSizeButton={false} hasMediaButton={false} hasThumbnails={false}
           style={{ height: "35rem", width: "100%", backgroundsize: "30%" }}
        >
          

           <div className="det0"> 
                <div className="det2">
                <p><CheckCircleTwoTone />Espaces Cardio Training, musculation libre et guidée</p>
                <p><CheckCircleTwoTone />Une communauté de passionnés !</p>
                <p><CheckCircleTwoTone />Accès à nos salles 7j/7 et 365 jours/an</p>
                </div>
          </div>


          <div className="det1">
            <div className="det2">
               <p><CheckCircleTwoTone />Cage de Cross Training et accessoires complets</p>
               <p><CheckCircleTwoTone />Matériel haut de gamme et connecté</p>
               <p><CheckCircleTwoTone />Cours collectifs vidéo exclusifs</p>
               <p><CheckCircleTwoTone />Wifi gratuit</p>
          </div>
          </div>


          <div className="det1">
            <div className="dettext">
            <Typewriter options={{ delay:10}}  onInit={(typewriter) => { typewriter
       
                           .typeString("GeeksForGeeks you know ")
                           .pauseFor(100)
       
       
                           .typeString("so welcome to your gym")
                           .pauseFor(100)
       
                           .typeString("mehdi ooooo")
                           .pauseFor(500)
       
                           .deleteAll()
                           .start();
                           }} />

          </div>
          </div>


        </Carousel>
      </div>










      <div className="texteffect">
        <Typewriter options={{ delay:10}}  onInit={(typewriter) => { typewriter
       
              .typeString("GeeksForGeeks you know ")
              .pauseFor(50)
              
              //.deleteChars(10)
              .typeString("so welcome to your gym")
              .pauseFor(50)
              
              .typeString("mehdi ooooo")
               .pauseFor(500)
              
              .deleteAll()
              .start();
          }}
        />
      </div>








     <div className="pourquoinous">
      
     <div className="det">
<p><CheckCircleTwoTone />Espaces Cardio Training, musculation libre et guidée</p>
<p><CheckCircleTwoTone />Une communauté de passionnés !</p>
<p><CheckCircleTwoTone />Accès à nos salles 7j/7 et 365 jours/an</p>
<p></p>
     </div>
     <div className="det">
<p><CheckCircleTwoTone />Cage de Cross Training et accessoires complets</p>
<p><CheckCircleTwoTone />Matériel haut de gamme et connecté</p>
<p><CheckCircleTwoTone />Cours collectifs vidéo exclusifs</p>
<p><CheckCircleTwoTone />Wifi gratuit</p>
     </div>






     </div>

<div>
              
</div>






      












      <div className="moh">

     

        



        
      </div>
    </div>
  );
};

export default home;
