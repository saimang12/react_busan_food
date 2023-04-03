import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = ({ gugun }) => {
    return (
        <header>
            <div className="inner">
                <h1 style={{ textAlign: 'center' }}>
                    <Link to='/'>부산맛집지도</Link>
                </h1>
                <Nav gugun={gugun} />
            </div>
        </header>
    )
}

export default Header;