import { motion } from "framer-motion"

export default function Card({ icon, text, color, title }: { icon: string, text: string, color: string, title: string }) {
  const cardAnimation = {
    initial: {
      scale: 0,

    },
    whileInView: {
      scale: 1,
    },
  }
  return (
    <motion.div variants={cardAnimation} className={`rounded-3xl p-8 flex flex-col items-center ${color}`}>
      <img src={`./${icon}.svg`} className="mb-5 w-20" alt="" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className='text-center'>
        {text}
      </p>
    </motion.div>
  )
}