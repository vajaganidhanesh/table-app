import React, { useContext, useState } from "react";
import CrudContext from "./Context/CrudContext";

function ReducerCrud() {
  const { state, dispatch } = useContext(CrudContext);

  const [data, setData] = useState({
    id: "",
    name: "",
    age: "",
  });

  const { id, name, age } = data;
  const onChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e, data) => {
    e.preventDefault();
    dispatch({
      type: "addUser",
      payload: data,
    });
  };

  const updateUser = (e, data) => {
    e.preventDefault();
    dispatch({
      type: "updateUser",
      payload: data,
    });
  };

  return (
    <>
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                Please Enter Values
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <form action='' className='form-group'>
              <div className='modal-body flex-column d-flex g-4'>
                <input
                  type='number'
                  name='age'
                  placeholder='Enter age'
                  id='id'
                  value={id}
                  className='form-control'
                  onChange={onChange}
                />
                <input
                  type='text'
                  name='name'
                  placeholder='Entername'
                  id='name'
                  defaultValue={name}
                  onChange={onChange}
                  className='form-control'
                />
                <input
                  type='number'
                  name='age'
                  placeholder='Enter age'
                  id='age'
                  value={age}
                  className='form-control'
                  onChange={onChange}
                />
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button
                  type='button'
                  className='btn btn-primary'
                  data-bs-dismiss='modal'
                  onClick={(e) => {
                    let data = {
                      id: id,
                      name: name,
                      age: age,
                    };
                    updateUser(e, data);
                  }}
                >
                  update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='col mt-3'>
          <form className='form-group d-flex justify-content-between g-1'>
            <input
              type='number'
              name='id'
              placeholder='Enter id'
              id='id'
              value={id}
              className='form-control'
              onChange={onChange}
            />
            <input
              type='text'
              name='name'
              placeholder='Entername'
              id='name'
              defaultValue={name}
              onChange={onChange}
              className='form-control'
            />
            <input
              type='number'
              name='age'
              placeholder='Enter age'
              id='age'
              defaultValue={age}
              onChange={onChange}
              className='form-control'
            />
            <div className='col-3 align-self-end'>
              <button
                type='submit'
                className='btn btn-success'
                onClick={(e) => {
                  let data = {
                    id: id,
                    name: name,
                    age: age,
                  };
                  onSubmit(e, data);
                }}
              >
                add user
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='container d-flex'>
        <div className='col-4'>
          {state.map((users, indexes) => {
            return (
              <div key={indexes} className='card p-4 m-2'>
                <div className='card-title'>{users.name}</div>
                <div className='card-title'>{users.age}</div>
                <div className=' d-flex justify-content-evenly '>
                  <button
                    className='btn col-6 me-1 btn-primary'
                    onClick={() => {
                      dispatch({
                        type: "deleteUser",
                        payload: users.id,
                      });
                    }}
                  >
                    delete
                  </button>

                  <button
                    type='button'
                    className='btn btn-primary'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    update
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ReducerCrud;
