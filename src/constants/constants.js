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
        description: "Find your new favorite coffee shop",
        screenshot: cafe,
        icon: cafeIcon
    },
    {
        name: "Satellite",
        deployedURL: "https://github.com/kstick9210/satellite",
        ghURL: "https://github.com/kstick9210/satellite",
        description: "A new CSS framework currently in development",
        screenshot: satellite,
        icon: satIcon
    },
    {
        name: "Trippin'",
        deployedURL: "https://trippin-cwd.herokuapp.com/",
        ghURL: "https://github.com/Cinque-Web-Development/Trippin",
        description: "Plan your next trip",
        screenshot: trippin,
        icon: trippinIcon
    },
    {
        name: "Collect the Cosmos",
        deployedURL: "http://cosmos.kathleenstickel.com/",
        ghURL: "https://github.com/kstick9210/collect-the-cosmos",
        description: "Explore the universe with NASA",
        screenshot: cosmos,
        icon: cosmosIcon
    },
    {
        name: "Cinque",
        deployedURL: "http://cinque.cinquewd.com/",
        ghURL: "https://github.com/Cinque-Web-Development/cinque",
        description: "Start your day with Cinque",
        screenshot: cinque,
        icon: cinqueIcon
    }

];

export const TECH_SKILLS = ["React, ", "Express, ", "MongoDB/Mongoose, ", "Node, ", "JavaScript, ", "Django, ", "Python, ", "HTML, ", "CSS"];

// export const SOFT_SKILLS = [""]