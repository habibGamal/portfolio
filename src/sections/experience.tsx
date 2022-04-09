import { motion } from "framer-motion"
import ExpBlock from "../components/exp_block"
import SectionTitle from "../components/section_title"

export default function Experience() {
    return (
        <motion.section id="exp" className="container">
            <SectionTitle title='Experience' />
            <div className="content flex flex-col lg:items-start lg:flex-row gap-4 my-8">
                <div className="rounded-2xl bg-xindigo-2 p-8">
                    <ExpBlock title="Academic Degree" />
                    <ExpBlock title="Bachelor's Degree" />
                    <ExpBlock title="Honours Degree" />
                </div>
                <div className="rounded-2xl bg-xindigo-2 p-8">
                    <ExpBlock title="Web Designer" />
                    <ExpBlock title="Front-End Developer" />
                    <ExpBlock title="Back-End Developer" />
                </div>
            </div>
        </motion.section>
    )
}
