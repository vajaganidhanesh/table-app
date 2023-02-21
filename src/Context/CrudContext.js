import { createContext, useState } from "react";

const CrudContext = createContext();

export const ContextProvider = ({ children }) => {
  const array = [
    { id: 1, name: "dhanesh", age: 23 },
    { id: 2, name: "vajgani", age: 23 },
    { id: 3, name: "Harish", age: 23 },
  ];
  const [data, setData] = useState(array);
  const [singleUser, setSingleUser] = useState({
    id: "",
    name: "",
    age: "",
  });

  const { id, name, age } = singleUser;

  const deleteData = (id) => {
    setData((prev) => prev.filter((vals) => vals.id !== id));
  };

  const onChange = (e) => {
    setSingleUser((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const Update = (add) => {
    let tempArray = [...data];
    let tempIndex = tempArray.findIndex((vals, index) => {
      return vals.id === add.id;
    });

    tempArray[tempIndex] = add;
    setData(tempArray);
  };

  const onSubmit = (e, newData) => {
    e.preventDefault();
    let tempArray = [...data];
    tempArray.push(newData);
    setData(tempArray);
  };

  return (
    <CrudContext.Provider
      value={{
        data,
        id,
        name,
        age,
        setSingleUser,
        deleteData,
        onChange,
        Update,
        onSubmit,
      }}
    >
      {children}
    </CrudContext.Provider>
  );
};

export default CrudContext;
