import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ gugun, search, setSearch, busanFood, setBusanFood }) => {
    return (
        <>
            <Header gugun={gugun} search={search} setSearch={setSearch} busanFood={busanFood} setBusanFood={setBusanFood} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;