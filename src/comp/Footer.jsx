import Nav from 'react-bootstrap/Nav';

export function Footer() {
	return (
		<>
			<style>
				{`
            .nav{    background-color: #2b3034;
    color: white;`}
			</style>
			<Nav className="justify-content-center" activeKey="/home">
				<Nav.Item>
					<Nav.Link href="/home">Active</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-1">Link</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-2">Link</Nav.Link>
				</Nav.Item>
				<Nav.Item></Nav.Item>
			</Nav>
		</>
	);
}
