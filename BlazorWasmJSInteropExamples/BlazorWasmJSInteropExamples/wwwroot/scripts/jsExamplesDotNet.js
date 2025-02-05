﻿var jsFunctions = {};

jsFunctions.calculateSquareRoot = function () {
	const number = prompt("Enter your number, and I'll give you its square root");

	DotNet.invokeMethodAsync("BlazorWasmJSInteropExamples", "CalculateSquareRoot", parseInt(number))
		.then(result => {
			var el = document.getElementById("string-result");
			el.innerHTML = result;
		});
}

jsFunctions.calculateSquareRootWithJustResult = function () {
	const number = prompt("Enter your number");

	DotNet.invokeMethodAsync("BlazorWasmJSInteropExamples", "CalculateSquareRootWithJustResult", parseInt(number), true)
		.then(result => {
			var el = document.getElementById("result");
			el.innerHTML = result;
		});
}

jsFunctions.registerMouseCoordinatesHandler = function (dotNetObjRef) {
	function mouseCoordinatesHandler() {
		dotNetObjRef.invokeMethodAsync("ShowCoordinates",
			{
				x: window.event.screenX,
				y: window.event.screenY
			}
		);
	};

	mouseCoordinatesHandler();

	document.getElementById("coordinates").onmousemove = mouseCoordinatesHandler;
}