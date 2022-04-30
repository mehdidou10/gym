import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import "./home.css";
import { CheckCircleTwoTone } from "@ant-design/icons";
import Typewriter from "typewriter-effect";


const home = () => {
  const images = [
    {
      src: "https://miro.medium.com/max/530/0*pFreozs82Ny_rt_E.jpg",
    },
    {
      src: "https://www.bianoti.com/wp-content/uploads/2015/11/1920x1080-Wallpapers-Motivation-Bodybuilding-Blognbspfond-ecran-hd1.jpg",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJDpDncAS9rQ9KoYQpVOF5DZCK7O3nLlKMXQ&usqp=CAU",
    },
    {
      src: "https://www.sport-equipements.fr/wp-content/uploads/2021/09/alle-crossfit-maison.jpg",
    },
    {
      src: "https://i.pinimg.com/736x/6d/06/92/6d0692118ef4012bb66487b2f5f8540a.jpg",
    },

    {
     
    }
  ];

  return (
    <div className="home">



      <div className="time"></div>


      <div className="carousel">
        <Carousel
          images={images}
          isAutoPlaying={true}
          autoPlayInterval={3000}
          widgetsHasShadow={true}
          hasIndexBoard={false}
          hasDotButtons={"bottom"}
          hasSizeButton={false}
          hasMediaButton={false}
          hasThumbnails={false}
          style={{ height: "35rem", width: "100%", backgroundsize: "30%" }}
        />
      </div>










      <div className="texteffect">
        <Typewriter
        options={{
          delay:10
        }}
          onInit={(typewriter) => {
            typewriter
              
              .typeString("GeeksForGeeks you know ")
              
              .pauseFor(100)
              //.deleteChars(10)
              .typeString("so welcome to your gym")
              .pauseFor(100)
              
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
