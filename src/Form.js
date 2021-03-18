const Form = ({ fields, data, setData, handleSubmit }) => {
  const handleChange = (idx, text) => {
    const tempData = [...data];
    tempData[idx] = text;
    setData(tempData);
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
          onChange={(e) => handleChange(idx, e.target.value)}
        />
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
