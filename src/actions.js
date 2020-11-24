import React from "react";

//Work File Actions

function handleCircleOne(isVisible, circleOne, setCircleOne) {
	if (isVisible && circleOne != 88) {
		var a = 0;
		var run = setInterval(frame, 10);

		function frame() {
			a = a + 1;
			if (a == 89) {
				clearInterval(run);
			} else {
				setCircleOne((prev) => ++prev);
			}
		}
	}
}

function handleCircleTwo(isVisible, circleTwo, setCircleTwo) {
	if (isVisible && circleTwo != 82) {
		var a = 0;
		var run = setInterval(frame, 10);

		function frame() {
			a = a + 1;
			if (a == 83) {
				clearInterval(run);
			} else {
				setCircleTwo((prev) => ++prev);
			}
		}
	}
}

function handleCircleThree(isVisible, circleThree, setCircleThree) {
	if (isVisible && circleThree != 95) {
		var a = 0;
		var run = setInterval(frame, 10);

		function frame() {
			a = a + 1;
			if (a == 96) {
				clearInterval(run);
			} else {
				setCircleThree((prev) => ++prev);
			}
		}
	}
}

//Exports
export { handleCircleOne, handleCircleTwo, handleCircleThree };
