import React, { state, useState } from "react";
import TopBar from "./TopBar";
import FeedContainer from "./Feeds/FeedContainer";
import NewPost from "./Feeds/NewPost";
import MakeAPost from "./Feeds/MakeAPost";
import LeftSidebar from "./LeftSidebar";
import DailyChallenge from "./Feeds/DailyChallenge";
import RecentNews from "./Feeds/RecentNews";

const Feeds = () => {
  const [isActive, setActive] = useState("home");

  return (
    <>
      <TopBar />
      <LeftSidebar myState="home" />
      <div className="container-fluid main-div min-vh-100 ps-0">
        <div className="row justify-content-center mainbox">
          <div className="col-md-6 max-700">
            <NewPost />
            <FeedContainer />
          </div>
          <div className="col-md-4 mt-4 max-550">
            <MakeAPost/>
            <br />
            <DailyChallenge/>
            <br />
            <RecentNews/>
            <div className="card funge-card mt-4">
              <div className="container">
                <div className="row pt-2">
                  <div className="col-1 p-0">
                    <img
                      src="./assets/images/profile_new.png"
                      className="img-fluid mt-3 ms-2"
                    />
                  </div>
                  <div className="col-11 ps-4">
                    <div className="w-400 ms-2 ">
                      <p className="w-400 mb-2 my-3 mb-2">
                        Today is a good day to post Nfts
                      </p>
                      <p className="w-500 mb-2  funge-color">#Newcollection</p>
                    </div>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-6">
                    <img
                      src="./assets/images/Rectangle.png"
                      className="img-fluid w-100"
                      alt="Post Image"
                    />
                    <span
                      className="fs-3 position-absolute"
                      style={{ top: 136, left: 60 }}
                    >
                      <i className="fas fa-times-circle funge-color"></i>
                    </span>
                  </div>
                  <div className="col-6">
                    <img
                      src="./assets/images/Rectangle 864.png"
                      className="img-fluid  w-100"
                      alt="Post Image"
                    />
                  </div>
                  <br />
                  <div className="row pt-2 ms-2 my-2">
                    <div className="col-1 p-0">
                      <img
                        src="./assets/images/User.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-11 p-0">
                      <a href="#" className="funge-link w-700 me-5">
                        Tag people
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="funge-grey" />
              </div>
              <div className="row pt-2 px-5">
                <div className="col-1 p-0">
                  <img src="./assets/images/Image.png" className="img-fluid" />
                </div>
                <div className="col-1 p-0">
                  <img
                    src="./assets/images/user+.png"
                    className="img-fluid  "
                  />
                </div>
                <div className="col-1 p-0">
                  <img src="./assets/images/Smile.png" className="img-fluid " />
                </div>
                <div className="col-1 p-0">
                  <img
                    src="./assets/images/Location.png"
                    className="img-fluid  "
                  />
                </div>
                <div className="col-8 p-0 text-end">
                  <button className="btn btn-primary">Funge it</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feeds;
