import b from './Bestsellers.module.scss'
import ProductCard from "@/components/ProductCard/ProductCard";
import React from "react";
import {useSelector} from "react-redux";

const Bestsellers = () => {
    const {products} = useSelector(state => state.products)

    return(
        <section className={b.best}>
            <p className={b.best__subtitle}>
                Хиты продаж
            </p>

            <div className={b.best__list}>
                {products.map((product) => {
                    return (
                        <ProductCard product={product}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Bestsellers