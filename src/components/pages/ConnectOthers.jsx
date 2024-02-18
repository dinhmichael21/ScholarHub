import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col, Container } from "react-bootstrap";

export default function ConnectOthers() {
    const classes = [
        {
            id: 1,
            name: "CS537: Intro to Operating Systems",
            professor: "John Doe",
            canvasLink: "https://fake-canvas-link.com/cs537",
            classmates: [
                { name: "Alice Johnson", email: "alice@example.com" },
                { name: "Bob Smith", email: "bob@example.com" },
                { name: "Carol Brown", email: "carol@example.com" },
                { name: "David Lee", email: "david@example.com" },
                { name: "Emily White", email: "emily@example.com" },
                { name: "Frank Adams", email: "frank@example.com" },
            ],
        },
        {
            id: 2,
            name: "CS540: Intro to Artificial Intelligence",
            professor: "Jane Smith",
            canvasLink: "https://fake-canvas-link.com/cs540",
            classmates: [
                { name: "Grace Parker", email: "grace@example.com" },
                { name: "Henry Turner", email: "henry@example.com" },
                { name: "Isabella Harris", email: "isabella@example.com" },
                { name: "Jack Martin", email: "jack@example.com" },
                { name: "Kate Robinson", email: "kate@example.com" },
                { name: "Liam Cooper", email: "liam@example.com" },
            ],
        },
        {
            id: 3,
            name: "CS571: Building User Interfaces",
            professor: "Michael Brown",
            canvasLink: "https://fake-canvas-link.com/cs571",
            classmates: [
                { name: "Mia Garcia", email: "mia@example.com" },
                { name: "Noah Wright", email: "noah@example.com" },
                { name: "Olivia Hall", email: "olivia@example.com" },
                { name: "Peter Lewis", email: "peter@example.com" },
                { name: "Quinn Young", email: "quinn@example.com" },
                { name: "Ruby King", email: "ruby@example.com" },
            ],
        },
        {
            id: 4,
            name: "THEATRE100: Intro to Theatre",
            professor: "Emily Johnson",
            canvasLink: "https://fake-canvas-link.com/theatre100",
            classmates: [
                { name: "Sophia Moore", email: "sophia@example.com" },
                { name: "Thomas Allen", email: "thomas@example.com" },
                { name: "Victoria Scott", email: "victoria@example.com" },
                { name: "William Green", email: "william@example.com" },
                { name: "Xander Martinez", email: "xander@example.com" },
                { name: "Zoe Taylor", email: "zoe@example.com" },
            ],
        },
        // Add more classes here if needed
    
    ];

    const pastelColors = [
        '#FFD1DC', // Light pink
        '#FFC3A0', // Peach
        '#B4E3E5', // Sky blue
        '#D8BFD8', // Lavender
        // Add more colors as needed
    ];

    return (
        <Container fluid>
            <Row>
                {classes.length === 0 ? (
                    <p>You are not enrolled in any classes!</p>
                ) : (
                    classes.map((classInfo, index) => (
                        <Col xs={6} md={6} lg={4} xxl={4} key={classInfo.key}>
                            <Card style={{ backgroundColor: pastelColors[index % pastelColors.length], marginBottom: '20px' }}>

                                <Card.Body>
                                    <Card.Title>
                                        <strong>{classInfo.name}</strong>
                                    </Card.Title>
                                    <Card.Text>Professor: {classInfo.professor}</Card.Text>
                                    <Card.Link href={classInfo.canvasLink}>Canvas page</Card.Link>
                                </Card.Body>
                                <ListGroup variant="flush">
                                    
                                    <div style={{ maxHeight: '200px', overflowY: 'auto'}}>
                                        <Card.Text style={{ marginLeft: '50px', justifyContent: 'center', alignItems:'center' }}>Connect with Scholars:</Card.Text>
                                        {classInfo.classmates.map((classmate) => (
                                            <ListGroup.Item key={classmate.name}>
                                                <a href={`mailto:${classmate.email}`}>
                                                    {classmate.name}
                                                </a>
                                            </ListGroup.Item>
                                        ))}
                                    </div>
                                </ListGroup>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
}