import Typewriter from "typewriter-effect";
import SocialMedia from "../social.media";
import { useTranslation } from "react-i18next";
import "./hero.scss";
import ResizeButton from "components/sections/resize.button";
import { APP_DATA } from "helpers/data";
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";

interface IProps {
  scrollToExperienceSection: () => void;
}

const HeroLeft = (props: IProps) => {
  const { t } = useTranslation();

  const openNewtab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener, noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleDownload = () => {
    openNewtab(
      "https://drive.google.com/drive/u/0/folders/1sNYfKEsZCpVyNC8NQ1Juzt8EUSS7B2-F"
    );
  };
  return (
    <div className="hero-left">
      <h3>
        Hi There!{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h3>
      <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
        I'M &nbsp;
        <strong className="brand-red">{t("appHeader.brand")}</strong>
      </h3>
      <Typewriter
        options={{
          strings: ["Software Developer", "Fullstack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          wrapperClassName: "brand-green"
        }}
      />
      <div className="mt-md-6 mt-3 mb-md-5 mb-2">
        <SocialMedia
          github={APP_DATA.GITHUB_URL}
          linkedin={APP_DATA.LINKEDIN_URL}
          facebook={APP_DATA.FACEBOOK_URL}
          instagram={APP_DATA.INSTAGRAM_URL}
        />
      </div>
      <div className="d-md-flex d-none gap-4">
        <ResizeButton
          onClick={props.scrollToExperienceSection}
          btnText={t("heroSection.exp")}
          btnIcons={<AiFillFire style={{ color: "orange" }} />}
          btnStyle={{
            background: "unset",
            border: "1px solid var(--border-hero-right)",
            color: "var(--text-white-1)"
          }}
        />
        <ResizeButton
          btnText={t("heroSection.cv")}
          btnIcons={<MdFileDownload />}
          onClick={handleDownload}
        />
      </div>
    </div>
  );
};

export default HeroLeft;
