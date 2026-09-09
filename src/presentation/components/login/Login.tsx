import "./Login.css";
import { SectionFormularyLogin } from "./section-formulary/SectionFormularyLogin";
import { SectionInfo } from "./section-info/SectionInfo";

export function Login(): React.JSX.Element {
    return (
    <>
        <main className="main-login">
           <SectionInfo/>
           <SectionFormularyLogin/>
        </main>
    </>
    )
}
