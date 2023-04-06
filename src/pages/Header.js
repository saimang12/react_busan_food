import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useEffect, useState } from "react";


const Header = ({ gugun, search, setSearch, busanFood, setBusanFood }) => {
    const [input, setInput] = useState('')
    const searchHandler = (e) => {
        e.preventDefault();
        if (input.length < 2) {
            alert('두글자')
        } else {
            const itm = busanFood.filter(it => it.MAIN_TITLE.includes(input));
            setBusanFood(itm);
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
                        <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
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