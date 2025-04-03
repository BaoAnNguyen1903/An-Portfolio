import { Col, Row } from "react-bootstrap";
import AnimationLottie from "../../share/animation-lottie";
import codingJSON from '../../../assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "../../../assets/lottie/string/development";
import { CONTACT_LOTTIE } from "../../../assets/lottie/string/contact";
import GlowCard from "../../share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "../divider";
import { APP_DATA } from "../../../helpers/data";
import SocialMedia from "../social.media";
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="text-center mb-md-5 mb-2">{t("about.title1")}<span className="brand-red">{t("about.title2")}</span> </h3>
                    <div>
                        <div>
                            <p>{t("about.heading1")}</p>

                            <p>{t("about.heading2")}</p>

                            <p> {t("about.heading3")}</p>

                            <p>{t("about.heading4")}</p>
                        </div>
                    </div>
                    <div>
                        <p>{t("about.heading5")}</p>
                        <ul>
                            <li>{t("about.heading6")}</li>
                            <li>{t("about.heading7")}</li>
                            <li>{t("about.heading8")}</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-center brand-red">Keep shipping, keep learning, keep growing ~.~</p>
                        <p className="text-center brand-red">~~~~~~~~~~^.^~~~~~~~~~~</p>
                    </div>
                </Col >
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON} />
                </Col>  
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div><h4 className="text-center brand-red">{t("about.edu1")}</h4></div>
                        <div >
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>2022-2026</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">{t("about.edu2")}</p>
                                                <p className="company">{t("about.edu3")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className=" mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">{t("about.find")}</h3>
                    <SocialMedia
                        github={APP_DATA.GITHUB_URL}
                        facebook={APP_DATA.FACEBOOK_URL}
                        linkedin={APP_DATA.LINKEDIN_URL}
                        instagram={APP_DATA.INSTAGRAM_URL}
                    />
                </Col >
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">{t("about.contact")}</h4>
                </Col>
            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default About;