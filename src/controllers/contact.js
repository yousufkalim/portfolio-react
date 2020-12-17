// Contact Component Controller
import database from "../firebase";

//Input Handle
function handleInput(e, setInput) {
	setInput((prev) => {
		return {
			...prev,
			[e.target.name]: e.target.value,
		};
	});
}

//Submit Handle
function handleSubmit(e, input, setSubmit, setInput, setLoading) {
	e.preventDefault();
	setLoading(true);

	database
		.collection("contacts")
		.add({
			name: input.name,
			email: input.email,
			phone: input.phone,
			dateCreated:
				new Date().toLocaleTimeString() +
				" - " +
				new Date().toLocaleDateString(),
		})
		.then(() => {
			setLoading(false);
			setSubmit(
				<span className="success">
					Got it, I'll contact you shortly, Thanks
				</span>
			);
			setInput({ name: "", email: "", phone: "" });
		})
		.catch(() => {
			setLoading(true);
			setSubmit(
				<span className="error">
					Opps an error accured, Please email me at
					<strong> Yousufkalim@outlook.com</strong>
				</span>
			);
		});
}

// Export
export { handleInput, handleSubmit };
