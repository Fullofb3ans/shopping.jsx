import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Cards } from './comp/Cards';
import { Cart } from './comp/Cart';
import { Alerto } from './comp/Alerto';

function App() {
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
				},
			]);
		}
		setShow(true);
	}

	function getOut(key) {
		console.log(key);
		console.log(cartItems);
		setCart(cartItems.filter((item) => item.key !== key));
	}

	return (
		<div style={{ paddingBottom: '2%' }}>
			<Alerto close={closeModal} show={showModal} f={setShow} />
			<Cart items={cartItems} rm={getOut} />
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
