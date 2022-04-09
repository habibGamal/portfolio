import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import ShowSvg from "../components/svg"

export default function Header() {
    return (
        <motion.header
            // initial={{ y: 300 }}
            // whileInView={{ y: 0 }}
            // transition={{ type: "spring", duration: .5 }}
            className="relative h-screen flex flex-col gap-6 items-center justify-center"
            id="header"
        >
            <motion.div initial={{ scale: 5 }} animate={{ scale: 1 }} className="aspect-square w-32 rounded-full overflow-hidden">
                <img src="./me_per.png" alt="" />
            </motion.div>
            <div>
                <h2 className="head">Habib Gamal</h2>
                <p className="leading-4">I'm Front-end developer</p>
            </div>
            <div className="icons-row">
                <a href="#">
                    <FontAwesomeIcon size={'2x'} icon={faFacebook} />
                </a>
                <a href="#">
                    <FontAwesomeIcon size={'2x'} icon={faLinkedin} />
                </a>
            </div>
            <button className="rounded bg-xred font-bold py-2 px-4 ">Get in touch</button>
            <ShowSvg />
        </motion.header>
    )
}