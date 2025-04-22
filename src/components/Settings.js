const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <div>
        <input
          type="radio"
          name="dark"
          checked={theme === "dark"}
          onChange={handleChange}
        />{" "}
        Dark
        <input
          type="radio"
          name="light"
          checked={theme === "light"}
          onChange={handleChange}
        />{" "}
        Light
      </div>
    </div>
  );
};

export default Settings;
