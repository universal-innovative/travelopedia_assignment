import React, { useState } from "react";
import "./index.css";
const LandingForm = () => {
  const [state, setState] = useState({
    loading: false,
    error: "",
    name: "",
    email: "",
    destination: "india",
    travellersCount: "",
    budgetPerPerson: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!state.name || state.name.trim() === "") {
      setState({ ...state, error: "Name is Required" });
      alert("Name is Required");
      return;
    }
    if (!state.email || state.email.trim() === "") {
      setState({ ...state, error: "Email is Required" });
      alert("Email is Required");
      return;
    }
    if (!state.destination || state.destination.trim() === "") {
      setState({ ...state, error: "Destination is Required" });
      alert("Destination is Required");
      return;
    }
    if (!state.travellersCount || state.travellersCount.trim() === "") {
      setState({ ...state, error: "Travellers count is Required" });
      alert("Travellers count is Required");
      return;
    }
    try {
      const data = {
        name: state.name,
        email: state.email,
        destination: state.destination,
        travellersCount: state.travellersCount,
        totalBudget: state.budgetPerPerson * state.travellersCount || 0,
      };
      const response = await fetch("http://localhost:8000/api/tourist/create", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.status === 200) {
        setState({
          ...state,
          loading: false,
          error: "",
          name: "",
          email: "",
          destination: "",
          travellersCount: "",
          totalBudget: null,
        });
        alert("hit page one to view data");
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      setState(...state, error);
      alert(error.message);
    }
  };
  const onDestinationChangeHandler = (e) => {
    setState({ ...state, destination: e.target.value });
    if (e.target.value === "india") {
      setState({ ...state, budgetPerPerson: 15000 });
    }
    if (e.target.value === "africa") {
      setState({ ...state, budgetPerPerson: 12000 });
    }
    if (e.target.value === "india") {
      setState({ ...state, budgetPerPerson: 10000 });
    }
  };
  return (
    <div>
      <div className="background-div">
        <div className="form-div">
          <h2>Add Restaurant</h2>
          <form onSubmit={handleSubmit}>
            <label for="name">Name:</label>
            <input
              name="name"
              type="text"
              value={state.name}
              onChange={(event) => {
                setState({ ...state, name: event.target.value });
              }}
            />
            <label for="email">Email:</label>
            <input
              name="email"
              type="email"
              value={state.email}
              onChange={(event) => {
                setState({ ...state, email: event.target.value });
              }}
            />
            <label for="destination">Where do you want to go?</label>
            <select
              id="destination"
              name="destination"
              onChange={onDestinationChangeHandler}
            >
              <option value="india">India</option>
              <option value="africa">Africa</option>
              <option value="europe">Europe</option>
            </select>
            <label for="email">No of travellers:</label>
            <input
              name="travellersCount"
              type="number"
              value={state.travellersCount}
              onChange={(event) => {
                setState({ ...state, travellersCount: event.target.value });
              }}
            />
            <p>
              Total budget: {state.budgetPerPerson * state.travellersCount || 0}
            </p>
            <button type="submit">
              {state.loading ? "loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingForm;
