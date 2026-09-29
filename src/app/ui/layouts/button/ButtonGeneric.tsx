import "./ButtonGeneric.css";

interface PropsButtonGenric {
    type?: "submit" | "reset" | "button" | undefined,
    text?: string,
    disabled?: boolean
}


export function ButtonGeneric({type = "button", text = "nombre boton", disabled}: PropsButtonGenric): React.JSX.Element {
    return (
        <button className="btn-generic" type={type} disabled={disabled}>{text}</button>
    );
}