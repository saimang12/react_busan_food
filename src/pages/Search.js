import { Link } from "react-router-dom"

const Search = ({ search, setSearch }) => {
    return (
        <div className="SearchPage">
            <div className="inner">
                <div className="tit">
                    <h2>맛집검색</h2>
                    <span>{`맛집 검색결과 '${search.length}'건`}</span>
                </div>
                <ul>
                    {search &&
                        search.map((it, idx) => {
                            return (
                                <li key={it.UC_SEQ}>
                                    <Link to={`/store/${it.TITLE}`}>
                                        <figure>
                                            <img src={it.MAIN_IMG_NORMAL} alt={it.TITLE} />
                                        </figure>
                                    </Link>
                                    <div className="desc">
                                        <h3>[{it.GUGUN_NM}] {it.TITLE}</h3>
                                        <p>연락처 : {it.CNTCT_TEL}</p>
                                        <p>대표메뉴 : {it.RPRSNTV_MENU}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}

export default Search