import React, { useEffect, useState } from "react";
import "./body.scss";

const Body = (props) => {
	const { array, colors, barWidth } = props;
	console.log("Updated");

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
