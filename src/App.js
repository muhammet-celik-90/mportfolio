import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import About from "./components/About";
import AboutEN from "./components/AboutEN";
import Header from "./components/Header";
import HeaderEN from "./components/HeaderEN";
import HomeBanner from "./components/HomeBanner";
import HomeBannerEN from "./components/HomeBannerEN";
import MobHeader from "./components/MobHeader";
import Portfolio from "./components/Portfolio";
import PortfolioEN from "./components/PortfolioEN";
import WhatIDo from "./components/WhatIDo";
import WhatIDoEN from "./components/WhatIDoEN";

function App() {

  useEffect(() => {
    document.title = "MSOFTWARE"
  }, [])

  const [scrollPos, setScrollPos] = useState()

    function handleScroll() {
        const scrollPosition = window.scrollY; // => scroll position
        setScrollPos(scrollPosition)
    }

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

  const currentLang = useSelector((state) => state.language.value)

  return (
    <div className="container-fluid">
      <MobHeader />
      {currentLang === 'TR' ? <Header /> : <HeaderEN />}
      <div className="container-wrapper">
        {currentLang === 'TR' ? <HomeBanner /> : <HomeBannerEN />}
        {currentLang === 'TR' ? <About scrollPos={scrollPos} /> : <AboutEN scrollPos={scrollPos} />}
        {currentLang === 'TR' ? <WhatIDo scrollPos={scrollPos} /> : <WhatIDoEN  scrollPos={scrollPos}/>}
        {currentLang === 'TR' ? <Portfolio scrollPos={scrollPos} /> : <PortfolioEN  scrollPos={scrollPos}/>}
      </div>
    </div>
  );
}

export default App;
