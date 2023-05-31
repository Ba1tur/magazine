import Info from "@/components/Card/Info/Info";
import Links from "@/components/Links/Links";
import NavBar from "@/components/NavBar/NavBar";
import Detail from "@/components/Card/Detail/Detail";
import Bestsellers from "@/components/Card/Bestsellers/Bestsellers";

const Card = () => {
    return(
        <>
            <div className="container">
                <NavBar/>
                <Links/>
                <Info/>
                <Detail/>
                <Bestsellers/>
            </div>
        </>
    )
}

export default Card