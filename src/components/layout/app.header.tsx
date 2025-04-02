
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { useCurrentApp } from '../context/app.context';
import { useTranslation } from 'react-i18next';
import { NavDropdown } from 'react-bootstrap';
import viFlag from '../../assets/svg/language/vi.svg';
import enFlag from '../../assets/svg/language/en.svg';

type ThemeContextType = "light" | "dark";


function AppHeader() {
    const { theme, setTheme } = useCurrentApp();
    const { t, i18n } = useTranslation();

    const handleMode = (mode: ThemeContextType) => {
        localStorage.setItem("theme", mode);
        document.documentElement.setAttribute('data-bs-theme', mode);
        setTheme(mode);
    }

    const renderFlag = (language: string) => {
        return (
            <img
                style={{ height: 20, width: 20 }}
                src={language === "en" ? enFlag : viFlag} alt={language}
            />
        )
    }

    return (
        <Navbar
            data-bs-theme={theme}
            expand="lg"
            className="bg-body-tertiary"
            style={{ zIndex: 1, fontWeight: "600" }}
        >
            <Container>
                <Link className="navbar-brand" to="/">
                    <span className='brand-green'>
                        Portfolio
                    </span>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">{t("appHeader.home")}</NavLink>
                        <NavLink className="nav-link" to="/project"> {t("appHeader.project")}</NavLink>
                        <NavLink className="nav-link" to="/about">{t("appHeader.about")}</NavLink>
                    </Nav>
                    <Nav className="ms-auto">
                        <div className='nav-link' style={{ cursor: "pointer" }}>
                            {theme === "light" ?
                                <MdOutlineLightMode
                                    onClick={() => handleMode("dark")}
                                    style={{ fontSize: 20 }}
                                />
                                :
                                <MdNightlight
                                    onClick={() => handleMode("light")}
                                    style={{ fontSize: 20 }}
                                />
                            }
                        </div>

                        <NavDropdown
                            title={renderFlag(i18n.resolvedLanguage!)}
                        >
                            <div
                                onClick={() => i18n.changeLanguage("en")}
                                className='dropdown-item d-flex gap-2 align-items-center' style={{ cursor: "pointer" }}>
                                <img
                                    style={{ height: 20, width: 20 }}
                                    src={enFlag} alt='english'
                                />
                                <span>English</span>

                            </div>
                            <div
                                onClick={() => i18n.changeLanguage("vi")}
                                className='dropdown-item d-flex gap-2 align-items-center' style={{ cursor: "pointer" }}>
                                <img
                                    style={{ height: 20, width: 20 }}
                                    src={viFlag} alt='vietnamese'
                                />
                                <span>Tiếng Việt</span>
                            </div>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppHeader;
