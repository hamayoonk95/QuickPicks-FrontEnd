import React from "react";
import './StreamingPlatformIcon.css';
import netflix from "../../assets/netflix.png";
import vudu from "../../assets/vudu.png";
import prime from "../../assets/prime.png";
import disneyPlus from "../../assets/disney+.png";
import disney from "../../assets/disney.png";

const StreamingPlatformIcon = ({src, link}) => {
    let icon;
    switch (src) {
        case 'netflix':
        icon = netflix;
        break;
        case 'vudu':
        icon = vudu;
        break;
        case 'amazon_prime':
        icon = prime;
        break;
        case 'disney_plus':
        icon = disneyPlus;
        break;
        case 'apple_tv':
        icon = disney;
        break;
        default:
            // Create a Google search link for the movie title
            const googleSearch = `https://www.google.com/search?q=${title}`;
            return <a href={googleSearch}>Google search</a>;
    }

    return <a href={link}><img className="s-icon" src={icon} alt="Hello" /></a>;
}

export default StreamingPlatformIcon;