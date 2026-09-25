import { SvgLogoApp } from "../../assets/svgs/SvgLogoApp";
import { FormularyLogin } from "./formulary-login/FormularyLogin";
import "./Login.css";

export function Login(): React.JSX.Element {
  return (
    <section className="container-login">
      <div className="container-login_title">
          <div>
            <SvgLogoApp/>
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
