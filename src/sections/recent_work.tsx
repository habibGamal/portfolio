import { faCss3, faHtml5, faJs, faLaravel, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../App';
import Modal from '../components/modal'
import SectionTitle from '../components/section_title'
import { Source, Tech } from '../typing';
const TECHS = {
  html: { name: 'HTML', icon: faHtml5, color: 'bg-orange-600' },
  css: { name: 'Css', icon: faCss3, color: 'bg-blue-500' },
  js: { name: 'JS', icon: faJs, color: 'bg-yellow-600' },
  ajax: { name: 'Ajax', icon: faCode, color: 'bg-purple-600' },
  php: { name: 'PHP', icon: faPhp, color: 'bg-blue-600' },
  mysql: { name: 'MySql', icon: faDatabase, color: 'bg-red-600' },
  laravel: { name: 'Laravel', icon: faLaravel, color: 'bg-red-500' },
  nextJs: { name: 'NextJs', icon: faCode, color: 'bg-black' },
  typescript: { name: 'Typescript', icon: faCode, color: 'bg-blue-700' },
  redux: { name: 'Redux', icon: faCode, color: 'bg-purple-700' },
}
export default function RecentWork() {
  const context = useContext(ModalContext);
  function show() {
    context?.setEscape(true);
  }
  return (
    <section className="container" id="work">
      <SectionTitle title='Recent works' />
      <div className="content my-8 items-start justify-items-center gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Project
          onClick={show}
          src="./projects/mall.png"
          name='Mall'
          desc='Dynamic website for E-commerce purpose'
          source={{ visit: 'https://mall-chi.vercel.app/', code: 'https://github.com/habibGamal/Mall' }}
          techUsed={[
            TECHS.html,
            TECHS.css,
            TECHS.js,
            TECHS.ajax,
            TECHS.php,
            TECHS.mysql,
            TECHS.nextJs,
            TECHS.laravel,
            TECHS.typescript,
            TECHS.redux,
          ]}
        />
        <Project
          onClick={show}
          src="./projects/john_website.jpg"
          name='John Website'
          desc='Dynamic website for choach John to display his blogs and his pricing plans to subscripers'
          source={{ visit: '', code: 'https://github.com/habibGamal/John' }}
          techUsed={[
            TECHS.html,
            TECHS.css,
            TECHS.js,
            TECHS.ajax,
            TECHS.php,
            TECHS.mysql,
          ]}
        />
        <Project
          onClick={show}
          src="./projects/active_thum.jpg"
          name='Active'
          desc='Static website to training'
          source={{ visit: 'https://active-box-rho.vercel.app/kol;', code: 'https://github.com/habibGamal/Active_Box' }}
          techUsed={[
            TECHS.html,
            TECHS.css,
            TECHS.js,
          ]}
        />
        <Project
          onClick={show}
          src="./projects/applap.jpg"
          name='AppLap'
          desc='Static website to training'
          source={{ visit: 'https://landing-page-seven-nu.vercel.app/', code: 'https://github.com/habibGamal/Landing-Page' }}
          techUsed={[
            TECHS.html,
            TECHS.css,
            TECHS.js,
          ]}
        />
        <Project
          onClick={show}
          src="./projects/sophia.jpg"
          name='Sophia'
          desc='Static website to training'
          source={{ visit: 'https://sophia-theta.vercel.app/', code: 'https://github.com/habibGamal/Sophia' }}
          techUsed={[
            TECHS.html,
            TECHS.css,
            TECHS.js,
          ]}
        />
      </div>
    </section>
  )
}


function Project({ src, name, desc, techUsed, source, onClick }: { src: string, name: string, desc: string, techUsed: Array<Tech>, source: Source, onClick: Function }) {
  const context = useContext(ModalContext);
  useEffect(() => {
    if (!context?.escape) {
      setShow(false);
    }
  }, [context?.escape])
  const [show, setShow] = useState(false);
  function showModal() {
    onClick();
    setShow(true);
  }
  return (
    <>
      <AnimatePresence>
        {show && <Modal src={src} name={name} desc={desc} source={source} techUsed={techUsed} />}
      </AnimatePresence>
      <div onClick={showModal} className="rounded-2xl aspect-[17/10] cursor-pointer overflow-hidden">
        <img className="w-full h-full object-cover" src={src} alt="" />
      </div>
    </>
  )
}