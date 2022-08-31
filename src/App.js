import { useEffect, useState } from "react";
import Body from "./components/body/Body";
import Topbar from "./components/topbar/Topbar";
import {
	bubbleSort,
	insertionSort,
	mergeSort,
	quickSort,
	selectionSort,
} from "./utils/algorithms";

function App() {
	const [arrayLength, setArrayLength] = useState(10);
	const [algorithm, setAlgorithm] = useState("bubble");
	const [speed, setSpeed] = useState("medium");
	const [isSorting, setIsSorting] = useState(false);
	const [array, setArray] = useState([]);
	const [colors, setColors] = useState([]);
	const [barWidth, setBarWidth] = useState(0);

	useEffect(() => {
		generateArray(arrayLength);
	}, [arrayLength]);

	// generate random array
	const generateArray = () => {
		const array = [];
		const colors = [];
		for (let i = 0; i < arrayLength; i++) {
			array.push(Math.floor(Math.random() * arrayLength) + 1);
			colors.push(`hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`);
		}
		setColors(colors);
		setArray(array);
		const barWidth = 100 / array.length + "%";
		setBarWidth(barWidth);
	};

	const startAction = () => {
		setIsSorting(true);
		// sort array
		const sortedArray = [...array];
		sortedArray.sort((a, b) => a - b);
		setArray(sortedArray);
		// switch (algorithm) {
		// 	case "bubble":
		// 		setArray(bubbleSort(array));
		// 		break;
		// 	case "insertion":
		// 		setArray(insertionSort(array));
		// 		break;
		// 	case "merge":
		// 		setArray(mergeSort(array));
		// 		break;
		// 	case "quick":
		// 		setArray(quickSort(array));
		// 		break;
		// 	case "selection":
		// 		setArray(selectionSort(array));
		// 		break;
		// 	default:
		// 		break;
		// }
		// setAlgorithm(algorithm);
		setIsSorting(false);
	};

	return (
		<div>
			<Topbar
				arrayLength={arrayLength}
				setArrayLength={setArrayLength}
				algorithm={algorithm}
				setAlgorithm={setAlgorithm}
				speed={speed}
				setSpeed={setSpeed}
				isSorting={isSorting}
				generateArray={generateArray}
				startAction={startAction}
			/>
			<Body array={array} colors={colors} barWidth={barWidth} />
		</div>
	);
}

export default App;
