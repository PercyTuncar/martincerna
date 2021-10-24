import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'; 
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css';

const cardImg ={
    padding:'20px 100px'
} 

export default function Body() {
    return ( 
        <>
        <Container>
             <h1 className="header">Fotógrafo profesional <span style={{color:'#F43627'}}>  para eventos en Perú </span>  </h1>
             <p className="text-center aling">
             Ofrezco servicios de fotografía 
             para todos tus eventos sociales y empresariales 
             con precios únicos junto a la calidad y atención 
             que solo tú te mereces.
             </p>
            <Row>
                <Col>
                <Card style={{ width: '90%', margin: 'auto', border:'none' }}>
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
                <Card style={{ width: '90%', margin: 'auto', border:'none'  }}>
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
                <Card style={{ width: '90%', margin: 'auto', border:'none'  }}>
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
        </Container>

<div style={{background:'#fff', width:'100%', margin: '100px 0px', padding:'1px 0 90px 0', boxShadow:'5px 5px 45px 45px #e9e9e9'}}>
<Container >
        <h1 className="header"> <span style={{color:'red'}}>fotografía</span>   de alta calidad</h1>
                    <p className="text-center aling">
                    Ofrezco servicios de fotografía 
                    para todos tus eventos sociales y empresariales 
                    con precios únicos junto a la calidad y atención 
                    que solo tú te mereces.
                    </p> 
            <CardGroup>
                <Card style={{boxShadow:'none'}}>
                    <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2Ffamilia%2F13062021-DSC03023.2.jpg?alt=media&token=930f20e2-6403-4c0e-b465-94c2c9eea952" />
                </Card>
                <Card style={{boxShadow:'none'}}>
                    <Card.Body style={{textAlign:'left', display:'flex', alignItems:'center'}} >
                   
                        <Card.Text style={{fontSize:'15px'}}>
                        <h1  style={{fontSize:'30px'}} >La mejor opción para usted</h1>
                        Pase más tiempo con su familia y confíe en el proceso de captura de recuerdos vitales
                        <br />
                        <div> <Button href="#">Ver precios</Button> </div>
                        </Card.Text>
                      
                      

                    </Card.Body>
                </Card>
            </CardGroup>
      
        </Container> 
</div>
     
        </>
    );
  }