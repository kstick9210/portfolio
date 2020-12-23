import cafe from "../assets/images/local-cafe.jpg";
import cafeIcon from "../assets/images/cafe_icon.png";
import satellite from "../assets/images/satellite.png";
import satIcon from "../assets/images/satellite_icon.png";
import trippin from "../assets/images/trippin.jpg";
import trippinIcon from "../assets/images/trippin_icon.png";
import cosmos from "../assets/images/cosmos.jpg";
import cosmosIcon from "../assets/images/cosmos_icon.jpg";
import cinque from "../assets/images/cinque.png";
import cinqueIcon from "../assets/images/cinque_icon.png";

export const PROJECTS = [
    {
        name: "Locally Caffeinated",
        deployedURL: "https://locally-caffeinated.herokuapp.com/",
        ghURL: "https://github.com/kstick9210/locally-caffeinated",
        description: "Locally Caffeinated allows users to search for coffee shops and maintain lists of their favorite cafes.",
        screenshot: cafe,
        icon: cafeIcon
    },
    {
        name: "Satellite",
        deployedURL: "https://github.com/kstick9210/satellite",
        ghURL: "https://github.com/kstick9210/satellite",
        description: "Satellite is a new CSS framework currently in development.",
        screenshot: satellite,
        icon: satIcon
    },
    {
        name: "Trippin'",
        deployedURL: "https://trippin-cwd.herokuapp.com/",
        ghURL: "https://github.com/Cinque-Web-Development/Trippin",
        description: "Trippin is a full stack web application built with MongoDB, Express, React, and Node. Users can search for locations using the Google Maps API, view hotels and restaurants, and create trips.",
        screenshot: trippin,
        icon: trippinIcon
    },
    {
        name: "Collect the Cosmos",
        deployedURL: "http://cosmos.kathleenstickel.com/",
        ghURL: "https://github.com/kstick9210/collect-the-cosmos",
        description: "Collect the Cosmos is an application that allows users to search for and create collections of photos of stars, planets, and other extraordinary objects in the universe. This project utilizes the MERN stack and consumes the NASA Photo Library API.",
        screenshot: cosmos,
        icon: cosmosIcon
    },
    {
        name: "Cinque",
        deployedURL: "#",
        ghURL: "https://github.com/Cinque-Web-Development/cinque",
        description: "",
        screenshot: cinque,
        icon: cinqueIcon
    }

];

export const TECH_SKILLS = ["React", "Express", "MongoDB/Mongoose", "Node", "JavaScript", "Django", "Python", "jQuery", "HTML", "CSS"];

// export const SOFT_SKILLS = [""]