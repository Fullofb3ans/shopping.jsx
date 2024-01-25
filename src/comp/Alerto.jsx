import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

export function Alerto(props) {
	if (props.show === true) {
		return (
			<Toast style={{ position: 'fixed', right: '5%', top: '3%', zIndex: '999999' }} onClick={props.close}>
				<Toast.Header>
					<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
					<strong className="me-auto">Хэй</strong>
				</Toast.Header>
				<Toast.Body>{props.name} был добавлен в корзину</Toast.Body>
			</Toast>
		);
	} else return null;
}
