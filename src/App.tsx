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
export const ModalContext = React.createContext<null | { escape: boolean, setEscape: Function }>(null);
function App() {
  enum Links {
    home,
    about,
    serv,
    exp,
    work,
    contact
  };
  const [activeLink, setLink] = useState(Links.home);
  const getLinkState = (e: Links) => e === activeLink ? 'active' : '';
  const [escape, setEscape] = useState(false);
  
  return (
    <ModalContext.Provider value={{ escape, setEscape }}>
      <div className="App relative">
        <EscapeModal />
        <nav className="py-2 bg-xindigo text-white md:hidden">
          <div className="container">
            <div className="flex items-center gap-6">
              <FontAwesomeIcon size={'2x'} icon={faBars} />
              <h1 className="head">
                Bloby
              </h1>
            </div>
          </div>
        </nav>
        <div className="flex bg-xindigo text-white">
          {/** side-bar */}
          <div className="side-bar ">
            <h1 className="head">H.</h1>
            <div className="icons-col">
              <a href="#header" onClick={() => setLink(Links.home)} className={getLinkState(Links.home)}>
                <FontAwesomeIcon size={'lg'} icon={faHomeAlt} />
              </a>
              <a href="#about" onClick={() => setLink(Links.about)} className={getLinkState(Links.about)}>
                <FontAwesomeIcon size={'lg'} icon={faUser} />
              </a>
              <a href="#serv" onClick={() => setLink(Links.serv)} className={getLinkState(Links.serv)}>
                <FontAwesomeIcon size={'lg'} icon={faBriefcase} />
              </a>
              <a href="#exp" onClick={() => setLink(Links.exp)} className={getLinkState(Links.exp)}>
                <FontAwesomeIcon size={'lg'} icon={faGraduationCap} />
              </a>
              <a href="#work" onClick={() => setLink(Links.work)} className={getLinkState(Links.work)}>
                <FontAwesomeIcon size={'lg'} icon={faLayerGroup} />
              </a>
              <a href="#contact" onClick={() => setLink(Links.contact)} className={getLinkState(Links.contact)}>
                <FontAwesomeIcon size={'lg'} icon={faComment} />
              </a>
            </div>
          </div>
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
