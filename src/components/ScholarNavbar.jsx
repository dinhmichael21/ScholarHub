import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImage from "./badgerPic.jpg"

export default function ScholarNavbar(props) {

    const navbarStyle = {
        backgroundColor: "#cc0202", // Red background color
    };

    const linkStyle = {
        color: 'white', // White text color
        fontSize: '1.2rem', // Increase font size (adjust as needed)
        fontWeight: 'bold', // Make the text bold
        fontFamily: 'Arial, sans-serif', // Use a softer font (adjust as needed)
        display: 'flex', // Center the content horizontally
        alignItems: 'center', // Vertically align the content
        border: '2px solid white', // Rounded oval darker red border
        borderRadius: '20px', // Rounded border
        padding: '5px 10px', // Add some padding
        margin: '0 10px', // Add spacing between links
    };

    const navContainerStyle ={
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 0",
    };


    return <Navbar sticky="top" expand="sm" collapseOnSelect style={navbarStyle}>
        <Container style={navContainerStyle} fluid className="p-0"> {/* Use fluid container and remove padding */}
            <div style={navContainerStyle}>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logoImage}
                        alt="Logo"
                        width="80" // Adjust the width as needed
                        height="80" // Adjust the height as needed
                        className="d-inline-block align-top rounded-circle"
                    />
                </Navbar.Brand>
                <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', display: 'flex', alignItems:'center' }}>
                    MJLSP Hub
                </div>
            </div>

            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/" style={linkStyle}>Home</Nav.Link>
                <Nav.Link as={Link} to="/contact-advisors" style={linkStyle}>Advisors</Nav.Link>
                <Nav.Link as={Link} to="/connect-others" style={linkStyle} >Connect w/ Others</Nav.Link>
                <Nav.Link as={Link} to="/status" style={linkStyle}>Tracker</Nav.Link>
                <Nav.Link as={Link} to="/sign-in" style={linkStyle}>Sign In</Nav.Link>
                <Nav.Link as={Link} to="/sign-up" style={linkStyle}>Sign Up</Nav.Link>
            </Nav>
        
        </Container>
    </Navbar>
}
