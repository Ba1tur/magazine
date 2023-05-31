import s from './ProductCard.module.scss'
import Image from 'next/image';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import {useDisclosure, useToast} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {useEffect, useRef, useState} from "react";
import NoAcc from "@/components/NoAcc/NoAcc";

const ProductCard = ({ product, setState }) => {

	const [check, setCheck] = useState(false)
	const router = useRouter()
	const toast = useToast()

	const { favorites } = useSelector(state => state.favorites)

	const { user } = useSelector(state => state.user)


	setTimeout(() => {
		favorites.map(item => {
			if (item.id === product.id) {
				setCheck(true)
			}
		})
	},200)

	// useEffect(() => {
	// 	favorites.map(item => {
	// 		if (item.id === product.id) {
	// 			setCheck(true)
	// 		}
	// 	})
	// }, [])

	const checkItem = () => {
		if (check) {
			setCheck(false)
			axios.delete(`http://localhost:4080/favorites/${product.id}`)
				.then((res) => {
					setState([])
					toast({
						title: 'Продукт успешно удален',
						status: 'error',
						duration: 5000,
						isClosable: true,
						position: 'top-left',
					})
				}).catch((err) => {
					toast({
						title: 'Продукт удален',
						status: 'error',
						duration: 5000,
						isClosable: true,
						position: 'top-left',
					})

				})
		} else {

			setCheck((prev) => !prev)

			const item = {
				userId: user?.id,
				...product
			}

			axios.post(`http://localhost:4080/favorites`, item)
				.then((res) => {
					toast({
						title: 'Продукт добавлен в избранное',
						status: 'success',
						duration: 5000,
						isClosable: true,
						position: 'top-left',
					})
				}).catch((err) => {
					toast({
						title: "Продукт есть в корзине",
						status: 'error',
						duration: 5000,
						isClosable: true,
						position: 'top-left',
					})
				})
		}
	}

	const addCard =  async () => {
		const mob = {
			userId: user?.id,
			...product
		}
		axios.post('http://localhost:4080/basket' , mob)
		.then((res) => {
			toast({
				title: 'Продукт добавлен',
				status: 'success',
				duration: 5000,
				isClosable: true,
				position: 'top-left',
			})
		}).catch((err) => {
			toast({
				title: "Товар уже в корзине",
				status: 'error',
				duration: 5000,
				isClosable: true,
				position: 'top-left',
			})
		})
	}

	const { isOpen, onOpen, onClose } = useDisclosure()
	const cancelRef = useRef()

	let func = {
		isOpen,
		onOpen,
		onClose,
		cancelRef
	}

	return (
		<>
			<div className={s.product_card} key={product.id} >
				<div className={s.product_card__heart} onClick={user? () => checkItem() : onOpen}>
					<NoAcc func={func}/>
					{
						check ? <AiFillHeart fill="red" size={25} /> : <AiOutlineHeart fill="red" size={25} />
					}
				</div>
				<div className={s.product_card__img}>
					<Image onClick={() => router.push(`/card/${product.id}`)} src={product.img} width={200} height={150} alt={product.imgAlt} />
				</div>
				<div className={s.product_card_description}>
					<h1>{product.name}</h1>
					<h2>{product.type}</h2>
					<p>{product.price}</p>
					<div className={s.product_card_description_cart_btn}>
						<button onClick={user ? () => addCard() : onOpen}>Добавить в корзину</button>
						<NoAcc func={func}/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;