import Navbar from 'react-bootstrap/Navbar';

function MainTitle(props) {
    return (
        <Navbar.Brand>{props.title}</Navbar.Brand>
    )
}

export default MainTitle;