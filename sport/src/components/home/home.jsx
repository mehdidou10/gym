import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const home = () => {
  const images = [
    {
      src: "https://miro.medium.com/max/530/0*pFreozs82Ny_rt_E.jpg",
    },
    {
      src: "https://www.bianoti.com/wp-content/uploads/2015/11/1920x1080-Wallpapers-Motivation-Bodybuilding-Blognbspfond-ecran-hd1.jpg",
   },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJDpDncAS9rQ9KoYQpVOF5DZCK7O3nLlKMXQ&usqp=CAU" },
    { src: "https://www.sport-equipements.fr/wp-content/uploads/2021/09/alle-crossfit-maison.jpg" },
    { src:"https://i.pinimg.com/736x/6d/06/92/6d0692118ef4012bb66487b2f5f8540a.jpg"}
  ];

  return (
    <div style={{display:'flex',justifyContent:'center',width:'100%',height:'120vh',backgroundColor:'red',backgroundposition:' center top',backgroundsize:'cover'}}>
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
      style={{ height: "35rem", width: "100%",backgroundsize:'30%' }}
    />
    </div>
  );
};

export default home;