import { Col, Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import { useTranslation } from "react-i18next";

const CodingStreak = () => {
    const {i18n} = useTranslation();
    return (
        <Row className="mb-5">
            <Col xs={12} className="my-3 my-md-5">
                <div className="text-center">
                    <h3>
                        {i18n.resolvedLanguage === "en" ? <>
                            Days I <span className='text-pink-100'>Code </span>
                        </>
                            :
                            <>
                               Những Ngày Tôi <span className='text-pink-100'>Lập Trình</span>
                            </>
                        }
                    </h3>
                </div>
            </Col>
            
            <Col className="d-flex justify-content-center">
                <GitHubCalendar 
                    username="BaoAnNguyen1903" 
                    blockSize={16}
                    blockMargin={4} 
                    colorScheme="dark" 
                    fontSize={16} 
                />
            </Col>
        </Row>
    );
};

export default CodingStreak;
