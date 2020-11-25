import React from 'react';

import Card from 'react-bootstrap/Card';

function Cards(props){
    return(
        <Card
            bg='dark'
            border='danger'
            key={props.item.id}
            text='white'
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Img variant="top" src={props.item.imgSrc}/>
            <Card.Header>{props.item.ime}</Card.Header>
            <Card.Body>
            <Card.Text>
                <p><b>Broj indeksa</b>: {props.item.brIndeks}<br/>
                <b>Smer</b>: {props.item.smer}<br/>
                <b>Mejl</b>: {props.item.mejl}<br/>
                <b>Funkcije</b>: {props.item.funkcije}</p>        
            </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cards;