import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Datos que deseas enviar en la solicitud POST (puedes modificar esto según tus necesidades)
        const requestData = {
        };
    
        // Configuración de la solicitud POST
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Asegúrate de establecer el tipo de contenido correcto
            },
            body: JSON.stringify(requestData), // Convierte los datos a formato JSON
        };
    
        // Realiza la solicitud POST
        fetch('/product/findAll', requestOptions)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <Container>
            {/* Agrega un título aquí */}
            <h1 className="my-4">Products</h1>
            <Row>
                {Array.isArray(products) && products.map((product) => (
                    <Col key={product.pkid_product} sm={6} md={4} lg={3} className="mb-4">
                        <Link to={`/product/${product.pkid_product}`} style={{ textDecoration: 'none' }}>
                            <Image src={product.image} style={{ maxWidth: '150px', height: 'auto' }} fluid />
                            <h4 className="mt-2">{product.description}</h4>
                            <p>${product.price}</p>
                            <Button variant="primary">Add Car</Button>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default HomePage;
