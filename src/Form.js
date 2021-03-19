// generic form component dewpends upon field data
const Form = ({
  data,
  setData,
  handleSubmit,
  isSignUp,
  userData,
  setFormData,
  formData,
}) => {
  // CHECK THE VALIDATION
  // here field[isvalid] is used to check the validation onChange
  // field[isvalid] == true means input is valid otherwise invalid input type
  const checkValidation = (type, text) => {
    const field = JSON.parse(JSON.stringify(formData));
    if (type === "First Name") {
      if (!/^[A-Za-z]+$/.test(text)) {
        field["isvalid"] = false;
        field["error"] =
          "length should be greater than 6 and use only alphabets";
      } else {
        field["isvalid"] = true;
        field["error"] = "no";
      }
    } else if (type === "last name") {
      if (!/^[A-Za-z]+$/.test(text)) {
        field["isvalid"] = false;
        field["error"] =
          "length should be greater than 6 and use only alphabets";
      } else {
        field["isvalid"] = true;
        field["error"] = "no";
      }
    } else if (type === "email") {
      if (text.length === 0) {
        field["isvalid"] = true;
        field["error"] = "no";
      } else {
        if (
          !/^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/.test(text)
        ) {
          field["isvalid"] = false;
          field["error"] = "Pleasr enter a valid email account ";
        } else {
          field["isvalid"] = true;
          field["error"] = "no";
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
        field["error"] = "no";
      }
    }
    // CONTACT VALIDATION
    else if (type === "contact") {
      if (text.length === 12 && text[0] + text[1] === "91") {
        field["isvalid"] = true;
        field["error"] = "no";
      } else if (text.length !== 10) {
        field["isvalid"] = false;
        field["error"] = "enter valid mobile no";
      } else {
        field["isvalid"] = true;
        field["error"] = "no";
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
    // if (type === "DOB") {
    //   let result = true;
    //   const today = new Date();
    //   const year1 = text.split("-")[0];
    //   const year2 = today.toLocaleDateString().split("/")[2];
    //   if (year2 - year1 < 18) {
    //     result = false;
    //   }
    //   if (result === false) {
    //     alert("user must be 18 years old ");
    //     return;
    //   }
    // }
    const tempData = JSON.parse(JSON.stringify(formData));
    tempData[type] = text;
    setFormData(tempData);

    // validate onChange of input value
    isSignUp && checkValidation(type, text);
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
          <label
            style={{ textTransform: "capitalize" }}
            htmlFor={field["name"]}
          >
            {field}
          </label>
          <div style={{ textAlign: "left" }}>
            <input
              style={{ marginLeft: "30px ", width: "40%" }}
              type={field["type"]}
              id={field["name"]}
              name={field["name"]}
              value={formData[field["value"]]}
              required
              placeholder={field["name"]}
              onChange={(e) =>
                // to take care of updating and validating onChange
                handleChange(e.target.value, field)
              }
            />
            {/* to toggle the error depend upon the validation  */}
            {field["isvalid"] === false && (
              <span
                style={{
                  fontSize: "14px",
                  color: "red",
                  marginTop: "2%",
                  marginLeft: "2%",
                }}
              >
                {field["error"]}
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
    </form>
  );
};

export default Form;
