import { useEffect, useState } from "react";
import Nav from "./Nav";


export default function HomeBannerEN() {

    var slider = document.getElementsByClassName("text-slider")

    function slide() {
        var i = 0
        setInterval(function () {
            if (i < slider.length) {
                if (i > 0 && i < slider.length) {
                    slider[i - 1].classList.add("opacity-0")
                }
                slider[i].classList.remove("opacity-0")
                i++
            }else if (i === slider.length) {
                    slider[i - 1].classList.add("opacity-0")
                    i = 0;
                }
        }, 2000)
    }

    useEffect(() => {
        slide()
    }, [])

    return (
        <section className="home-banner">
            <Nav/>
            <div className="home-banner-wrapper">
                <div className="home-banner-left">
                    <p>Hello,</p>
                    <span className="welcome">Welcome to <strong>M</strong>SOFTWARE</span>
                    <span className="text-slider opacity-0">Web Design</span>
                    <span className="text-slider opacity-0">SEO</span>
                    <span className="text-slider opacity-0">Graphic Design</span>
                    <span className="text-slider opacity-0">Web Software</span>
                </div>
            </div>
        </section>
    )
}