import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {

    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;



  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.Hero} 
                src={heroImg} 
                alt="Profile picture of Chidera Ulu" 
            />
            <img
                className={styles.colorMode} 
                src={themeIcon} 
                alt="Color mode icon" 
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                Chigoziem
                <br />
                Iheanacho
            </h1>
            <h2>Project Manager</h2>
            <span>
                <a href="https://twitter.com/" target="_blank">
                    <img src={twitterIcon} alt="Twitter-icon" />
                </a>
                <a href="https://github.com/" target="_blank">
                    <img src={githubIcon} alt="Github-icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin-icon" />
                </a>
            </span>
            <p>
            As a highly organized and results-driven project manager, I have extensive experience 
            leading cross-functional teams and delivering projects on time, within scope, and on budget. 
            My expertise spans various industries, with a strong focus on Agile and Waterfall
            methodologies, risk management, and effective stakeholder communication. I am skilled
            in utilizing project management tools such as Jira, MS Project, and Asana, ensuring 
            seamless collaboration and efficient workflow. With a proven track record of driving 
            successful project outcomes, I am passionate 
            about aligning project goals with business objectives and leading teams to success.
            </p>
            <a href={CV} download>
                <button className="hover" >
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero
