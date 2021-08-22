import React, { useState, useCallback, useMemo } from 'react';
import Child from './Child';

export default function Parent(props) {
  const [removeCounter, setRemoveCounter] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);

  // Empty dependency: Không bao giờ tạo lại function mới
  //   const renderBigChart = useCallback(() => {}, []);

  // Tạo lại function mới khi các giá trị trong mảng dependency thay đổi
  const renderBigChart = useCallback(() => {}, [randomNumber]);

  // Tương tự như useCallback nhưng thay vì cache function thì useMemo catch giá trị return từ function
  //   const student = useMemo(
  //     () => ({
  //       fullName: 'Tay',
  //       age: 18,
  //       class: 'FE68',
  //     }),
  //     []
  //   );

  const student = useMemo(
    () => ({
      fullName: 'Tay',
      age: 18,
      class: 'FE68',
    }),
    [randomNumber]
  );

  console.log('Parent > render');

  return (
    <div>
      <h1>Parent</h1>
      <p>Random number: {randomNumber}</p>
      <button
        className="btn btn-success"
        onClick={() => setRandomNumber(Math.random())}
      >
        Random Number
      </button>
      <button className="btn btn-danger" onClick={() => setRemoveCounter(true)}>
        Remove Counter
      </button>
      {!removeCounter && (
        <Child
          // renderBigChart={renderBigChart}
          student={student}
        />
      )}
    </div>
  );
}
