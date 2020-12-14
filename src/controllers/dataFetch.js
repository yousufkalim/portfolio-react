//fetching data from portal
// Init
import database from "../firebase";

// Fetch function
function fetch(collectionName, setData) {
	database
		.collection(collectionName)
		.get()
		.then((res) => {
			res.docs.reverse().map((data) => {
				setData((prev) => {
					return [...prev, data.data()];
				});
			});
		})
		.catch((err) => console.log(err));
}

// Export
export default fetch;
