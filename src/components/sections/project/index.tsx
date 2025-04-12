import { Col, Row } from "react-bootstrap"
import ProjectCard from "./project.card";
import { PROJECTS } from "../../../helpers/data";
import { useTranslation } from "react-i18next";

const Project = () => {
    const {t, i18n} = useTranslation();
    return (
        <>
            <Row>
                <Col xs={12}>
                    <h3 className="text-center">
                    {i18n.resolvedLanguage === "en" ? <>
                        My Recent <span className='text-pink-100'> Works </span>
                        </>
                            :
                            <>
                                <span className='text-pink-100'>Dự Án</span> Gần Đây Của Tôi
                            </>
                        }
                    </h3>
                    <h6 className="text-center mb-md-5 mb-2">{t("project.heading")}.</h6>
                </Col>
            </Row>
            <Row
                    
            >
                {PROJECTS?.map(item => {
                    return (
                        <Col md={4} className="project-card" key={item.id}>
                            <ProjectCard
                                imgPath={item.imgPath}
                                title={item.title}
                                description={item.description}
                                githubLink={item.githubLink}
                                demoLink={item.demoLink}
                            />
                        </Col>
                    )
                })}

            </Row>
            <div className="mb-7"></div>
        </>
    )
}

export default Project;