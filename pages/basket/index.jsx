import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from '@/redux/reducers/basket';
import { Spinner } from "@chakra-ui/react";

import s from '../basket/Cart.module.scss';
import CartCard from '@/components/CartCard/CartCard';
import ProductCard from '@/components/ProductCard/ProductCard';

const Index = () => {
  const [state, setState] = useState([]);

  let item = {};

  if (typeof window !== 'undefined') {
    item = JSON.parse(localStorage.getItem('user'));
  }

  const dispatch = useDispatch();

  const { basket, error, loading } = useSelector(state => state.basket);
  const { products } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getBasket(item.id));
  }, [state]);

  useEffect(() => {
    calculateTotalPrice();
  }, [basket]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    for (const item of basket) {
      totalPrice += item.price * item.count;
    }

    setTotalPrice(totalPrice);
  };



  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  

  useEffect(() => {
    let count = 0;

    for (const item of basket) {
      count += item.count;
    }

    setTotalCount(count);
  }, [basket]);

  return (
    <section className='container'>
      <div className={s.card_section}>
        <h6>Главная / Корзина</h6>
        <div className={s.card_section__header}>
          <h2>Ваша корзина</h2>
          <h2>{totalCount} предмета</h2>
        </div>
        <div className={s.card_section__block}>
          {loading ?
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
            error ? <span className="span">Отсутствует подключение к интернету...</span> : ''
          }
          {basket.length !== 0 ?
            basket?.map(item => (
              <CartCard setState={setState}  item={item} key={item.id} />
            )) :
            <h6>Нет товаров в корзине</h6>
          }
        </div>
        <div className={s.card_section__order}>
          <p>Итоговая стоимость: <span>{totalPrice}₽</span></p>
          <button className={s.card_section__order__btn}>Оформить заказ</button>
        </div>
        <div className={s.card_section__products}>
          <h1>Вам может понравиться</h1>
          <div className={s.card_section__products__block}>
            {products.map((product) => {
              return (
                <ProductCard product={product} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
