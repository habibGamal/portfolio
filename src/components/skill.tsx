import { motion } from "framer-motion"

export default function Skill({ name, value, color }: { name: string, value: number, color: string }) {
    const valueAnimation = {
        initial: { width: 0 },
        whileInView: { width: value + '%' }
    }
    return (
        <div className="skill flex flex-col">
            <div className="flex justify-between">
                <h4 className="font-bold">{name}</h4>
                <span>{value}%</span>
            </div>
            <div className="rounded-full bg-white w-full h-2 overflow-hidden">
                <motion.span
                    variants={valueAnimation}
                    className={`${color} block h-full`}
                    viewport={{once:false}}
                ></motion.span>
            </div>
        </div>
    )
}