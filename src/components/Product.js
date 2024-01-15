import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => {
                setProducts(result)
            });
    }, []);

    const cards = products.map((product) => (
        <div key={product.id} className="col-md-3 mb-">
            <Card style={{ width: '18rem' }}>
               <div className="text-center">
               <Card.Img variant="top" src={product.image}  style={{width:'100px', height:'120px'}}/>
               </div>
                <Card.Body>
                <Card.Title style={{ fontSize: '1.2rem', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {product.title}
                    </Card.Title>
                    <Card.Text style={{ fontSize: '0.9rem', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {product.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    ));

    return (
        <>
            <h1>Product DashBoard</h1>
            <div className="row">
                {cards}
            </div>
        </>
    );
}

export default Product;
