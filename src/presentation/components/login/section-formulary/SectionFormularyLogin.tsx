import { useState } from "react";
import { SvgEmail } from "../../utils/svg-components/SvgEmail";
import { SvgEyeOpen } from "../../utils/svg-components/SvgEyeOpen";
import { SvgEyeClosed } from "../../utils/svg-components/SvgEyeClosed";
import { SvgPasswordLock } from "../../utils/svg-components/SvgPasswordLock";
import { SvgUserEmployee } from "../../utils/svg-components/SvgUserEmployee";
import "./SectionFormularyLogin.css";
import { useForm } from "../../../hooks/UseForm";

interface FormularyLoginData {
  email: string;
  password: string;
}

export function SectionFormularyLogin(): React.JSX.Element {


  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setShowPassword((prev) => !prev);
  };


  const { values, handleChange, submitFormulary } = useForm<FormularyLoginData>({
    email: "",
    password: "",
  });


  return (
    <section className="info-formulary-login">
      <header className="info-formulary-login__header">
        <div className="info-formulary-login__logo-wrapper">
          <SvgUserEmployee color="var(--green-lime)" size="100%" />
        </div>
        <div className="info-formulary-login__info-wrapper">
          <span>Bienvenido</span>
          <span>Ingresa tus credenciales para acceder.</span>
        </div>
        <div className="info-formulary-login__login-wrapper">
          <span>Iniciar Sesión</span>
        </div>
      </header>

      <main className="formulary-login">
        <form onSubmit={submitFormulary}>
          <label htmlFor="email">
            <div className="input-container">
              <div className="icon-wrapper-1">
                <SvgEmail color="currentColor" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder=" "
                required
              />
            </div>
            <span className="label-text">Correo electrónico</span>
          </label>

          <label htmlFor="password">
            <div className="input-container">
              <div className="icon-wrapper-1">
                <SvgPasswordLock color="currentColor" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <button
                type="button"
                className="icon-wrapper-2"
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <SvgEyeClosed color="currentColor" />
                ) : (
                  <SvgEyeOpen color="currentColor" />
                )}
              </button>
            </div>
            <span className="label-text">Contraseña</span>
          </label>

          <button type="submit">Ingresar al sistema</button>
        </form>
      </main>
      <footer></footer>
    </section>
  );
}