import { useContext } from "react";
import { ModalContext } from "../App";

export default function EscapeModal() {
    const context = useContext(ModalContext);
    return (
        <div onClick={()=>context?.setEscape(false)} className={`absolute top-0 z-10 left-0 w-full h-full bg-black/30 ${context?.escape ? '' : 'hidden'}`}></div>
    )
}
