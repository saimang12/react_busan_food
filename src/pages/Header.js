import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { useEffect, useRef, useState } from "react";


const Header = ({ gugun, setSearch, busanFood }) => {
    const navigate = useNavigate();
    const [input, setInput] = useState('')

    const text = useRef(null)

    const r = busanFood.filter(it => it.MAIN_TITLE.includes(input)
        || it.GUGUN_NM.includes(input)
        || it.ITEMCNTNTS.includes(input)
        || it.TITLE.includes(input)
        || it.RPRSNTV_MENU.includes(input)

    );

    const searchHandler = (e) => {
        e.preventDefault();
        if (input.length < 2) {
            alert('검색어는 2글자 이상 입력해주세요');
            setInput('');
            return text.current.focus();
        } else {
            navigate(`/search/${input}`);
            setSearch(r)
        }

    }
    return (
        <header>
            <div className="inner">
                <div className="top">
                    <h1 style={{ textAlign: 'center' }}>
                        <Link to='/'>부산맛집지도</Link>
                    </h1>
                    <form action="" onSubmit={searchHandler}>
                        <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} ref={text} />
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