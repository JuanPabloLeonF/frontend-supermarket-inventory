import "./ButtonGeneric.css";

interface PropsButtonGenric {
    type?: "submit" | "reset" | "button" | undefined,
    text?: string
}


export function ButtonGeneric({type = "button", text = "nombre boton"}: PropsButtonGenric): React.JSX.Element {
    return (
        <button className="btn-generic" type={type}>{text}</button>
    );
}