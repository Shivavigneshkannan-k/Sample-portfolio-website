import React,{useEffect,useContext,createContext,useState} from "react";
import style from "./HeroStyles.module.css";
import profilePhoto from "../../assets/hero-img.png";
import themeIconLight from "../../assets/sun.svg";
import themeIconDark from "../../assets/moon.svg";
import leetcodeLight from "../../assets/twitter-light.svg"
import gitHubLight from "../../assets/github-light.svg"
import linkedInLight from "../../assets/linkedin-light.svg"
import leetcodeDark from "../../assets/twitter-dark.svg"
import linkedInDark from "../../assets/linkedin-dark.svg"
import resume from "../../assets/cv.pdf"
import {useTheme} from "../../Common/ThemeProvider"
import gitHubDark from "../../assets/github-dark.svg"


export default function Hero(){
    const {theme,toggleTheme}=useTheme();
    const themeIcon = (theme==="light")?themeIconLight:themeIconDark;
    const leetcode = (theme==="light")?leetcodeLight:leetcodeDark;
    const linkedIn = (theme==="light")?linkedInLight:linkedInDark;
    const gitHub = (theme==="light")?gitHubLight:gitHubDark;
    return(
        <section id="hero" className={style.container}>
            <div className={style.colorModeContainer}>
                <div className={style.profile}>
                    <img src={profilePhoto} alt="profile photo" className={style.profilePhoto}/>
                    <img src={themeIcon} alt="theme icon" onClick={toggleTheme} className={style.themeIcon} />
                </div>

                <div className={style.info}>
                    <h1>
                        K Shiva vignesh kannan
                    </h1>
                    <h2>Frontend Developer</h2>
                    <span>
                        <a href="https://leetcode.com/Shiva_Vignesh_Kannan/">
                            <img src={leetcode}  alt ="leetcode profile" />
                        </a>

                        <a href="https://github.com/Shivavigneshkannan-k">
                            <img src={gitHub}  alt ="git hub profile" />
                        </a>

                        <a href="https://www.linkedin.com/in/shivavigneshkannan/">
                            <img src={linkedIn}  alt ="LinkedIn profile" />
                        </a>
                    </span>
                    <p className={style.description}>With passion for developing webapps for commerical business.</p>
                    <a href={resume} download>
                        <button className="hover">Resume</button>
                    </a>
                </div>

            </div>
        </section>
    )
}