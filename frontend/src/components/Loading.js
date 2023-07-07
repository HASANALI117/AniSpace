import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        fontSize: "3rem",
        marginTop: "10rem",
      }}
    >
      <div>Loading...</div>
      <div>
        <i
          class="fa-solid fa-spinner fa-spin"
          style={{ color: "#ffffff;" }}
        ></i>
      </div>
    </div>
  );
}
