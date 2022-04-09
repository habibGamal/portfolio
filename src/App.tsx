import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBriefcase, faComment, faGraduationCap, faHomeAlt, faLayerGroup, faUser } from '@fortawesome/free-solid-svg-icons';
import './sass/App.scss';
import React, { useState } from 'react';
import Header from './sections/header';
import About from './sections/about';
import Services from './sections/services';
import Experience from './sections/experience';
import RecentWork from './sections/recent_work';
import Contacts from './sections/contacts';
import EscapeModal from './components/escape_modal';
import SideBar from './sections/side_bar';
export const ModalContext = React.createContext<null | { escape: boolean, setEscape: Function }>(null);
function App() {
  const [escape, setEscape] = useState(false);
  
  const [showBar, setShowBar] = useState(false);
  function openBar(setEscape: Function){
    if(!showBar){
      setShowBar((value)=>{
        setEscape(!value);
        return !value;
      })
    }
  }
  return (
    <ModalContext.Provider value={{ escape, setEscape }}>
      <div className="App relative">
        <EscapeModal />
        <nav className="py-2 relative z-20 bg-xindigo text-white md:hidden">
          <div className="container">
            <div className="flex items-center gap-6">
              <FontAwesomeIcon size={'2x'} icon={faBars} onClick={()=>openBar(setEscape)} />
              <h1 className="head">
                Bloby
              </h1>
            </div>
          </div>
        </nav>
        <div className="flex bg-xindigo text-white">
          {/** side-bar */}
          <SideBar show={showBar} setShow={setShowBar}/>
          {/** col */}
          <div className="flex flex-col w-full gap-8">
            <Header />
            <About />
            <Services />
            <Experience />
            <RecentWork />
            <Contacts />
          </div>
        </div>
      </div>
    </ModalContext.Provider>
  );
}

export default App;
