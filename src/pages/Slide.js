import { Link } from "react-router-dom";
import MainSlide from "react-slick";
import "slick-carousel/slick/slick.css";

const Slide = ({ busanFood }) => {
    const MainSlideOption = {
        arrows: false,
        slidesToShow: 3,
        rows: 2,
    }
    return (
        <div className="MainVisual">
            <div className="inner">
                <MainSlide {...MainSlideOption}>
                    {
                        busanFood &&
                        busanFood.map((it, idx) => {
                            return (

                                <div key={it.UC_SEQ} className="itm">
                                    <div className="slide">
                                        <Link to={`/store/${it.TITLE}`}>
                                            <figure>
                                                <img src={it.MAIN_IMG_NORMAL} alt={it.TITLE} />
                                            </figure>
                                        </Link>
                                        <div className="desc">
                                            <h3>[{it.GUGUN_NM}] {it.TITLE}</h3>
                                            <p>연락처 : {it.CNTCT_TEL}</p>
                                            <p>대표메뉴 : {it.RPRSNTV_MENU}</p>
                                            <span>주소 : {it.ADDR1}</span>
                                        </div>
                                    </div>
                                </div>

                            )
                        })

                    }
                </MainSlide>
            </div>
        </div>
    )
}

export default Slide