import React from "react";
import "./topbar.scss";

const Topbar = (props) => {
	const {
		arrayLength,
		setArrayLength,
		algorithm,
		setAlgorithm,
		speed,
		setSpeed,
		isSorting,
		generateArray,
		startAction,
	} = props;

	return (
		<div className="topbar">
			<span className="header">Sort Viz</span>
			<div className="options">
				{/* array length */}
				<div className="option">
					<span className="option-name">Array Length</span>
					<input
						className="option-value"
						type="number"
						value={arrayLength}
						onChange={(e) => {
							if (e.target.value < 0) {
								alert("Array length must be greater than 0");
							} else if (e.target.value > 100) {
								alert("Array length must be less than 100");
							} else {
								setArrayLength(e.target.value);
							}
						}}
					/>
				</div>
				{/* algorithm */}
				<div className="option">
					<span className="option-name">Select Algorithm</span>
					<select
						className="option-value"
						defaultValue={algorithm}
						onChange={(e) => setAlgorithm(e.target.value)}
					>
						<option value="bubble">Bubble Sort</option>
						<option value="selection">Selection Sort</option>
						<option value="insertion">Insertion Sort</option>
						<option value="merge">Merge Sort</option>
						<option value="quick">Quick Sort</option>
					</select>
				</div>
				{/* speed */}
				<div className="option">
					<span className="option-name">Speed</span>
					<select
						className="option-value"
						defaultValue={speed}
						onChange={(e) => setSpeed(e.target.value)}
					>
						<option value="slow">Slow</option>
						<option value="medium">Medium</option>
						<option value="fast">Fast</option>
					</select>
				</div>
				{/* generate array */}
				<div className="option">
					<button
						className={`btn gen-btn ${isSorting ? "disabled" : ""}`}
						onClick={() => generateArray()}
						disabled={isSorting}
					>
						Generate Array
					</button>
				</div>
				{/* start */}
				<div className="option">
					<button
						className={`btn start-btn ${
							isSorting ? "disabled" : ""
						}`}
						onClick={startAction}
						disabled={isSorting}
					>
						Start Sort
					</button>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
