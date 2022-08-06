import React from "react";
import { images } from "../../data/images";
import "./blockSection.css";

function BlockSection() {

	

	return (
		<div className="blockSection">
			<div className="blockSectionInner">
				<div className="blockSectionRight">
					<div className="blockSectionRightBackground">
						<img src={images[1]} alt="postImage" />
					</div>
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

				<div className="blockSectionLeft">
					<div className="blockSectionLeftHeading">
						<p className="blockSectionLeftHeadingTitle thisWeek">THIS WEEK'S</p>
						<p className="blockSectionLeftHeadingTitle editorsPick">Editor's Pick</p>
					</div>

					<ul className="blockSectionLeftPostLists">
						<li className="blockSectionLeftPost">
							<img src="/" alt="postImage" />
							<div className="blockSectionLeftPostInfo">
								<h3 className="blockSectionLeftPostTitle">
									Ayodeji Awosika speaks on foray into crypto, training 1000 blockchain developers with Web3bridge
								</h3>

								<span className="blockSectionLeftPostMetaInfo">
								<span className="postAuthor blockSectionLeftPostAuthor">
									by <b>Temitope Akinlade</b>
								</span>

								<span className="postReadTime blockSectionLeftPostReadTime">
									5 minutes read
								</span>
								</span>
							</div>
						</li>
					</ul>

				</div>
			</div>
		</div>
	);
}

export default BlockSection;
