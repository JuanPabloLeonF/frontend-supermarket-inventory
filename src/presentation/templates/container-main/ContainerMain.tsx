import { Login } from "../../components/login/Login";
import "./ContainerMain.css";

export function ContainerMain(): React.JSX.Element {
    return (
        <main className="container-main">
            <Login/>
        </main>
    );
}