

export default function Portfolio({scrollPos}) {
    return (
        <section className="portfolio">
            <h1 className="section-header-text">Portföyüm</h1>
            <div className={scrollPos > 1300 ? "portfolio-wrapper slide-top-2" : "portfolio-wrapper"}>
                <div className="portfolio-card">
                    <a href="https://www.perdevikurumsal.com/giris" target="_blank">
                        <img src="images/portfolio-perdevi.png" alt="portfolio-perdevi" className="portfolio-img" />
                    </a>
                </div>
                <div className="portfolio-card">
                    <a href="https://persiy.com" target="_blank">
                        <img src="images/portfolio-persiy.png" alt="portfolio-persiy" className="portfolio-img" />
                    </a>
                </div>
            </div>
        </section>
    )
}