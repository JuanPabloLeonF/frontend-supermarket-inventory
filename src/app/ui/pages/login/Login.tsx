import "./Login.css";

import imgFooterFormulary from "../../assets/imgs/img-footer-formulary.png";
import imgLogo from "../../assets/imgs/logo.png";
import imgBgMobile from "../../assets/imgs/bg-img-login-mobile.png";
import imgBgDesktop from "../../assets/imgs/bg-img-login-desktop.png";

import { SvgAnalitycs } from "../../assets/svgs/SvgAnalitycs";
import { SvgIconPackage } from "../../assets/svgs/SvgIconPackage";
import { FormularyLogin } from "./formulary-login/FormularyLogin";

export function Login(): React.JSX.Element {
  return (
    <section className="container-login">
      <picture className="login-bg">
        <source media="(min-width: 768px)" srcSet={imgBgDesktop} />
        <img src={imgBgMobile} alt="logo" fetchPriority="high" loading="lazy" />
      </picture>

      <SvgIconPackage
        boxShadow="var(--shadow-lg)"
        backgroundColor="var(--bg-surface)"
        width="40px"
        height="40px"
        padding="0.2rem"
        borderRadius="0.5rem"
        position="absolute"
        top="15%"
        left="7%"
      />
      <SvgAnalitycs
        boxShadow="var(--shadow-lg)"
        backgroundColor="var(--bg-surface)"
        width="70px"
        height="70px"
        padding="0"
        borderRadius="0.5rem"
        position="absolute"
        top="6%"
        right="5%"
      />

      <img
        className="wrapper-img"
        src={imgFooterFormulary}
        alt="imagen footer"
      />

      <div className="container-login_title">
        <div>
          <img src={imgLogo} alt="Logo de la empresa" />
        </div>
        <h1>
          <span>Supermarket</span>
          <span>Inventory</span>
        </h1>
      </div>
      <div className="container-login_container-formulary">
        <FormularyLogin />
      </div>
    </section>
  );
}
