import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Cards } from './comp/Cards';
import { Cart } from './comp/Cart';

function App() {
	const [items, setItems] = useState('');
	const [cartItems, setCart] = useState([]);

	useEffect(() => {
		fetch('https://fortniteapi.io/v2/shop?lang=ru', {
			headers: { Authorization: 'dda0ee0a-094f329f-62c0e052-5c7e2b2d' },
		})
			.then((resp) => resp.json())
			.then((data) => setItems(data.shop));
	}, []);

	function getIn(item) {
		console.log(item);
		setCart([
			...cartItems,
			{
				name: item.e,
				price: item.b,
				key: item.c,
			},
		]);
	}

	function getOut(item) {
		console.log(item);
		cartItems.filter((itemIn) => itemIn == item);
	}

	return (
		<div style={{ paddingBottom: '2%' }}>
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
