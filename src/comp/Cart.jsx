import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export function Cart(props) {
	// console.log(props);
	const [show, setShow] = useState(false);
	const [cartPrice, setPrice] = useState('В корзине пусто');

	useEffect(() => {
		setPrice(props.items.reduce((sum, item) => sum + item.price, 0));
	}, [props.items]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<div style={{ textAlign: 'right', padding: '1%' }}>
				<Button onClick={handleShow}>
					<i className="fa fa-shopping-cart" />
				</Button>
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Корзина</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
						{props.items.map((e) => {
							return (
								<div onClick={() => props.rm(e.key)} style={{ marginBottom: '2%', border: '0.5px solid #0000004d', padding: '1%', borderRadius: '15px', cursor: 'pointer' }}>
									Название: {e.name}
									<br />
									Цена: {e.price}
									<div></div>
								</div>
							);
						})}
						<div>
							Итого: <b>{cartPrice}</b>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Закрыть
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Оформить
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
