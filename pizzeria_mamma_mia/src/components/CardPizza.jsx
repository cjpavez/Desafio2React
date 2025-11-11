import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function CardPizza({nombre,precio,ingredientes,img}) {
  return (
    <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
            <Card.Title style={{ fontSize: 'x-large' }}><strong>{nombre}</strong></Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item style={{ textAlign: 'center' }}>
                <p style={{ fontSize: 'large' }}>Ingredientes</p>
                <p>🍕{ingredientes}</p>
            </ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Card.Title style={{ marginBottom: '30px', textAlign: 'center' }}>Precio: ${precio}</Card.Title>
            <Card.Title className='btnCarrito'>
                <Button variant="light">Ver Más <i class="em em-eyes" aria-role="presentation" aria-label="EYES"></i></Button>
                <Button variant="dark">Añadir 🛒</Button>
            </Card.Title>           
        </Card.Body>
    </Card>    
  );
};

export default CardPizza;