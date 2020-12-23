import cafe from "../assets/images/local-cafe.jpg";
import trippin from "../assets/images/trippin.jpg";
import cosmos from "../assets/images/cosmos.jpg";
import trippinIcon from "../assets/images/trippin_icon.png";
import chatIcon from "../assets/images/chat_icon.png";
import satIcon from "../assets/images/satellite_icon.png";

export const PROJECTS = [
    {
        name: "Locally Caffeinated",
        deployedURL: "https://locally-caffeinated.herokuapp.com/",
        ghURL: "https://github.com/kstick9210/locally-caffeinated",
        description: "Locally Caffeinated allows users to search for coffee shops and maintain lists of their favorite cafes.",
        screenshot: cafe,
        icon: "https://i.imgur.com/2yQv6fi.png?2"
    },
    {
        name: "Satellite",
        deployedURL: "https://github.com/kstick9210/satellite",
        ghURL: "https://github.com/kstick9210/satellite",
        description: "Satellite is a new CSS framework currently in development.",
        screenshot: "",
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
        icon: "https://i.imgur.com/bZ1iAl7.jpg?1"
    },
    {
        name: "Cinque Chat",
        deployedURL: "hhttps://cinque-chat.herokuapp.com/",
        ghURL: "https://github.com/Cinque-Web-Development/cinque-chat",
        description: "",
        screenshot: "",
        icon: chatIcon
    }

];

export const TECH_SKILLS = ["React.js", "Express.js", "MongoDB", "Mongoose", "Node.js", "JavaScript", "Django", "Python", "jQuery", "HTML", "CSS"];

// export const SOFT_SKILLS = [""]