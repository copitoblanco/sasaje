import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const JugadorTableRow = (props) => {
const { id, name} = props.obj;

const deleteJugador = () => {
	axios
	.delete(
"http://localhost:4000/jugador/" + id)
	.then((res) => {
		if (res.status === 200) {
		alert("Jugador successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{id}</td>
	<td>{name}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-jugador/" + id}>
		Edit
		</Link>
		<Button onClick={deleteJugador}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default JugadorTableRow;
