import { useState } from "react";
import { SvgEmail } from "../../../assets/svgs/SvgEmail";
import { SvgEyeClosed } from "../../../assets/svgs/SvgEyeClosed";
import { SvgEyeOpen } from "../../../assets/svgs/SvgEyeOpen";
import { SvgLock } from "../../../assets/svgs/SvgLock";
import { ButtonGeneric } from "../../../layouts/button/ButtonGeneric";
import "./FormularyLogin.css";

export function FormularyLogin(): React.JSX.Element {
  const [isActivePassword, setActivePassword] = useState<boolean>(false);

  const toggleActivePassword = () => {
    setActivePassword(prev => !prev);
  }

  return (
    <form action="" className="container-form-login">
      <label htmlFor="email" className="container-form-login_container-label">
        <span className="container-form-login_container-label_span">Email</span>
        <div className="container-form-login_container-label_container_input">
          <div>
            <SvgEmail />
          </div>
          <input name="email" id="email" type="text" placeholder=" " />
        </div>
      </label>
      <label
        htmlFor="password"
        className="container-form-login_container-label"
      >
        <span className="container-form-login_container-label_span">
          Contraseña
        </span>
        <div className="container-form-login_container-label_container_input">
          <div>
            <SvgLock />
          </div>
          <input
            name="password"
            id="password"
            type={isActivePassword ? "text" : "password"}
            placeholder=" "
          />
          <button onClick={toggleActivePassword} type="button">
            {isActivePassword ? <SvgEyeClosed /> : <SvgEyeOpen/>}
          </button>
        </div>
      </label>
      <div className="container-form-login_button">
        <ButtonGeneric type="button" text="Iniciar sesion" />
      </div>
    </form>
  );
}
