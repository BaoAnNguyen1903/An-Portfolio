import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

interface IProps {
    github: string
    linkedin: string
    instagram: string
    facebook: string
}

const SocialMedia = (props: IProps) => {
    const {github, linkedin, facebook, instagram} = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={github} target='_blank' className="highlight" title="Github">
                <FaGithub size={30} />
            </a>
            <a href={linkedin} target='_blank' className="highlight" title="Linkedin">
                <FaLinkedin size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook">
                <FaFacebook size={30} />
            </a>
            <a href={instagram} target='_blank' className="highlight" title="Instagram">
                <FaInstagram size={30} />
            </a>
        </div>
    )
}

export default SocialMedia;