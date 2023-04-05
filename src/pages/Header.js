import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import Nav from "./Nav";


const Header = ({ gugun }) => {
    return (
        <header>
            <div className="inner">
                <div className="top">
                    <h1 style={{ textAlign: 'center' }}>
                        <Link to='https://saimang12.github.io/react_busan_food/'>부산맛집지도</Link>
                    </h1>
                    <form action="">
                        <input type="text" />
                        <BsSearch className="search" />
                    </form>
                    <div className="user">
                        <a href="#!">로그인</a>
                    </div>
                </div>

                <Nav gugun={gugun} />
            </div>
        </header>
    )
}

export default Header;