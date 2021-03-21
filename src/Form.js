// generic form component dewpends upon field data
const Form = ({ handleSubmit, isSignUp, setFormData, formData }) => {
  // CHECK THE VALIDATION
  // here field[isvalid] is used to check the validation onChange
  // field[isvalid] == true means input is valid otherwise invalid input type
  const checkValidation = (type, text, field) => {
    if (type === "First Name") {
      if (!/^[A-Za-z]+$/.test(text) && text.length > 0) {
        field[type]["error"] =
          "length should be greater than 6 and use only alphabets";
      } else {
        field[type]["error"] = "";
      }
    } else if (type === "Last Name" && text.length > 0) {
      if (!/^[A-Za-z]+$/.test(text)) {
        field[type]["error"] =
          "length should be greater than 6 and use only alphabets";
      } else {
        field[type]["error"] = "";
      }
    } else if (type === "Email" && text.length > 0) {
      if (text.length === 0) {
        field[type]["error"] = "";
      } else {
        if (
          !/^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/.test(text)
        ) {
          field[type]["error"] = "Pleasr enter a valid email account ";
        } else {
          field[type]["error"] = "";
        }
      }
    } else if (type === "Password" && text.length > 0) {
      if (
        !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(text)
      ) {
        field[type]["error"] =
          "password must contain 1 symbol,1 num and 6 length";
      } else {
        field[type]["error"] = "";
      }
    }
    // CONTACT VALIDATION
    else if (type === "Contact" && text.length > 0) {
      if (text.length === 12 && text[0] + text[1] === "91") {
        field[type]["error"] = "";
      } else if (text.length !== 10) {
        field[type]["error"] = "enter valid mobile no";
      } else {
        field[type]["error"] = "";
      }
    }
  };

  // handle the Onchange event
  const handleChange = (text, type) => {
    text = text.trim();

    // update the value onChange
    if (type === "Contact" && !/^[0-9]*$/.test(text)) {
      return;
    }
    // prevent selecting future dates
    if (type === "DOB") {
      let result = true;
      const today = new Date();
      const year1 = text.split("-")[0];
      const year2 = today.toLocaleDateString().split("/")[2];
      if (year2 - year1 < 18) {
        result = false;
      }
      if (result === false) {
        alert("user must be 18 years old ");
        return;
      }
    }
    const tempData = JSON.parse(JSON.stringify(formData));
    tempData[type]["value"] = text;
    console.log(tempData);

    // validate onChange of input value
    isSignUp && checkValidation(type, text, tempData);
    setFormData(tempData);
  };

  // to show the view of all inputs and labels
  const fieldArr = Object.keys(formData).map((field, idx) => {
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
          <label style={{ textTransform: "capitalize" }} htmlFor={field}>
            {[field]}
          </label>
          <div style={{ textAlign: "left" }}>
            <input
              style={{ marginLeft: "30px ", width: "40%" }}
              type={formData[field]["type"]}
              id={field}
              name={field}
              value={formData[field]["value"]}
              required
              placeholder={field}
              onChange={(e) => {
                // to take care of updating and validating onChange
                handleChange(e.target.value, field);
              }}
            />
            {/* to toggle the error depend upon the validation  */}
            {formData[field]["error"] && (
              <span
                style={{
                  fontSize: "14px",
                  color: "red",
                  marginTop: "2%",
                  marginLeft: "2%",
                }}
              >
                {formData[field]["error"]}
              </span>
            )}
          </div>
        </div>
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
        handleSubmit(formData);
      }}
    >
      {fieldArr}
      <button>Submit</button>
    </form>
  );
};

export default Form;
