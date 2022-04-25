import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import "./home.css";
import { EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons";
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
  ];

  return (
    <div className="big1">





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










      <div className="info1">
        <div className="info">
          <EnvironmentOutlined />
          <h1>ADRESSE</h1>
          <p>C/ Finlandia 108 Nave 5,14014 Córdoba, Espagne </p>
        </div>

        <div className="info">
          <PhoneOutlined />
          <h1>TÉLÉPHONE</h1>
          <p>
            T 04 11 93 26 60 Horaire d'attention téléphonique: De 9h à 19h sans
            interruption{" "}
          </p>
        </div>

        <div className="info">gggggg</div>
      </div>













      <div className="moh">

     

        



        
      </div>
    </div>
  );
};

export default home;
