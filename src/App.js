import React, { useState } from "react";

function App() {
  let arrayData = [
    [10, 20, 30, 40, 50, 60],
    [11, 12, 13, 14, 15, 16],
    [21, 22, 23, 24, 25, 26],
    [31, 32, 33, 34, 35, 36],
    [41, 42, 43, 44, 45, 46],
  ];

  const [data, setData] = useState(arrayData);

  const deleteRow = (rowId) => {
    console.log(rowId);
    setData((l) => l.filter((li, index) => index !== rowId));
  };

  const deleteColumn = (a, b) => {
    console.log(a);
    console.log(b);
    setData((array) =>
      array.filter(function (val) {
        return val.splice(b, 1);
      })
    );
  };
  return (
    <div className='container'>
      <table className=' table-hover table-striped'>
        {data.length !== 0 ? (
          <>
            {data.map((vals, index) => {
              return (
                <>
                  <tr key={index}>
                    {vals.map((vals1, index) => {
                      return (
                        <>
                          <button
                            className='btn btn-secondary'
                            onClick={() => {
                              deleteColumn(vals, index);
                            }}
                          >
                            deleteColumn
                          </button>
                          <td className='text-center' key={index}>
                            {vals1}
                          </td>
                        </>
                      );
                    })}
                    <button
                      className='btn btn-outline-danger m-2'
                      onClick={() => {
                        deleteRow(index);
                      }}
                    >
                      delete
                    </button>
                  </tr>
                </>
              );
            })}
          </>
        ) : (
          <>No arrays items are there!...</>
        )}
      </table>
    </div>
  );
}

export default App;
