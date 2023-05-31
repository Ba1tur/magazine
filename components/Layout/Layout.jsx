import { useEffect } from "react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { useDispatch } from "react-redux";
import { getUser } from "@/redux/reducers/user";
import { getProducts } from "@/redux/reducers/products";
import { getFavorites } from "@/redux/reducers/favorites";
import { getBasket } from "@/redux/reducers/basket";


const Layout = ({ children }) => {
    let user = {}
    const dispatch = useDispatch()

    if (typeof window !== 'undefined') {
        user = JSON.parse(localStorage.getItem('user'))
    }

    useEffect(() => {
        dispatch(getUser(user?.id))
        dispatch(getFavorites(user?.id))
        dispatch(getBasket(user?.id))
        dispatch(getProducts())
    }, [])

    return (
        <>
            <Header/>
            {children}
            <Footer />
        </>
    );
};

export default Layout;