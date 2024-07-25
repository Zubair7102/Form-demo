// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  // function changeHandler(event) {
  //   const { name, value, checked, type } = event.target;
  //   // This line uses a technique called destructuring assignment to extract specific properties from the event.target object.
  //   // event.target represents the HTML element that triggered the event (e.g., an input field, checkbox, etc.).

  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  //   // prev represents the previous state of the form data.
  //   // { ...prev } creates a new object that contains all the properties of the previous state.
  //   // [name]: value adds or updates a property in the new object, where the property name is determined by the name variable and the property value is the value variable.
  //   console.log(formData);
  // }

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally Prinitng the FormData", formData);
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Your First Name"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Your Last Name"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />
        <br />

        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="abc@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />
        <br />

        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline mt-1"
        >
          <option>India</option>
          <option>China</option>
          <option>United States</option>
          <option>Russia</option>
          <option>Germany</option>
        </select>
        <br />

        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />
        <br />

        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Mumbai"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />
        <br />

        <label htmlFor="state">State</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Uttar Pradesh"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        />
        <br />

        <label htmlFor="postalCode">Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="226022"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <br />

        <fieldset>
          <legend>By Email</legend>
          <div className="flex flex-row">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex flex-row">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job</p>
            </div>
          </div>

          <div className="flex flex-row">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer</p>
            </div>
          </div>
        </fieldset>

        <br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your registered mobile number</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>
          <br />

          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as email</label>
          <br />

          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notification"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notification</label>
        </fieldset>

        <button className="bg-blue-500 text-white rounded font-bold py-2 px-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
