import { useEffect, useState } from "react";
import Nav from "./Nav";


export default function HomeBanner() {

    var slider = document.getElementsByClassName("text-slider")

    function slide() {
        var i = 0;
        setInterval(function () {
            if (i < slider.length) {
                if (i > 0 && i < slider.length) {
                    slider[i - 1].classList.add("opacity-0")
                }
                slider[i].classList.remove("opacity-0")
                i++
            } else if (i === slider.length) {
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
            <Nav SLIDER={slider}/>
            <div className="home-banner-wrapper">
                <div className="home-banner-left">
                    <p>Merhaba,</p>
                    <span className="welcome"><strong>M</strong>SOFTWARE<small>'e hoşgeldiniz</small></span>
                    <span className="text-slider opacity-0">Web Tasarım</span>
                    <span className="text-slider opacity-0">SEO Hizmeti</span>
                    <span className="text-slider opacity-0">Grafik Tasarım</span>
                    <span className="text-slider opacity-0">Web Yazılım</span>
                </div>
            </div>
        </section>
    )
}