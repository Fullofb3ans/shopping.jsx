import logo from './logo.svg';
import './App.css';
import { createRef, useEffect, useState } from 'react';
import { Cards } from './comp/Cards';
import { Cart } from './comp/Cart';
import { Alerto } from './comp/Alerto';
import { useRef } from 'react';

function App() {
	let mainRef = useRef();

	const [items, setItems] = useState('');
	const [cartItems, setCart] = useState([]);
	const [showModal, setShow] = useState(false);
	let closeModal = () => {
		setShow(false);
	};

	useEffect(() => {
		fetch('https://fortniteapi.io/v2/shop?lang=ru', {
			headers: { Authorization: 'dda0ee0a-094f329f-62c0e052-5c7e2b2d' },
		})
			.then((resp) => resp.json())
			.then((data) => setItems(data.shop));
	}, []);

	function getIn(item) {
		console.log(item);
		if (!cartItems.some((key) => key.key == item.c)) {
			setCart([
				...cartItems,
				{
					name: item.e,
					price: item.b,
					key: item.c,
					num: 1,
				},
			]);
			setShow(false);
			setTimeout(() => {
				setShow(true);
			}, 50);
			return (mainRef.current = item.e + ' был ');
		} else {
			console.log('poehali');
			setCart(
				cartItems.map((key) => {
					if (key.key === item.c) {
						return { ...key, num: key.num + 1 };
					}
					return key;
				})
			);
			setShow(false);
			setTimeout(() => {
				setShow(true);
			}, 50);
			return (mainRef.current = item.e + ' был ');
		}
	}

	function getOut(key) {
		setCart(cartItems.filter((item) => item.key !== key));
	}

	function plus(item) {
		setCart(
			cartItems.map((key) => {
				console.log(key);
				console.log(item);

				if (key.key == item) {
					return { ...key, num: key.num + 1 };
				}
				return key;
			})
		);
	}
	function minus(item) {
		setCart(
			cartItems.map((key) => {
				console.log('ИМИНУс');

				if (key.key == item && key.num > 0) {
					return { ...key, num: key.num - 1 };
				}
				return key;
			})
		);
	}

	return (
		<div style={{ paddingBottom: '2%' }}>
			<Alerto name={mainRef.current} close={closeModal} show={showModal} f={setShow} />
			<Cart minusF={(e) => minus(e)} plusF={(e) => plus(e)} items={cartItems} rm={getOut} />
			<div
				style={{
					padding: '1%',
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					alignContent: 'space-between',
					justifyContent: 'space-between',
					alignItems: 'stretch',
				}}>
				{items !== '' ? <Cards f={(e) => getIn(e)} cards={items}></Cards> : ''}
			</div>
		</div>
	);
}

export default App;
