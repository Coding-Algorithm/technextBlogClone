import React, { useEffect, useRef, useState } from "react";
import "./search.css";
import { MdClose, MdSearch } from "react-icons/md";



function Search() {
  const searchInput = useRef();

  const [searchValue, setSearchValue] = useState()

  useEffect(() => {

    console.log("Changed")
 
    return () => {
      // second
    }
  }, [searchValue])
  

  return (
    <div className="searchSection">
      <div className="searchSectionInner">
        <div className="searchSectionUpper">
          <span className="searchSectionInputBoxWrapper">
            <MdSearch className="searchSectionIcon" size={25} />
            <input
              ref={searchInput}
              className="searchSectionInputBox"
              type="text"
              placeholder="Search"
              onChange={() => setSearchValue(searchInput.current.value)}
            />
            <MdClose size={25} />
          </span>
        </div>

        <div className="searchSectionLower">
          {false ? (
            <div className="searchSectionLowerHandPicked">
              <small className="handPickedText">HAND - PICKED</small>
              <p className="topReadStories">Top-Read Stories</p>
              <ul className="searchSectionHandPickedPosts">
                <li className="searchSectionHandPickedPost">
                  <img src="" alt="" />
                  <h3 className="searchSectionHandPickedPostTitle">
                    This is the title. How are you?
                  </h3>
                </li>
                <li className="searchSectionHandPickedPost">
                  <img src="" alt="" />
                  <h3 className="searchSectionHandPickedPostTitle">
                    This is the title
                  </h3>
                </li>
                <li className="searchSectionHandPickedPost">
                  <img src="" alt="" />
                  <h3 className="searchSectionHandPickedPostTitle">
                    This is the title
                  </h3>
                </li>
              </ul>
            </div>
          ) : (
            <div className="searchSectionLowerSearchResult">
              <ul className="searchSectionPostLists">
                <li className="searchSectionPostItem">
                  <div className="searchSectionPostItemInner">
                    <span>
                      <img src="" alt="" />
                      <h3 className="searchSectionPostItemTitle">
                        This is the title
                      </h3>
                    </span>

                    <span>post</span>
                  </div>
                </li>
                <li className="searchSectionPostItem">
                  <div className="searchSectionPostItemInner">
                    <span>
                      <img src="" alt="" />
                      <h3 className="searchSectionPostItemTitle">
                        This is the title
                      </h3>
                    </span>

                    <span>post</span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
