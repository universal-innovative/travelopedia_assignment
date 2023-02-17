import React, { useState, useEffect } from "react";
import "./index.css";
const Tourists = () => {
  const [tourists, setTourists] = useState(null);

  const fetchData = async () => {
    let response = await fetch("http://localhost:8000/api/tourists/list");
    const data = await response.json();
    setTourists(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(tourists);
  return (
    <div className="task-2-section">
      {!tourists || tourists.length === 0 ? (
        <h1>Go to page 1 load data</h1>
      ) : (
        <div className="task-2-container">
          {tourists ? (
            tourists?.map((el, i) => {
              return (
                <div class="card">
                  <div class="desc">
                    <h1>{el.name}</h1>
                    <p>
                      <b>Email: </b>
                      {el.email}
                    </p>
                    <p>
                      <b>Destination: </b>
                      {el.destination}
                    </p>
                    <p>
                      <b>Number of Travellers: </b>
                      {el.travellersCount}
                    </p>
                    <p>
                      <b>Total Budget: </b>
                      {el.totalBudget}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Loading..</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Tourists;
