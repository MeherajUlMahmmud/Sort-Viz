export const bubbleSort = (array) => {
	console.log("sorting");
	let swapped = true;
	let i = 0;
	while (swapped) {
		swapped = false;
		for (let j = 0; j < array.length - 1 - i; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				swapped = true;
			}
		}
		i++;
	}
	console.log(array);
	return array;
};

export const selectionSort = (array) => {
	for (let i = 0; i < array.length; i++) {
		let min = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		if (min !== i) {
			[array[i], array[min]] = [array[min], array[i]];
		}
	}
	return array;
};

export const insertionSort = (array) => {
	for (let i = 1; i < array.length; i++) {
		let j = i;
		while (j > 0 && array[j] < array[j - 1]) {
			[array[j], array[j - 1]] = [array[j - 1], array[j]];
			j--;
		}
	}
	return array;
};

export const mergeSort = (array) => {
	if (array.length <= 1) {
		return array;
	}
	const middle = Math.floor(array.length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
	const result = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	return [...result, ...left, ...right];
};

export const quickSort = (array) => {
	if (array.length <= 1) {
		return array;
	}
	const pivot = array[Math.floor(array.length / 2)];
	const left = array.filter((item) => item < pivot);
	const right = array.filter((item) => item > pivot);
	return [...quickSort(left), pivot, ...quickSort(right)];
};
