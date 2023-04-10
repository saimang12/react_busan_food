import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const UL = styled.ul`
    padding: 0 0 100px 0;
`
const Inner = styled.div`
    width: 1600px;
    margin: 0 auto;
`

const H2 = styled.h2`
    font-size: 30px;
    font-weight:700;
    text-align: center;
    margin: 0 0 50px 0;
`

const INFO = styled.div`
    display: flex;
    
`
const Figure = styled.figure`
    flex: 1;
`
const Img = styled.img`
    object-fit:cover;
`
const DESC = styled.div`
    flex: 1;
    padding: 20px 30px;
    background: #f4f4f4;

`
const H3 = styled.h3`
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 20px 0;
`
const Address = styled.address`
    margin: 0 0 10px 0;
`
const TEL = styled.p`
    margin: 0 0 10px 0;
`

const MainMenu = styled.p`
    margin: 0 0 10px 0;
`
const StoreInfo = styled.p`
    margin: 0 0 10px 0;
`
const Time = styled.p`
    letter-spacing: 1px;
    
`


const Itm = ({ busanFood }) => {
    const { itm } = useParams();
    const store = busanFood.find(it => it.TITLE === itm);


    const { kakao } = window;

    const KakaoMapScript = () => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(store.LAT, store.LNG),
            level: 1
        };

        var map = new kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(store.LAT, store.LNG);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    }

    useEffect(() => {
        store && KakaoMapScript();
    }, [store])

    var reg = /[\]?.,;|*`!^\-_+<>@$%&\\]/gi;

    return (
        <UL>
            {
                store && <li>

                    <div id="map" style={{ height: "500px", margin: "0 auto 100px auto" }}></div>
                    <Inner>
                        <H2>상세정보</H2>
                        <INFO>
                            <Figure>
                                <Img src={store.MAIN_IMG_NORMAL} alt={store.TITLE} />
                            </Figure>
                            <DESC>
                                <H3>{store.MAIN_TITLE}</H3>
                                <Address>주소 : {store.ADDR1}</Address>
                                <TEL>연락처 : {store.CNTCT_TEL}</TEL>
                                <MainMenu>메인메뉴 : {store.RPRSNTV_MENU}</MainMenu>
                                <StoreInfo>소개 : {store.ITEMCNTNTS}</StoreInfo>
                                <Time>{store.USAGE_DAY_WEEK_AND_TIME.replace(reg, '')}</Time>
                            </DESC>
                        </INFO>
                    </Inner>

                </li>
            }
        </UL>
    )
}

export default Itm;