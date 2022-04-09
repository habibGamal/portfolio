import { faCss3, faHtml5, faJs, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Source, Tech } from '../typing';

export default function Modal({ src, name, desc, source, techUsed }: { src: string, name: string, desc: string, source:Source, techUsed: Array<Tech> }) {
    const dropIn = {
        hidden: {
            y: '-100%',
            x: '-50%',
            opacity: 0,
        },
        visible: {
            y: '-50%',
            x: '-50%',
            opacity: 1,
        },
        exit: {
            y: '100vh',
            x: '-50%',
            opacity: 0,
            transition: {
                duration: .3
            }
        },
    }
    return (
        <motion.div variants={dropIn} initial="hidden" animate="visible" exit="exit" className={`fixed z-20 rounded-2xl bg-white top-1/2 overflow-y-auto left-1/2 translate-x-[-50%] translate-y-[-50%] max-w-[648px] max-h-[90%] w-full p-2`}>
            <div className="bg-xindigo p-4 rounded-2xl">
                <img className="rounded-2xl" src={src} alt="" />
                <div className="m-4 flex flex-col gap-2">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <p className="text-lg">{desc}</p>
                    <div>
                        <h3 className="text-2xl mb-2 font-bold">Technologies used in thes website</h3>
                        <div className="flex flex-wrap gap-2 items-start">
                            {
                                techUsed.map((tech,i) => <span key={i} className={`rounded-xl ${tech.color} px-3 py-1`}><FontAwesomeIcon icon={tech.icon} /> {tech.name}</span>)
                            }
                        </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <a href={source.code} target="_blank" rel="noreferrer" className="btn-xred">Source Code</a>
                        <a href={source.visit} target="_blank" rel="noreferrer" className="btn-xred">Visit The site</a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
