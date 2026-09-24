import { SvgEmail } from "../../../assets/svgs/SvgEmail";
import "./FormularyLogin.css";

export function FormularyLogin(): React.JSX.Element {
  return (
    <form action="" className="container-form-login">
      <label htmlFor="email" className="container-form-login_container-label">
        <span className="container-form-login_container-label_span">Email</span>
        <div className="container-form-login_container-label_container_input">
          <div>
            <SvgEmail/>
          </div>
          <input name="email" id="email" type="text" placeholder=" " />
        </div>
      </label>
    </form>
  );
}
