import "./Bookcase.css";
import { Link } from "react-router-dom";

export function Bookcase() {
    return <div>
        <h1>Close-up of the bookcase</h1>
        <p className="flavourtext">
        -------------------------------------- </p>
        <p className="flavourtext">|    |   |   |   |   |   |   |   |   |    |   |   |   |   |   |   |   |   |</p>
        <p className="flavourtext">
        -------------------------------------- </p>
        <p className="flavourtext">|    |   |   |   |   |   |   |   |   |    |   |   |   |   |   |   |   |   |</p>
        <p className="flavourtext">
        -------------------------------------- </p>
        <p className="flavourtext">|    |   |   |   |   |   |   |   |   |    |   |   |   |   |   |   |   |   |</p>
        <p className="flavourtext">
        -------------------------------------- </p>
        <p className="flavourtext">|    |   |   |   |   |   |   |   |   |    |   |   |   |   |   |   |   |   |</p>
        <p className="flavourtext">
        -------------------------------------- </p>
        <p className="flavourtext">|    |   |   |   |   |   |   |   |   |    |   |   |   |   |   |   |   |   |</p>
        <p className="flavourtext">
        -------------------------------------- </p>
        <p>     </p>
        <Link to="/play" className="flavourtext"> Return </Link>
    </div>
}