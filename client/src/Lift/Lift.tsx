import "./Lift.css";
import { Link } from "react-router-dom";

export function Lift() {
    return <div>
        <h1>Lift wall</h1>
        <p className="flavourtext"></p>
        <div className="liftRoom">
                <table>           
                    <tbody>        
                    <tr>
                        <td className="liftspace"> dfs</td>
                        <td className="liftspace"> ds</td>
                        <td className="liftspace"> d</td>
                    </tr>
                    <tr>
                        <td className="liftspace"> afds</td>
                        <td className="liftspace"> ads</td>
                        <td className="liftspace">fd </td>
                    </tr>
                    <tr>
                        <td className="liftspace"> ds</td>
                        <td className="liftspace"> das</td>
                        <td className="liftspace">dfa </td>
                    </tr>
                    <tr>
                        <td className="liftspace"> dsf</td>
                        <td className="liftspace"> dsa</td>
                        <td className="liftspace"> df</td>
                    </tr>
                    </tbody>
                </table>
                <p>     </p>
            <Link to="/play" className="flavourtext"> Return </Link>
        
        </div>
    </div>
}