import React, { useState } from "react";

import { HRIS, management, delivery, values, blanks } from "./mockDate";
import Button from "@mui/material/Button";
export default function SecondSection() {
  const [selected, setSelected] = useState([]);

  const plus = () => {
    return <span style={{ fontSize: "20px" }}> &#x229E; </span>;
  };

  const greenTick = () => {
    return (
      <i
        className="fa fa-check-circle"
        style={{
          fontSize: "20px",
          color: "green",
          backgroundColor: "black",
          borderRadius: "100%",
          border: "1px solid black",
        }}
      ></i>
    );
  };

  const renderCard = (item) => {
    return item.map((item) => {
      return (
        <div
          key={item.id}
          style={{
            marginRight: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            marginBottom: "20px",
            marginLeft: "20px",
          }}
        >
          <h3> {item.heading} </h3>
          <div style={{ display: "flex" }}>
            <div
              style={{
                marginRight: "10px",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => {
                setSelected([...selected, item.id]);
              }}
            >
              {selected.find((vendor) => vendor === item.id)
                ? greenTick()
                : plus()}
              {selected.findIndex((vendor) => vendor === item.id) !== -1 &&
                selected.findIndex((vendor) => vendor === item.id) + 1}
            </div>
            <div
              style={{
                width: "150px",
                backgroundColor: "#f1f0f0",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                borderRadius: "15px",
                boxShadow: "0px 5px #888888",
              }}
            >
              <img
                alt="logo"
                loading="lazy"
                src={item.img}
                style={{
                  height: "60px",
                  borderRadius: "100%",
                  marginTop: "20px",
                }}
              />
              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                {item.label}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div
      style={{
        paddingLeft: "100px",
        marginTop: "20px",
        display: "block",
        width: "fit-content",
      }}
    >
      <div
        style={{
          marginTop: "10px",
          backgroundColor: "white",
          display: "flex",
          borderRadius: "10px",
        }}
      >
        {renderCard(HRIS)}
      </div>
      <div
        style={{
          marginTop: "10px",
          backgroundColor: "white",
          display: "flex",
          borderRadius: "10px",
        }}
      >
        {" "}
        {renderCard(management)}
      </div>
      <div
        style={{
          marginTop: "10px",
          backgroundColor: "white",
          display: "flex",
          borderRadius: "10px",
        }}
      >
        {" "}
        {renderCard(delivery)}
      </div>
      <div
        style={{
          marginTop: "10px",
          backgroundColor: "white",
          display: "flex",
          borderRadius: "10px",
        }}
      >
        {" "}
        {renderCard(values)}
      </div>
      <div
        style={{
          marginTop: "10px",
          backgroundColor: "white",
          display: "flex",
          borderRadius: "10px",
        }}
      >
        {" "}
        {renderCard(blanks)}
      </div>

      <Button
        style={{
          backgroundColor: "#59acff",
          borderRadius: "5px",
          color: "white",
          width: "200px",
          height: "40px",
          margin: 0,
          marginTop: "25px",
        }}
        variant="contained"
      >
        Upload new CSV
      </Button>
    </div>
  );
}
