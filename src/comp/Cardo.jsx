import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Cardo(props) {
	// console.log('cardo');
	// console.log(props);

	return (
		<Card
			style={{
				width: '18rem',
				color: 'white',
				margin: '1%',
				background: 'rgb(51 51 51 / 76%)',
				boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
				backdropFilter: 'blur(4px)',
				WebkitBackdropFilter: 'blur(4px)',
				borderRadius: '10px',
				border: '1px solid rgba(255, 255, 255, 0.18)',
			}}>
			<Card.Img variant="top" src={props.img} />
			<Card.Body>
				<Card.Title>{props.displayName}</Card.Title>
				<Card.Text>{props.displayDescription}</Card.Text>
				<Card.Text>{props.rarity.name}</Card.Text>
				<Button onClick={() => props.f({ e: props.displayName, b: props.finalPrice, c: props.id })} variant="primary">
					{props.finalPrice}
				</Button>
			</Card.Body>
		</Card>
	);
}
