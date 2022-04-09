import { motion } from "framer-motion"
import SectionTitle from "../components/section_title"
import Skill from "../components/skill"

export default function About() {
    
  const aboutAnimation = {
    initial: { y: 100 },
    whileInView: {
      y: 0,
      transition: {
        // delayChildren: .1,
        staggerChildren: 0.5,
      }
    }
  }
  const pAnimation = {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
    }
  }
    return (
        <motion.section
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={aboutAnimation}
            className="container"
            id="about"
          >
            <SectionTitle title='About me' />
            <div className="flex flex-col items-center md:items-start md:flex-row lg:gap-20 gap-4 my-8">
              <motion.div initial={{ scale: 0.1 }} whileInView={{ scale: 1 }} className="aspect-square w-36 shrink-0  rounded-full overflow-hidden">
                <img src="./me_per.png" alt="" />
              </motion.div>
              <div className="rounded-lg bg-xindigo-2 before::triangle p-8">
                <div className="grid md:grid-cols-2 gap-4 ">
                  <div>
                    <motion.p variants={pAnimation} >
                      I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.
                    </motion.p>
                    <button className="btn-xred mt-4">Download CV</button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Skill name='HTML , CSS , Js , Typescript' value={94} color='bg-pink-500' />
                    <Skill name='Tailwind , Bootstrap , Sass' value={92} color='bg-red-500' />
                    <Skill name='React , Next.js , Redux' value={90} color='bg-orange-500' />
                    <Skill name='JSON , REST API' value={87} color='bg-green-500' />
                    <Skill name='Automation testing with Cypress.io' value={83} color='bg-purple-500' />
                    <Skill name='PHP , Laravel , MySql' value={80} color='bg-blue-500' />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
    )
}