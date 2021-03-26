// generic form component dewpends upon field data
import "./form.css";
const Form = ({ handleSubmit, isSignUp, setFormData, formData }) => {
  const checkValidation = (type, text, field) => {
    if (text.length === 0 && type !== "DOB") {
      field[type]["error"] = "please enter the data";
      return;
    }
    if (type === "First Name") {
      if ((!/^[A-Za-z]+$/.test(text) && text.length > 0) || text.length <= 2) {
        field[type]["error"] =
          "length should be greater than 2 and use only alphabets";
      } else {
        field[type]["error"] = "";
      }
    } else if (type === "Last Name") {
      if ((!/^[A-Za-z]+$/.test(text) && text.length > 0) || text.length <= 2) {
        field[type]["error"] =
          "length should be greater than 2 and use only alphabets";
      } else {
        field[type]["error"] = "";
      }
    } else if (type === "Email") {
      if (!/^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/.test(text)) {
        field[type]["error"] = "Please enter a valid email account ";
      } else {
        field[type]["error"] = "";
      }
    } else if (type === "Password") {
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
    else if (type === "Contact") {
      if (!/^[6-9]\d{9}$/.test(text)) {
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
      if (year2 - year1 < 18 || year2 - year1 > 50) {
        result = false;
      }
      if (result === false) {
        alert("user must be between 50 and 18 years old ");
        return;
      }
    }
    const tempData = JSON.parse(JSON.stringify(formData));
    tempData[type]["value"] = text;

    // validate onChange of input value
    isSignUp && checkValidation(type, text, tempData, isSignUp);
    setFormData(tempData);
  };

  // to show the view of all inputs and labels
  const fieldArr = Object.keys(formData).map((field, idx) => {
    return (
      <>
        <div className="formRow" key={idx}>
          {/* getting name and value from fieldData depend upon form type */}
          <div className="labelInput">
            <label htmlFor={field}>{[field]}</label>
            <input
              autoComplete="off"
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
          </div>

          {formData[field]["error"] ? (
            <div className="error">
              <span>{formData[field]["error"]}</span>
            </div>
          ) : (
            <div style={{ flexBasis: "40%" }}>
              <span></span>
            </div>
          )}

          {/* to toggle the error depend upon the validation  */}
        </div>
        {idx === Object.keys(formData).length - 1 && (
          <div style={{}}>
            <button>submit</button>
          </div>
        )}
      </>
    );
  });

  // form view
  return (
    <form
      className="formWrap"
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
