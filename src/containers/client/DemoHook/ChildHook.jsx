import React, { useEffect } from "react";

function ChildHook() {
  // componentWillUnMount
  useEffect(() => {
    return () => {
      console.log("dọn dẹp những thứ còn tồn động trong tang web");
    };
  });
  return (
    <div>
      <h1>ChildHook</h1>
    </div>
  );
}

export default ChildHook;
