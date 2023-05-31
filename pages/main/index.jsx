import { mainSliders } from '@/contants/MainSliders';
import s from './Main.module.scss'
import {useSelector} from "react-redux";

import MainSlider from '@/components/MainSlider/MainSlider';
import ProductCard from '@/components/ProductCard/ProductCard';
import {Spinner} from "@chakra-ui/react";

const Index = () => {
	const {products, loading, error} = useSelector(state => state.products)

	return (
		<section className='container'>
			<div className={s.main_section__block}>
				<div className={s.main_section__block__slide_block}>
					<MainSlider mainSliders={mainSliders} />
				</div>
				<div className={s.main_section__block__products}>
					<h2>Хиты продаж</h2>
					<div className={s.main_section__block__products__block}>
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
						{products.map((product) => {
							return (
								<ProductCard product={product}/>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Index;