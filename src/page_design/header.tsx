import {Link} from "react-router-dom"

export default function Header(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>                    
                </li>
                <li>
                    <Link to={"/ventas"}>Ventas</Link>
                </li>
                <li>
                    <Link to={"/Compras"}>Compras</Link>
                </li>
                <li>
                    <Link to={"/insumos"}>Insumos</Link>
                </li>
            </ul>
        </nav>
    )
}