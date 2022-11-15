import React, { useState } from "react";
import profile from "../../images/profile.jpg";
import { v4 as uuidv4 } from "uuid";
import {
  Icon1CircleFill,
  CurrencyDollar,
  FlagFill,
  HandThumbsUpFill,
  DistributeHorizontal,
  StarFill,
  ClockFill,
} from "react-bootstrap-icons";

const ProfileSection = () => {
  const [editProfile, setEditProfile] = useState(false);
  const [formData, setFormData] = useState({
    headline: "",
    summery: "",
    perHour: "",
  });
  const [list, setlist] = useState([]);

  const handleOnSave = (e) => {
    e.preventDefault();
    const params = {
      ...formData,
      id: uuidv4(),
    };
    setlist([...list, params]);
    setEditProfile(false);
    console.log(list);
  };
  const onChange = (e) => {
    // console.log(formData)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnEditProfile = () => {
    setEditProfile(true);
  };
  const handelOnCencel = () => {
    setEditProfile(false);
  };
  return (
    <div className="container my-3 py-3">
      {/* <div className="d-flex justify-content-between"> */}
      {editProfile ? (
        <div>
          <div className="row">
            <div className="col-3 ">
              <input type="file" alt="sdjks" />
              <img className="w-100" src={profile} alt="" />
              <div className="d-flex align-items-center py-1 mt-3 border border-info">
                <span className="mx-2">$</span>
                <input
                  className="w-50 border-0 usd-input"
                  type="number"
                  name="perHour"
                  onChange={onChange}
                />
                <span>USD per hour</span>
              </div>
            </div>
            <div className="col-9">
              <h5>User Name</h5>
              <label htmlFor="">Profisinal headline</label>
              <input
                className="w-100 p-1"
                name="headline"
                onChange={onChange}
                type="text"
              />
              <label htmlFor="">Summery</label>
              <textarea
                className="p-2 w-100"
                onChange={onChange}
                name="summery"
                id=""
                cols=""
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-end">
              <button className="btn btn-primary mx-2" onClick={handelOnCencel}>
                Cencel
              </button>
              <button className="btn btn-primary" onClick={handleOnSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-3">
            <img className="w-100" src={profile} alt="profile" />
            <div className="mt-3">
              <ul className="">
                <li className="list-group-item mb-1">
                  <span className="Na-span">
                    <Icon1CircleFill fill="#5dc26a"/>
                  </span>
                  Online status
                </li>
                <li className="list-group-item mb-1">
                  <span className="Na-span">
                    <CurrencyDollar fill="#5dc26a"/>
                  </span>
                  $ USD / hour
                </li>
                <li className="list-group-item mb-1">
                  <span className="Na-span">
                    <FlagFill fill="#5dc26a" />
                  </span>{" "}
                  Location
                </li>
                <li className="list-group-item mb-1">
                  <span className="Na-span">
                    <ClockFill fill="gray" />
                  </span>{" "}
                  Current time
                </li>
                <li className="list-group-item mb-1">
                  <span className="Na-span">
                  <ClockFill fill="gray" />
                  </span>{" "}
                  Joined Time
                </li>
                <li className="list-group-item mb-1">
                  <span className="Na-span">
                    <HandThumbsUpFill fill="gray"/>
                  </span>{" "}
                  Recommendations
                </li>
              </ul>
            </div>
          </div>
          <div className="col-7">
            <h5>User Name</h5>
            <p>Headline</p>
            <div className="row">
              <div className="col-6">
                <span className="star-span">
                  <StarFill fill="gray" />
                </span>
                <span className="star-span">
                  <StarFill fill="gray" />
                </span>
                <span className="star-span">
                  <StarFill fill="gray" />
                </span>
                <span className="star-span">
                  <StarFill fill="gray" />
                </span>
                <span className="Na-span">
                  <StarFill fill="gray"/>
                </span>
                0.0(0 reviewes)
              </div>
              <div className="col-6">
                <span><CurrencyDollar fill="#5dc26a"/></span>
                <span>
                  <DistributeHorizontal fill="gray"/>
                </span>
                <span>
                  <DistributeHorizontal fill="gray"/>
                </span>
                <span className="Na-span">
                  <DistributeHorizontal fill="gray"/>
                </span>
                (0.0)
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p>
                  <span className="text-success text-bold fw-bold Na-span">
                    N/A
                  </span>{" "}
                  Jobs Completed
                </p>
                <p>
                  <span className="text-success text-bold fw-bold Na-span">
                    N/A
                  </span>{" "}
                  On Time
                </p>
              </div>
              <div className="col-6">
                <p>
                  <span className="text-success text-bold fw-bold Na-span">
                    N/A
                  </span>{" "}
                  On Budget
                </p>
                <p>
                  <span className="text-success text-bold fw-bold Na-span">
                    N/A
                  </span>{" "}
                  Repeat Hire Rate
                </p>
              </div>
              <div className="row">
                <div className="col-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis corporis consequatur suscipit dignissimos non
                  debitis aliquid, itaque repellat quia? Repudiandae dicta earum
                  reprehenderit quisquam et aperiam minus, recusandae alias
                  porro.
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="col-2">
            <div className="text-end">
              <button className="btn btn-primary" onClick={handleOnEditProfile}>
                Edit profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
