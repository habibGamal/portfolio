import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function ExpBlock({ title }: { title: string }) {
  const blockAnimation = {
    initial: {
      y:100,
      opacity:0,
    },
    whileInView: {
      y:0,
      opacity:1,
    }
  }
  return (
    <motion.div initial="initial" whileInView="whileInView" variants={blockAnimation} className="block flex gap-4 mb-4">
      <div className="flex flex-col gap-2 items-center">
        <FontAwesomeIcon size={'2x'} color='#ff4c60' icon={faGraduationCap} />
        <span className="h-full w-px block bg-red-500"></span>
      </div>
      <div className="context flex flex-col gap-4 mb-8">
        <span className="text-sub">2019 - Present</span>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
      </div>
    </motion.div>
  )
}