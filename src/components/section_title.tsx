import { motion } from "framer-motion"

export default function SectionTitle({ title }: { title: string }) {
    return (<motion.h2 initial={{x:-100}} whileInView={{x:0}} className="section-title text-4xl font-bold">{title}</motion.h2>)
}