import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import { useState } from "react";

const TabForm = () => {
  const tabsConfig = [
    {
      name: "Profile",
      component: Profile,
      validate() {
        let err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate() {
        let err = {};
        if (data.interests.length < 1) {
          err.interests = "Select at least one interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate() {
        return true;
      },
    },
  ];

  const [data, setData] = useState({
    name: "Anup",
    age: "",
    email: "",
    interests: ["coding", "music"],
    theme: "dark",
  });

  const [errors, setErrors] = useState({});

  const [activeTab, setActivetab] = useState(0);

  const handlePrevClick = () => {
    if (tabsConfig[activeTab].validate()) {
      setActivetab(activeTab - 1);
    }
  };

  const handleNextClick = () => {
    if (tabsConfig[activeTab].validate()) {
      setActivetab(activeTab + 1);
    }
  };

  const ActiveTabComponent = tabsConfig[activeTab].component;
  return (
    <div>
      <div className="tabs-container">
        {tabsConfig.map((t, index) => (
          <div
            className={`tab-heading ${
              index === activeTab ? "selected-tab" : ""
            }`}
            key={index}
            onClick={() =>
              tabsConfig[activeTab].validate() && setActivetab(index)
            }
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && (
          <input type="button" value="Prev" onClick={handlePrevClick} />
        )}
        {activeTab < tabsConfig.length - 1 && (
          <input type="button" value="Next" onClick={handleNextClick} />
        )}
        {activeTab === tabsConfig.length - 1 && (
          <input
            type="button"
            value="Submit"
            onClick={() => console.log(data)}
          />
        )}
      </div>
    </div>
  );
};

export default TabForm;
