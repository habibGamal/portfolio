import { motion } from "framer-motion";
import Card from "../components/card";
import SectionTitle from "../components/section_title";

export default function Services() {
    const servicesAnimation = {
        initial: {},
        whileInView: {
            transition: {
                staggerChildren: 0.25,
            }
        }
    }
    return (
        <section className="container" id="serv">
            <SectionTitle title='Services' />
            <motion.div initial="initial" whileInView="whileInView" variants={servicesAnimation} className="content flex flex-col md:items-start md:flex-row gap-4 my-8">
                <Card
                    icon='web'
                    text='Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'
                    color='bg-indigo-500'
                    title='Front-end'
                />
                <Card
                    icon='server'
                    text='Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'
                    color='bg-yellow-500'
                    title='Backend'
                />
                <Card
                    icon='responsive'
                    text='Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'
                    color='bg-red-500'
                    title='Responsive'
                />
            </motion.div>
        </section>
    )
}
