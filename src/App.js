import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import AllLsit from "./pages/AllLsit";
import GuList from "./pages/GuList";
import Itm from "./pages/Itm";
import './styles/main.scss';
import Search from "./pages/Search";

const App = () => {
    const [busanFood, setBusanFood] = useState([]);
    const [gugun, setGugun] = useState([]);
    const [max, setMax] = useState(88);
    const [search, setSearch] = useState('')
    const key = `nmPIjJ%2Bj0FufPiP6k4BLPlq3n%2B46QZN%2B6hgSINrrxqk3nNwnoHX2ynqX6Dlgr3xFeivGPus2vgmh6Ifx1vdu1g%3D%3D`
    const getData = async () => {
        const r = await axios.get(`http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${key}&pageNo=1&numOfRows=${max}&resultType=json`);
        const d = await r.data.getFoodKr.item;
        setBusanFood(d);
        const gugun = d.map(it => it.GUGUN_NM);
        const gugunList = [...new Set(gugun)];
        setGugun(gugunList);
    }





    useEffect(() => {
        getData();
    }, [max]);



    return (
        <Routes>
            <Route path="/" element={<Layout gugun={gugun} search={search} setSearch={setSearch} busanFood={busanFood} setBusanFood={setBusanFood} />}>
                <Route index element={<AllLsit busanFood={busanFood} max={max} setMax={setMax} />}></Route>
                <Route path=":id" element={<GuList busanFood={busanFood} />} />
                <Route path="store/:itm" element={<Itm busanFood={busanFood} />} />
                <Route path="search/:s" element={<Search search={search} setSearch={setSearch} />} />
                {/* {
                    gugun.map((it, idx) => {
                        return <Route path={`${it}`} element={<div>{it}</div>} key={idx}></Route>
                    })
                } */}
            </Route>
        </Routes>
    )
}

export default App;