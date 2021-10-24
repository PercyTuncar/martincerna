import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'; 
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css';

const cardImg ={
    padding:'20px 100px'
} 

export default function Body() {
    return ( 
        <>
        <Container>
             <h1 className="header">¿Buscas un <span style={{color:'#F43627'}}>fotógrafo profesional</span>  para alguno de tus eventos?</h1>
             <p className="text-center aling">
             Ofrezco servicios de fotografía 
             para todos tus eventos sociales y empresariales 
             con precios únicos junto a la calidad y atención 
             que solo tú te mereces.
             </p>
            <Row>
                <Col>
                <Card style={{ width: '90%', margin: 'auto' }}>
                    <Card.Img variant="top" style={cardImg} src="https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/icons8-like.svg?alt=media&token=41b88561-901d-4c5f-be1f-4365ae724f8c" />
                    <Card.Body>
                        <Card.Title>Experiencia</Card.Title>
                        <Card.Text>
                        En más de 8 años nos hemos especializado en el rubro fotográfico y eventos.
                        </Card.Text>
                      
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '90%', margin: 'auto'  }}>
                    <Card.Img variant="top" style={cardImg} src="https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/icons8-trust.svg?alt=media&token=ac36e9a5-796d-4fc2-a916-355047c29a71" />
                    <Card.Body>
                        <Card.Title>Servicio Profesional </Card.Title>
                        <Card.Text>
                        Capturamos los momentos más memorables de tu evento con precisión y detalle.
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '90%', margin: 'auto'  }}>
                    <Card.Img variant="top" style={cardImg} src="https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/icons8-star.svg?alt=media&token=2c0e2c2d-bebf-46af-b29f-ceaf3245b06d" />
                    <Card.Body>
                        <Card.Title>100% Compromiso</Card.Title>
                        <Card.Text>
                        Les servimos de manera personalizada, con dedicación y velocidad.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </Col>
            </Row>

            <h1 className="header">¿Buscas un <span style={{color:'red'}}>fotógrafo profesional</span> para alguno de tus eventos?</h1>
                    <p className="text-center aling">
                    Ofrezco servicios de fotografía 
                    para todos tus eventos sociales y empresariales 
                    con precios únicos junto a la calidad y atención 
                    que solo tú te mereces.
                    </p> 
        </Container>

        <Container>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FARTISTICO%2F0009-28.jpg?alt=media&token=d2018730-1698-4a9c-8ccf-6a860cae35f7" />
                </Card>
                <Card>
                    <Card.Body style={{textAlign:'left', display:'flex', alignItems:'center'}} >
                   
                        <Card.Text>
                        <h1 >Card title</h1>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                   
                    </Card.Body>
                </Card>
            </CardGroup>
            <br/>
            <br/>
            <br/>
            <CardGroup> 
                <Card>
                    <Card.Body style={{textAlign:'right', display:'flex', alignItems:'center'}} >
                        <Card.Text>
                            <h1>Card title</h1>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2Feventos%2F26062021-_DSC4373.JPG?alt=media&token=e1c0c38b-a690-4ec3-bb1b-c02996b597dd" />
                </Card>
            </CardGroup>
        </Container>
        </>
    );
  }