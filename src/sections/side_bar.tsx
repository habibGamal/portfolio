import { useContext, useEffect, useState } from "react";
import { faBriefcase, faComment, faGraduationCap, faHomeAlt, faLayerGroup, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalContext } from "../App";

export default function SideBar({ show, setShow }: { show: boolean, setShow: Function }) {
    const ctx = useContext(ModalContext);
    useEffect(() => { 
        if(ctx?.escape === false) {
            setShow(false);
        }
    }, [ctx?.escape,setShow])
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
    return (
        <div className={`side-bar ${show ? 'active' : ''}`}>
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
    )
}
