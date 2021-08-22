import React, { useState, useEffect, memo } from 'react';

function Child(props) {
  const [count, setCount] = useState(0);
  //   let interval = null;

  useEffect(() => {
    console.log('Chạy lần đầu và luôn luôn chạy mỗi lần re-render');
  });

  useEffect(() => {
    console.log('Chỉ chạy một lần duy nhất');

    // interval = setInterval(() => {
    //     console.log('interval');
    // }, 1000);

    return () => {
      console.log('Chạy khi component biến mất khỏi DOM');
      //   clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log(
      'Chạy lần đầu và chỉ chạy lại khi giá trị của biến trong mảng dependency thay đổi'
    );
  }, [count]);

  console.log('Child > render');

  return (
    <div>
      <h1>Child</h1>
      <p>Current number is {count}</p>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default memo(Child);