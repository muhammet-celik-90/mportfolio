import { MdComputer } from 'react-icons/md'
import { AiOutlineLineChart } from 'react-icons/ai'
import { SiAiohttp } from 'react-icons/si'

export default function WhatIDo({scrollPos}) {


    return (
        <section className="what-i-do">
            <h1 className="section-header-text">Neler Yapıyorum?</h1>
            <div className="what-card-wrapper">
                <div className={scrollPos > 800 ? "what-card slide-top-2" : "what-card"}>
                    <div className='hover-bg'></div>
                    <div className='hover-bg-dark'></div>
                    <div className="what-card-icon"><MdComputer /></div>
                    <div className="what-card-textarea">
                        <div className="what-card-text-header">Web Tasarım</div>
                        <div className="what-card-text">Web sitesi, firmanızın internet ortamındaki yüzüdür. Güzel bir tasarım ile müşterilerinizi karşılamak istemez misiniz?</div>
                    </div>
                </div>
                <div className={scrollPos > 800 ? "what-card slide-top-3" : "what-card"}>
                    <div className='hover-bg'></div>
                    <div className='hover-bg-dark'></div>
                    <div className="what-card-icon"><AiOutlineLineChart /></div>
                    <div className="what-card-textarea">
                        <div className="what-card-text-header">SEO</div>
                        <div className="what-card-text">"Arama Motoru Optimizasyonu" olarak adlandırılan SEO ile web sitenizin arama motorlarında daha çok görünürlük elde etmesini sağlarım.</div>
                    </div>
                </div>
                <div className={scrollPos > 800 ? "what-card slide-top-4" : "what-card"}>
                    <div className='hover-bg'></div>
                    <div className='hover-bg-dark'></div>
                    <div className="what-card-icon"><SiAiohttp /></div>
                    <div className="what-card-textarea">
                        <div className="what-card-text-header">Web Yazılım</div>
                        <div className="what-card-text">Güncel teknolojileri kullanarak efektif web yazılımları yapıyorum.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}