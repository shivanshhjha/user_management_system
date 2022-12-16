import { useEffect, useState } from "react";
import TableContent from "../../features/table/tableContent/TableContent";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
	fetch("https://randomuser.me/api/?results=5")
		.then(response => response.json())
		.then(data => setUsers(data.results))
	}, [])

	return (
		<>
			<h1>USER MANAGEMENT SYSTEM</h1>
			<TableContent users={users} />
		</>
	);
}

export default App;