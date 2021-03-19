import { useState } from "react";

// generic form component dewpends upon field data
const Form = ({ fields, data, setData, handleSubmit, isSignUp, userData }) => {
  // CHECK THE VALIDATION
  // here field[isvalid] is used to check the validation onChange
  // field[isvalid] == true means input is valid otherwise invalid input type
  const checkValidation = (type, field, text) => {
    if (type === "first name") {
      if (!/^[A-Za-z]+$/.test(text)) {
        field["isvalid"] = false;
        field["error"] =
          "length should be greater than 6 and use only alphabets";
      } else {
        field["isvalid"] = true;
      }
    } else if (type === "last name") {
      if (!/^[A-Za-z]+$/.test(text)) {
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
      if (text.length === 12 && text[0] + text[1] === "91") {
        field["isvalid"] = true;
      } else if (text.length !== 10) {
        field["isvalid"] = false;
        field["error"] = "enter valid mobile no";
      } else {
        field["isvalid"] = true;
      }
    }
  };

  // handle the Onchange event
  const handleChange = (idx, text, type, field) => {
    text = text.trim();
    // update the value onChange
    if (type === "contact" && !/^[0-9]*$/.test(text)) {
      return;
    }
    // prevent selecting future dates
    if (type === "DOB") {
      let result = true;
      const today = new Date();
      const [year1, month1, day1] = text.split("-");
      const [day2, month2, year2] = today.toLocaleDateString().split("/");
      if (year1 > year2) {
        result = false;
      } else if (year1 === year2 && month1 > month2) {
        result = false;
      } else if (year1 === year2 && month1 === month2 && day1 > day2) {
        result = false;
      }
      if (result == false) {
        alert("select valid date");
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
      <div style={{ flexBasis: "100%", marginTop: "20px" }} key={idx}>
        {/* getting name and value from fieldData depend upon form type */}
        <div
          style={{
            flexBasis: "100%",
            display: "grid",
            gridTemplateColumns: "2fr 3fr",
            textAlign: "right",
          }}
        >
          <label
            style={{ textTransform: "capitalize" }}
            htmlFor={field["name"]}
          >
            {field["name"]}
          </label>
          <input
            style={{ marginLeft: "30px ", width: "40%" }}
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
        </div>

        {/* to toggle the error depend upon the validation  */}
        {field["isvalid"] === false && (
          <div
            style={{
              flexBasis: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ marginLeft: "10%" }}>
              <span style={{ fontSize: "14px", color: "red", marginTop: "2%" }}>
                {field["error"]}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  });

  // form view
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        // paddingRight: "18%",
      }}
      onSubmit={(e) => {
        // prevent refresh
        e.preventDefault();
        handleSubmit(fields);
      }}
    >
      {fieldArr}
      <div>
        <button style={{ marginTop: "20%", width: "150%" }}>submit</button>
      </div>
    </form>
  );
};

export default Form;
