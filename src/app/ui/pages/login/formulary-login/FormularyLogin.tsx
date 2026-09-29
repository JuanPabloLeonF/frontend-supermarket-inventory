import "./FormularyLogin.css";

import { SvgEmail } from "../../../assets/svgs/SvgEmail";
import { SvgEyeClosed } from "../../../assets/svgs/SvgEyeClosed";
import { SvgEyeOpen } from "../../../assets/svgs/SvgEyeOpen";
import { SvgLock } from "../../../assets/svgs/SvgLock";
import { ButtonGeneric } from "../../../layouts/button/ButtonGeneric";
import { NavLink } from "react-router";
import { PATH_ROUTES } from "../../../../share/utils/ConstantsApp";
import { useFormularyLogin } from "./UseFormularyLogin";

export function FormularyLogin(): React.JSX.Element {
  const {
    toggleActivePassword,
    handleChange,
    submitFormulary,
    isActivePassword,
    data,
    error,
    isLoading,
  } = useFormularyLogin();

  const hasError = Boolean(error);

  return (
    <form onSubmit={submitFormulary} className="container-form-login">
      {/* Banner de error global */}
      {error && (
        <div
          className="container-form-login_error-banner"
          role="alert"
          aria-live="assertive"
        >
          <span>{error}</span>
        </div>
      )}

      <label htmlFor="email" className="container-form-login_container-label">
        <span className="container-form-login_container-label_span">Email</span>
        <div className="container-form-login_container-label_container_input">
          <div>
            <SvgEmail />
          </div>
          <input
            onChange={handleChange}
            value={data.email}
            name="email"
            id="email"
            type="email"
            placeholder=" "
            required
            disabled={isLoading}
            aria-invalid={hasError}
          />
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
            onChange={handleChange}
            value={data.password}
            name="password"
            id="password"
            type={isActivePassword ? "text" : "password"}
            placeholder=" "
            required
            disabled={isLoading}
            aria-invalid={hasError}
          />
          <button
            onClick={toggleActivePassword}
            type="button"
            disabled={isLoading}
            aria-label={
              isActivePassword ? "Ocultar contraseña" : "Mostrar contraseña"
            }
          >
            {isActivePassword ? <SvgEyeClosed /> : <SvgEyeOpen />}
          </button>
        </div>
      </label>

      <div className="container-form-login_p-link">
        <NavLink to={PATH_ROUTES.LOGIN}>¿Olvidaste tu contraseña?</NavLink>
      </div>

      <div className="container-form-login_button">
        <ButtonGeneric
          type="submit"
          text={isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
          disabled={isLoading}
        />
      </div>
    </form>
  );
}
