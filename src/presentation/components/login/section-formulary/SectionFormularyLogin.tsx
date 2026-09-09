import { SvgUserEmployee } from "../../utils/svg-components/SvgUserEmployee";
import "./SectionFormularyLogin.css"

export function SectionFormularyLogin(): React.JSX.Element {
    return (
        <>
        <section className="info-formulary-login">
            <header className="info-formulary-login__header">
                <div className="info-formulary-login__logo-wrapper">
                    <SvgUserEmployee color="var(--green-lime)" size="100%"/>
                </div>
                <span>Bienvenido</span>
                <span>Ingresa tus credenciales para acceder.</span>
            </header>
            <main></main>
            <footer></footer>
        </section>
        </>
    );
}