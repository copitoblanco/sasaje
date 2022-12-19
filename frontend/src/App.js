// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




// Import other React Component
import CreateJugador from
	"./components/create-jugador.component";
import EditJugador from
	"./components/edit-jugador.component";
import JugadorList from
	"./components/jugador-list.component";

  var Link = require('react-router-dom').Link


// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/jugador-list"}
				className="nav-link">
				SASAJE
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-jugador"}
					className="nav-link">
					Create Jugador
				</Link>
				</Nav>

				<Nav>
				<Link to={"/jugador-list"}
					className="nav-link">
					Jugador List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>
				<Route exact path="/"
					component={<CreateJugador/>} />
				<Route path="/create-jugador"
					element={<CreateJugador/>} />
				<Route path="/edit-student/:id"
					element={<EditJugador/>} />
				<Route path="/jugador-list"
					element={<JugadorList/>} />
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;
