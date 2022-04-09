import { faFacebook, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionTitle from "../components/section_title";

export default function Contacts() {
    return (
        <section className="container" id="contact">
            <SectionTitle title='Get in touch' />
            <div className="flex flex-col items-center gap-4 my-8">
                <div className="aspect-square w-36 shrink-0  rounded-full overflow-hidden">
                    <img src="./me_per.png" alt="" />
                </div>
                <div className="rounded-lg bg-xindigo-2 before::triangle p-8">
                    <div className="grid md:grid-cols-2 gap-8 ">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <FontAwesomeIcon size='2x' className="text-yellow-500" icon={faEnvelope} />
                                <span className="font-bold text-lg">habibgamal04@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <FontAwesomeIcon size='2x' className="text-red-500" icon={faPhone} />
                                <span className="font-bold text-lg">+20 1021153539</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <FontAwesomeIcon size='2x' className="text-blue-600" icon={faLinkedin} />
                                <a href="https://www.linkedin.com/in/habib-gamal/" className="font-bold text-lg">LinkedIn account</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <FontAwesomeIcon size='2x' className="text-green-500" icon={faWhatsapp} />
                                <span className="font-bold text-lg">+20 1021153539</span>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <FontAwesomeIcon size='2x' className="text-blue-500" icon={faFacebook} />
                                <a href="https://web.facebook.com/habib.gamal04" className="font-bold text-lg">Facebook account</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <a href="https://web.facebook.com/habib.gamal04" className="font-bold text-lg">
                                    <img className="w-32" src="./freelancer-logo.svg" alt="" />
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <a href="https://www.upwork.com/freelancers/~01da22401bcef62489" className="font-bold text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 28" role="img" aria-hidden="true" height="20"><path fill="#fff" d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"></path> <path fill="#fff" d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"></path> <polygon fill="#fff" points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"></polygon> <path fill="#fff" d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"></path> <path fill="#fff" d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
