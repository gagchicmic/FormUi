import { useState } from "react";

const Form = ({ fields, data, setData, handleSubmit, isSignUp }) => {
  const [start, isStart] = useState(0);

  const checkValidation = (type, field, text) => {
    if (type === "first name") {
      text.length < 6 ? (field["isvalid"] = false) : (field["isvalid"] = true);
    } else if (type == "last name") {
      text.length < 6 ? (field["isvalid"] = false) : (field["isvalid"] = true);
    } else if (type === "email") {
      if (text.length == 0) {
        field["isvalid"] = true;
      } else {
        field[
          "isvalid"
        ] = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/.test(text);
      }
    } else if (type === "password") {
      field[
        "isvalid"
      ] = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(text);
    } else if (type === "contact") {
      field["isvalid"] = /^\+\d{1,3}-\d{9,10}$/.test(text);
    }
  };

  const handleChange = (idx, text, type, field) => {
    const tempData = [...data];

    tempData[idx] = text;
    setData(tempData);
    isStart(start + 1);
    isSignUp && checkValidation(type, field, text);
  };

  const fieldArr = fields.map((field, idx) => {
    return (
      <div key={idx}>
        <label htmlFor={field["name"]}>{field["name"]}</label>
        <input
          type={field["type"]}
          id={field["name"]}
          name={field["name"]}
          value={data[idx]}
          required
          onChange={(e) =>
            handleChange(idx, e.target.value, field["name"], field)
          }
        />
        {field["isvalid"] === false && <span>wrong</span>}
      </div>
    );
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {fieldArr}
      <button>sumbit</button>
    </form>
  );
};

export default Form;
