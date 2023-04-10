import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { useState } from "react";


const Header = ({ gugun, setSearch, busanFood }) => {
    const navigate = useNavigate();
    const [input, setInput] = useState('')
    const r = busanFood.filter(it => it.MAIN_TITLE.includes(input));


    const searchHandler = (e) => {
        e.preventDefault();
        navigate(`/search/${input}`)
        setSearch(r)
    }

    return (
        <header>
            <div className="inner">
                <div className="top">
                    <h1 style={{ textAlign: 'center' }}>
                        <Link to='/'>부산맛집지도</Link>
                    </h1>
                    <form action="" onSubmit={searchHandler}>
                        <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
                        <BsSearch className="search" onClick={searchHandler} />
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