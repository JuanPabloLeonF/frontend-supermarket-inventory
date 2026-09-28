import "./Login.css";

import imgFooterFormulary from "../../assets/imgs/img-footer-formulary.jpg";

import { SvgAnalitycs } from "../../assets/svgs/SvgAnalitycs";
import { SvgIconPackage } from "../../assets/svgs/SvgIconPackage";
import { SvgLogoApp } from "../../assets/svgs/SvgLogoApp";
import { FormularyLogin } from "./formulary-login/FormularyLogin";

export function Login(): React.JSX.Element {
  return (
    <section className="container-login">
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

      <img className="wrapper-img" src={imgFooterFormulary} alt="imagen footer" />

      <div className="container-login_title">
        <div>
          <SvgLogoApp />
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
