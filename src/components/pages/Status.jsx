import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Status() {
    const [socialEvent, setSocialEvent] = useState(false);
    const [serviceEvent, setServiceEvent] = useState(false);
    const [metWithAdvisor, setMetWithAdvisor] = useState(false);
    const goodAcademicStanding = true; // Assume it's true for now (you can update this based on actual data)

    useEffect(() => {
        // You can add any side effects here if needed
    }, []);

    const cardStyle = {
        padding: '20px',
        marginBottom: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.5rem', // Increase font size
    };

    const toggleEvent = (eventSetter) => {
        eventSetter((prevValue) => !prevValue);
    };

    return (
        <div>
            <Card style={{ ...cardStyle, backgroundColor: socialEvent ? '#98FB98' : '#FFA07A' }}>
                <Card.Body>
                    <Card.Title style={{ fontSize: '1.8rem' }}>Social Event</Card.Title>
                    <Button variant="outline-light" onClick={() => toggleEvent(setSocialEvent)}>
                        Submit
                    </Button>
                </Card.Body>
            </Card>

            <Card style={{ ...cardStyle, backgroundColor: serviceEvent ? '#98FB98' : '#FFA07A' }}>
                <Card.Body>
                    <Card.Title style={{ fontSize: '1.8rem' }}>Service Event</Card.Title>
                    <Button variant="outline-light" onClick={() => toggleEvent(setServiceEvent)}>
                        Submit
                    </Button>
                </Card.Body>
            </Card>

            <Card style={{ ...cardStyle, backgroundColor: metWithAdvisor ? '#98FB98' : '#FFA07A' }}>
                <Card.Body>
                    <Card.Title style={{ fontSize: '1.8rem' }}>Met with Advisor</Card.Title>
                    <Button variant="outline-light" onClick={() => toggleEvent(setMetWithAdvisor)}>
                        Submit
                    </Button>
                </Card.Body>
            </Card>

            <Card style={{ ...cardStyle, backgroundColor: goodAcademicStanding ? '#98FB98' : '#FFA07A' }}>
                <Card.Body>
                    <Card.Title style={{ fontSize: '1.8rem' }}>Good Academic Standing</Card.Title>
                    <p>Your GPA is 3.3. Nice Job!</p>
                </Card.Body>
            </Card>
        </div>
    );
}
