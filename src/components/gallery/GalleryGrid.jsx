import React from "react";

const GalleryGridCard = ({ name, role, profileImg, mainImg }) => {
  return (
    <div className="group h-[500px] relative  rounded-lg shadow-lg overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl w-72">
       <div className="p-4 flex items-center">
        <img src={profileImg} className="w-10 h-10 rounded-full mr-3" alt="GalleryGrid" />
        <div>
          <h3 className="font-semibold ">{name}</h3>
          <p className="text-sm ">{role}</p>
        </div>
      </div>
  
      <div className="relative w-full overflow-hidden">
        <img
          src={mainImg}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:-translate-y-1/3"
          alt="Main"
        />
      </div> 
    </div>
  );
};
 
const GalleryGridSection = () => {
  const profiles = [
    {
      name: "Emma Clarke",
      role: "Digital Marketer",
      profileImg: "/user.jpg",
      mainImg: "/profile1.png",
      followers: "15K",
    },
    {
      name: "Sophia Lane",
      role: "Content Creator",
      profileImg: "/user.jpg",
      mainImg: "/profile2.png",
      followers: "12K",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/user.jpg",
      mainImg: "/profile3.png",
      followers: "20K",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/user.jpg",
      mainImg: "/profile4.png",
      followers: "20K",
    },
    {
      name: "Emma Clarke",
      role: "Digital Marketer",
      profileImg: "/user.jpg",
      mainImg: "/profile1.png",
      followers: "15K",
    },
    {
      name: "Sophia Lane",
      role: "Content Creator",
      profileImg: "/user.jpg",
      mainImg: "/profile2.png",
      followers: "12K",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/user.jpg",
      mainImg: "/profile3.png",
      followers: "20K",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/user.jpg",
      mainImg: "/profile4.png",
      followers: "20K",
    },
    {
      name: "Emma Clarke",
      role: "Digital Marketer",
      profileImg: "/user.jpg",
      mainImg: "/profile1.png",
      followers: "15K",
    },
    {
      name: "Sophia Lane",
      role: "Content Creator",
      profileImg: "/user.jpg",
      mainImg: "/profile2.png",
      followers: "12K",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/user.jpg",
      mainImg: "/profile3.png",
      followers: "20K",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/user.jpg",
      mainImg: "/profile4.png",
      followers: "20K",
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center shadow py-10">
      {profiles.map((profile, index) => (
        <GalleryGridCard key={index} {...profile} />
      ))}
    </div>
  );
};

export default GalleryGridSection;
