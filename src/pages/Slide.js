import { Link } from "react-router-dom";
import MainSlide from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsChevronLeft, BsChevronRight, BsStar, BsStarFill } from "react-icons/bs";
import { useRef } from "react";

const Slide = ({ busanFood }) => {

    const s = useRef(null)

    const MainSlideOption = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        dots: true,
    }
    return (
        <div className="MainVisual">

            <div className="inner">
                <div className="tit">
                    <h2>Busan Food</h2>
                </div>
                <MainSlide {...MainSlideOption} ref={s} className="main_slide">
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
                                            <BsStar className="star" />
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
                        }).slice(0, 48)

                    }
                </MainSlide>
                <div className="arrows">
                    <BsChevronLeft onClick={() => { s.current.slickPrev() }} className="left" />
                    <BsChevronRight onClick={() => { s.current.slickNext() }} className="right" />
                </div>
            </div>
        </div>
    )
}

export default Slide