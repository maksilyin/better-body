import Header from "./components/header/Header";
import Video from "./components/sections/Video";
import Services from "./components/sections/Services";
import Studio from "./components/sections/Studio";
import Specialists from "./components/sections/Specialists";
import Equipments from "./components/sections/Equipments";
import Feedback from "./components/sections/Feedback";
import Contacts from "./components/sections/Contacts";
import Scrollbar from 'smooth-scrollbar';
import {useEffect, useRef} from "react";

function App() {
    const app = useRef();
    useEffect(()=>{
        let damping = 0.07;
        if (window.screen.width < 992) {
            damping = 0.05
        }
        Scrollbar.init(app.current, {
            damping,
        });
    }, [])

  return (
          <div id={'App'} ref={app} className={`h-[100vh] overflow-auto`}>
              <Header></Header>
              <Video></Video>
              <Services className={`pt-[97px] sm:pt-[190px] mb-[-97px] md:mb-0`}></Services>
              <Studio></Studio>
              <Specialists className={`mb-[97px] mt-[-143px] xl:mt-0 md:mb-[252px]`}></Specialists>
              <Equipments className={`mb-[97px] md:mb-[223px]`}></Equipments>
              <section id={'contacts'} className={`overflow-hidden`}>
                  <Feedback className={`mb-[171px]`}></Feedback>
                  <Contacts></Contacts>
              </section>
          </div>
  );
}

export default App;
