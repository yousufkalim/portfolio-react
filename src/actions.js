//importing modules
import axios from "axios";

//Work File Actions
function handleCircleOne(isVisible, circleOne, setCircleOne) {
	if (isVisible && circleOne < 88) {
		var a = 0;
		var run = setInterval(frame, 10);

		function frame() {
			a = a + 1;
			if (a >= 88) {
				clearInterval(run);
			} else {
				setCircleOne((prev) => ++prev);
			}
		}
	}
}

function handleCircleTwo(isVisible, circleTwo, setCircleTwo) {
	if (isVisible && circleTwo < 82) {
		var a = 0;
		var run = setInterval(frame, 10);

		function frame() {
			a = a + 1;
			if (a >= 82) {
				clearInterval(run);
			} else {
				setCircleTwo((prev) => ++prev);
			}
		}
	}
}

function handleCircleThree(isVisible, circleThree, setCircleThree) {
	if (isVisible && circleThree < 95) {
		var a = 0;
		var run = setInterval(frame, 10);

		function frame() {
			a = a + 1;
			if (a >= 95) {
				clearInterval(run);
			} else {
				setCircleThree((prev) => ++prev);
			}
		}
	}
}

/*
==================
Contact Post Req
==================
*/

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
function handleSubmit(e, input, setSubmit, setInput) {
	e.preventDefault();
	axios
		.post(
			"/https://kalim-portfolio-default-rtdb.firebaseio.com/contacts.json",
			input
		)
		.then(() => {
			setSubmit(
				<span className="success">
					Got it, I'll contact you shortly, Thanks
				</span>
			);
			setInput({ name: "", email: "", phone: "" });
		})
		.catch(() =>
			setSubmit(
				<span className="error">
					Opps an error accured, Please email me at
					<strong> Yousufkalim@outlook.com</strong>
				</span>
			)
		);
}

//Exports
export {
	handleCircleOne,
	handleCircleTwo,
	handleCircleThree,
	handleInput,
	handleSubmit,
};
