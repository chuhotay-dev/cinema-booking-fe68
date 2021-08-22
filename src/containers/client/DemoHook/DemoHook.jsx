import React, { useState, useEffect } from "react";
import ChildHook from "./ChildHook";

function DemoHook() {
  const [numberLike, setNumberLike] = useState(1); // [1, f()]
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  //   const state = data[0]; // 1
  //   const setState = data[1]; // f()

  // componentDidMount
  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log("componentDidMount + componentDidUpdate");
  }, [numberLike]);

  // lúc nào cũng chạy
  useEffect(() => {
    console.log("lúc nào cũng chạy");
  });

  return (
    <div>
      <h1>DemoHook</h1>
      <div className="card text-left">
        <img
          className="card-img-top img-thumbnail"
          src="https://danviet.mediacdn.vn/2020/11/4/lisa-blackpink-160444886213712136820.jpg"
          alt
        />
        <div className="card-body">
          <h4 className="card-title">{numberLike} Like</h4>
          <button
            className="btn btn-info"
            onClick={() => {
              const newNumberLike = numberLike + 1;
              setNumberLike(newNumberLike);
            }}
          >
            Tăng Like
          </button>
        </div>
      </div>
      {numberLike % 2 === 0 ? <ChildHook /> : null}
    </div>
  );
}

export default DemoHook;
