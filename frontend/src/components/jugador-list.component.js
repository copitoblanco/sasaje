import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import JugadorTableRow from "./JugadorTableRow";

const JugadorList = () => {
const [jugadores, setJugadores] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/jugador")
	.then(({ data }) => {
		setJugadores(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return jugadores.map((res, i) => {
	return <JugadorTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Id</th>
			<th>Name</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default JugadorList;
