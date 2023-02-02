import { FaHome, FaBlog } from 'react-icons/fa'
import { SiAboutdotme } from 'react-icons/si'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function HeaderEN() {

    const headerGoster = useSelector((state) => state.headerShow.value)

    const initialScreenWidth = window.screen.width;

    const [screenWidth,setScreenWidth] = useState(initialScreenWidth)

    function headerShow () {
        if(screenWidth > 768) {
            return "flex"
        }else {
            if(headerGoster) {
                return "flex"
            }else {
                return "none"
            }
        }
    }

    useEffect(()=> {
        function getWidth () {
            setScreenWidth(window.screen.width);
        }
        window.addEventListener("resize", getWidth);
        return () => {
            window.removeEventListener("resize", getWidth);
        };
    },[])

    return (
        <div className="header" style={{display: headerShow()}}>
            <div className="header-logo">
                <img src="images/MAmblemWhite.png" alt="logo" className="header-img" />
            </div>
            <div className="header-nav-area">
                <nav className="header-nav">
                    <li className='nav-item'>
                        <FaHome className='header-icon' />
                        <span className='tooltiptext'>Home</span>
                    </li>
                    <li className='nav-item'>
                        <SiAboutdotme className='header-icon' />
                        <span className='tooltiptext'>About</span>
                    </li>
                    <li className='nav-item'>
                        <FaBlog className='header-icon' />
                        <span className='tooltiptext'>Blog</span>
                    </li>
                    <li className='nav-item'>
                        <MdOutlineWorkOutline className='header-icon' />
                        <span className='tooltiptext'>Works</span>
                    </li>
                    <li className='nav-item'>
                        <FiPhoneCall className='header-icon' />
                        <span className='tooltiptext'>Contact</span>
                    </li>
                </nav>
            </div>
        </div>
    )
}