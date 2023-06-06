import React from "react";

const cardBtnSec = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "2rem",
};

function BottlesAndLunchboxesprop({ totalItems }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {totalItems.map((itemDetails) => {
        return (
          <div
            className="card commonCard"
            style={{
              width: "200px",
              border: "2px solid #000",
              padding: "1rem",
            }}
          >
            <img style={{ width: "100%" }} src={itemDetails.image} alt="" />
            
            <h4>{itemDetails.ItemName}</h4>
           
            <p>{itemDetails.Weight}</p>
            <div className="cardBtnSec d-flex" style={cardBtnSec}>
                <del>{itemDetails.DelName}</del>
              <p>
                <b>{itemDetails.Price}</b>
              </p>
              <button className="btn-product">Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BottlesAndLunchboxesprop;