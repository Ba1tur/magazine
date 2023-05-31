import f from './Favorites.module.scss'
import Links from "@/components/Links/Links";
import ProductCard from "@/components/ProductCard/ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getFavorites} from "@/redux/reducers/favorites";
import {Spinner} from "@chakra-ui/react";


const Favorites = () => {
    const [state, setState] = useState([])
    let item = {}

    if (typeof window !== 'undefined') {
        item = JSON.parse(localStorage.getItem('user'))
    }

    const dispatch = useDispatch()

    const {favorites, loading, error } = useSelector(state => state.favorites)

    useEffect(() => {
        dispatch(getFavorites(item?.id))
    },[state])


    return(
        <section className={f.fav}>
            <div className="container">
                <Links/>
                <p className={f.fav__subtitle}>
                    Избранное
                </p>
                <div className={f.fav__content}>
                    {
                        loading?
                            <Spinner
                                mt={5}
                                thickness='7px'
                                speed='0.5s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            /> : ''
                    }
                    {
                        error ? <span className="span">Отсутвует подключения к интернету...</span> : ''
                    }
                    {
                        favorites.length !== 0 ?
                            favorites.map(item => (
                                <ProductCard key={item.id} setState={setState} product={item}/>
                            )) : <h1 className="not">Нет товаров в избранное</h1>
                    }
                </div>
            </div>
        </section>
    )
}

export default Favorites