import React, { useEffect, useState, memo } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createRef } from "react";

const Home = (props) => {
  const employeeClick = createRef();
  const myState = useSelector((state) => state.add);
  const dispatch = useDispatch();

  const data = props.data;
  const navigate = useNavigate();

  const [click, setClick] = useState(false);

  const employeeClickHandler = () => {
    setClick(true);
  };

  useEffect(() => {
    employeeClick.current.click();
  }, [employeeClick]);

  const enrollClickHandler = (e) => {
    const i = e.target.id;

    navigate("/form", { state: { name: data[i].first_name, id: data[i].id } });

    e.currentTarget.disabled = true;
  };

  return (
    <div>
      <div className="header">
        <p>Dashboard</p>
        <button ref={employeeClick} onClick={employeeClickHandler}>
          Employee
        </button>
        <button>Project</button>
        <button>Vacation</button>
        <button>Skill Set</button>
      </div>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>S.I</th>
              <th>Name</th>
              <th>Project</th>
              <th>ID</th>
              <th>Enrollment status</th>
            </tr>
          </thead>
          <tbody>
            {click &&
              data.map((e, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <th>{e.first_name}</th>
                  <th>{e.employment.title}</th>
                  <th>{e.id}</th>
                  <th>
                    {myState.find((o) => o.id === e.id) ? (
                      <button
                        id={i}
                        onClick={enrollClickHandler}
                        className="enr"
                        disabled
                      >
                        Enrolled
                      </button>
                    ) : (
                      <button id={i} onClick={enrollClickHandler} className="">
                        Enroll
                      </button>
                    )}
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
