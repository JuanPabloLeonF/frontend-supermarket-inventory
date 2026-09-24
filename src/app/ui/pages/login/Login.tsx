import "./Login.css";

import heroImg from "../../assets/imgs/img-hero.jpg";
import { FormularyLogin } from "./formulary-login/FormularyLogin";
import { SvgCurver } from "../../assets/svgs/SvgCurver";

export function Login(): React.JSX.Element {
  return (
    <section className="container-login">
      <img
        className="container-login_hero-img"
        src={heroImg}
        alt="imagen de super mercado"
      />
      <div className="container-login_container-formulary">
        <SvgCurver width="100%" height="15%" color="var(--shadow-white)"/>
        <FormularyLogin />
        <SvgCurver width="100%" height="15%" inverted={true} color="var(--shadow-white)"/>
      </div>
    </section>
  );
}
