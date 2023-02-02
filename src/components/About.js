import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function About({scrollPos}) {

    

    return (
        <section className="about">
            <div className="about-container">
                <div className={scrollPos > 100 ? "about-social  slide-top-2" : "about-social"}>
                    <div className="social-media-avatar">
                        <img
                            src="images/profil-photo.png"
                            alt="profil-avatar"
                            className="about-avatar"
                        />
                    </div>
                    <div className="social-icons">
                        <a href="#" className="social-icons-item"><FaTwitter /></a>
                        <a href="#" className="social-icons-item"><FaGithub /></a>
                        <a href="#" className="social-icons-item"><FaInstagram /></a>
                        <a href="#" className="social-icons-item"><FaLinkedinIn /></a>
                    </div>
                    <div className='about-definiton'>
                        <h4>Full-Stack Developer</h4>
                        <h1>Muhammet Çelik</h1>
                    </div>
                </div>
                <div className={scrollPos > 100 ? "about-skills  slide-top-3" : "about-skills"}>
                    <div className='skills-card'>
                        <h1 className='section-header-text'>Yeteneklerim</h1>
                        <div className='skills-item-wrapper'>
                            <div className='skills-item'>
                                <img alt='react' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' />
                                <span className='skills-tooltip'>React</span>
                            </div>
                            <div className='skills-item'>
                                <img alt='php' src='icons/php-logo.png' />
                                <span className='skills-tooltip'>Php</span>
                            </div>
                            <div className='skills-item'>
                                <img alt='bootstrap' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png' />
                                <span className='skills-tooltip'>Bootstrap</span>
                            </div>
                            <div className='skills-item'>
                                <img alt='javascript' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' />
                                <span className='skills-tooltip'>JavaScript</span>
                            </div>
                            <div className='skills-item'>
                                <img alt='sass' src='icons/sass-logo.png' />
                                <span className='skills-tooltip'>Sass</span>
                            </div>
                            <div className='skills-item'>
                                <img alt='html' src='icons/html-logo.png' />
                                <span className='skills-tooltip'>HTML</span>
                            </div>
                            <div className='skills-item'>
                                <img alt='css' src='icons/css-logo.png' />
                                <span className='skills-tooltip'>CSS</span>
                            </div>
                            <div className='skills-item'>
                                <img alt='jquery' src='icons/jquery-logo.png' />
                                <span className='skills-tooltip'>JQuery</span>
                            </div>
                            <div className='skills-item'>
                                <img alt='canva' src='icons/canva-logo.png' />
                                <span className='skills-tooltip'>Canva</span>
                            </div>
                            <div className='skills-item'>
                                <img alt='photoshop' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Photoshop_CC_icon.png/640px-Photoshop_CC_icon.png' />
                                <span className='skills-tooltip'>Photoshop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}