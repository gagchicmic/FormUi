import { useState } from "react";

// generic form component dewpends upon field data
const Form = ({ fields, data, setData, handleSubmit, isSignUp }) => {
  const [start, isStart] = useState(0);

  // CHECK THE VALIDATION
  // here field[isvalid] is used to check the validation onChange
  // field[isvalid] == true means input is valid otherwise invalid input type
  const checkValidation = (type, field, text) => {
    // NAME VALIDATIONS
    if (type === "first name") {
      if (text.length < 6 || /\d/.test(text)) {
        field["isvalid"] = false;
        field["error"] =
          "length should be greater than 6 and use only alphabets";
      } else {
        field["isvalid"] = true;
      }
    } else if (type == "last name") {
      text.length < 6 ? (field["isvalid"] = false) : (field["isvalid"] = true);
    }
    // EMAIL AND PASSWORD VALIDATION
    else if (type === "email") {
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
    }
    // CONTACT VALIDATION
    else if (type === "contact") {
      field["isvalid"] = /^\+(?:[0-9] ?){6,14}[0-9]$/.test(text);
    }
  };

  // handle the Onchange event
  const handleChange = (idx, text, type, field) => {
    // update the value onChange
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
          style={{ outline: "none" }}
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
            <hr
              style={{
                color: "red",
                backgroundColor: "red",
                height: 2,
                margin: "0",
                marginTop: "4px",
              }}
            />
            <span>{field["error"]}</span>
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
