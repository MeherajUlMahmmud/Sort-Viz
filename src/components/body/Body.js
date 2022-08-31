import React, { useEffect, useState } from "react";
import "./body.scss";

const Body = (props) => {
	const { array } = props;
	console.log("Updated");

	const [colors, setColors] = useState([]);
	const [barWidth, setBarWidth] = useState(0);

	// generate random colors for array
	useEffect(() => {
		const colors = [];
		for (let i = 0; i < array.length; i++) {
			colors.push(`hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`);
		}
		setColors(colors);
		const barWidth = 100 / array.length + "%";
		setBarWidth(barWidth);
	}, [array]);

	return (
		<div className="body">
			<div className="array">
				{array.map((value, index) => (
					<div
						key={index}
						className="array-item"
						style={{
							backgroundColor: colors[index],
							height: `${value * 10}px`,
							width: barWidth,
						}}
					>
						<span className="value">{value}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Body;
