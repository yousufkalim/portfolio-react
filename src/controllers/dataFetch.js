//fetching data from portal
// Init
import database from "../firebase";

// Fetch function
function fetch(collectionName, setData) {
	database
		.collection(collectionName)
		.orderBy("dateCreated", "desc")
		.get()
		.then((res) => {
			res.docs.map((data) => {
				setData((prev) => {
					return [...prev, data.data()];
				});
			});
		})
		.catch((err) => console.log(err));
}

// Export
export default fetch;
