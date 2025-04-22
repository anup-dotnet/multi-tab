const Interests = ({ data, setData, errors }) => {
  const { interests } = data;

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <input
          type="checkBox"
          name="coding"
          checked={interests.includes("coding")}
          onChange={handleChange}
        />
        Coding
        <input
          type="checkBox"
          name="music"
          checked={interests.includes("music")}
          onChange={handleChange}
        />
        Music
        <input
          type="checkBox"
          name="javascript"
          checked={interests.includes("javascript")}
          onChange={handleChange}
        />
        Javascript
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interests;
