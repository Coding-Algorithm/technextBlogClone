import React from "react";
import "./blockSection.css";

function BlockSection() {
	return (
		<div className="blockSection">
			<div className="blockSectionInner">
				<div className="blockSectionRight">
					<div className="blockSectionRightBackground"></div>
					<div className="blockSectionRightTop">
                    <div className="blockSectionRightTopAuthor">
                        <img src="/" alt="author" />
                        <span>David Afolayan</span>
                    </div>
						<h2>
							Here is a list of confirmed speakers for the GAT Summit 2022{" "}
						</h2>
					</div>
				</div>

				<div className="blockSectionLeft"></div>
			</div>
		</div>
	);
}

export default BlockSection;
