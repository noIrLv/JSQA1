"use strict";

function solveEquation(a, b, c) {
	const discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		return [];
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		return [root];
	} else {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [root1, root2];
	}
}

const roots1 = solveEquation(1, 0, -9);
console.log(roots1);

const roots2 = solveEquation(1, -4, 4);
console.log(roots2);

const roots3 = solveEquation(2, 3, 1);
console.log(roots3);
