import { Link } from "react-router-dom";
import styled from "styled-components";

const UL = styled.ul`
display: flex;
gap: 30px;
justify-content: center;
line-height: 40px;
`

const Nav = ({ gugun }) => {
    return (
        <nav>
            <ul>
                {
                    gugun.map((it, idx) => <li key={idx}>
                        <Link to={`/${it}`}>{it}</Link>
                    </li>)
                }
            </ul>
        </nav>
    )
}

export default Nav;