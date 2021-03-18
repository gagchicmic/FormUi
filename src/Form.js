import { useState } from "react";

// generic form component dewpends upon field data
const Form = ({ fields, data, setData, handleSubmit, isSignUp }) => {
  const [start, isStart] = useState(0);

  // CHECK THE VALIDATION
  // here field[isvalid] is used to check the validation onChange
  // field[isvalid] == true means input is valid otherwise invalid input type
  const checkValidation = (type, field, text) => {
    if (type == "first name") {
      if (text.length < 6 || !/^[A-Za-z]+$/.test(text)) {
        field["isvalid"] = false;
        field["error"] =
          "length should be greater than 6 and use only alphabets";
      } else {
        field["isvalid"] = true;
      }
    } else if (type == "last name") {
      if (text.length < 6 || !/^[A-Za-z]+$/.test(text)) {
        field["isvalid"] = false;
        field["error"] =
          "length should be greater than 6 and use only alphabets";
      } else {
        field["isvalid"] = true;
      }
    } else if (type === "email") {
      if (text.length == 0) {
        field["isvalid"] = true;
      } else {
        if (
          !/^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/.test(text)
        ) {
          field["isvalid"] = false;
          field["error"] = "enter valid email";
        } else {
          field["isvalid"] = true;
        }
      }
    } else if (type === "password") {
      if (
        !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(text)
      ) {
        field["isvalid"] = false;
        field["error"] = "password must contain 1 symbol,1 num and 6 length";
      } else {
        field["isvalid"] = true;
      }
    }
    // CONTACT VALIDATION
    else if (type === "contact") {
      if (text[0] !== "+") {
        text = "+" + text;
      }
      if (!/^[+]91(9|8|7)\d{9}$/.test(text)) {
        field["isvalid"] = false;
        field["error"] = "enter valid mobile no";
      } else {
        field["isvalid"] = true;
      }
    }
  };

  // handle the Onchange event
  const handleChange = (idx, text, type, field) => {
    // update the value onChange
    if (type === "contact" && !/^[0-9]*$/.test(text)) {
      return;
    }
    if (type === "DOB") {
      const today = new Date();
      const [year1, month1, day1] = text.split("-");
      const [day2, month2, year2] = today.toLocaleDateString().split("/");
      if (year1 > year2) {
        return;
      } else if (year1 == year2 && month1 > month2) {
        return;
      } else if (year1 == year2 && month1 == month2 && day1 > day2) {
        return;
      }
    }
    const tempData = [...data];
    tempData[idx] = text;
    setData(tempData);

    // validate onChange of input value
    isSignUp && checkValidation(type, field, text);
  };

  // to show the view of all inputs and labels
  const fieldArr = fields.map((field, idx) => {
    return (
      // wrapper containing label and input as childs
      <div style={{ marginTop: "8px" }} key={idx}>
        {/* getting name and value from fieldData depend upon form type */}
        {/* <label htmlFor={field["name"]}>{field["name"]}</label> */}
        <input
          style={{}}
          type={field["type"]}
          id={field["name"]}
          name={field["name"]}
          value={data[idx]}
          required
          placeholder={field["name"]}
          onChange={(e) =>
            // to take care of updating and validating onChange
            handleChange(idx, e.target.value, field["name"], field)
          }
        />
        {/* to toggle the error depend upon the validation  */}
        {field["isvalid"] === false && (
          <>
            <br />
            <span style={{ color: "red" }}>{field["error"]}</span>
          </>
        )}
      </div>
    );
  });

  // form view
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
      }}
      onSubmit={(e) => {
        // prevent refresh
        e.preventDefault();
        handleSubmit(fields);
      }}
    >
      {fieldArr}
      <button style={{ marginTop: "20px" }}>submit</button>
    </form>
  );
};

export default Form;
