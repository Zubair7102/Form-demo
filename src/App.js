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

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally Printing the FormData", formData);
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">User Registration</h1>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Your First Name"
            value={formData.firstName}
            onChange={changeHandler}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Your Last Name"
            value={formData.lastName}
            onChange={changeHandler}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@gmail.com"
            value={formData.email}
            onChange={changeHandler}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="mt-1 p-2 border rounded w-full"
          >
            <option>India</option>
            <option>China</option>
            <option>United States</option>
            <option>Russia</option>
            <option>Germany</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="streetAddress" className="block text-gray-700">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            placeholder="B-25C"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700">City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Mumbai"
            value={formData.city}
            onChange={changeHandler}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700">State</label>
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Uttar Pradesh"
            value={formData.state}
            onChange={changeHandler}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-gray-700">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="226022"
            value={formData.postalCode}
            onChange={changeHandler}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <fieldset className="mb-4">
          <legend className="text-lg font-medium text-gray-700">By Email</legend>

          <div className="flex items-center mt-2">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="comments" className="text-gray-700">Comments</label>
              <p className="text-gray-600 text-sm">Get notified when someone posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex items-center mt-2">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="candidates" className="text-gray-700">Candidates</label>
              <p className="text-gray-600 text-sm">Get notified when a candidate applies for a job</p>
            </div>
          </div>

          <div className="flex items-center mt-2">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="offers" className="text-gray-700">Offers</label>
              <p className="text-gray-600 text-sm">Get notified when a candidate accepts or rejects an offer</p>
            </div>
          </div>
        </fieldset>

        <fieldset className="mb-4">
          <legend className="text-lg font-medium text-gray-700">Push Notifications</legend>
          <p className="text-gray-600 text-sm">These are delivered via SMS to your registered mobile number</p>

          <div className="flex items-center mt-2">
            <input
              type="radio"
              id="pushEverything"
              name="pushNotifications"
              value="Everything"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushEverything" className="text-gray-700">Everything</label>
          </div>

          <div className="flex items-center mt-2">
            <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as email"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushEmail" className="text-gray-700">Same as email</label>
          </div>

          <div className="flex items-center mt-2">
            <input
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="No Push Notification"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushNothing" className="text-gray-700">No Push Notification</label>
          </div>
        </fieldset>

        <button className="bg-blue-500 text-white rounded py-2 px-4 w-full font-bold">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
