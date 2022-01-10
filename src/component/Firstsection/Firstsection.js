import React from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export default function Firstsection() {
  const data = [
    {
      label: "very hot",
    },
    {
      heading: "category",
      label: "meat",
    },
    {
      heading: "Origin",
      label: "usa",
    },
    {
      heading: "preparation",
      label: "medium-rare",
    },
    {
      heading: "Esitmated Cost",
      label: "$10",
    },
    {
      heading: "Rate",
      label: "9/10",
    },
    {
      heading: "Addons",
      label: "Pickles",
    },
    {
      heading: "Alergic",
      label: "sesame",
    },
  ];
  return (
    <div
      className="Firstsection"
      style={{ paddingLeft: "100px", backgroundColor: "#f1eaf2" }}
    >
      <Breadcrumbs aria-label="breadcrumb" separator="›">
        {[
          <Link
            key="1"
            color="inherit"
            href="/"
            onClick={() => {}}
            underline="hover"
          >
            Company overview dashboard
          </Link>,
          <Link
            key="2"
            color="inherit"
            href="#"
            onClick={() => {}}
            underline="hover"
          >
            API keys Marketplace
          </Link>,
        ]}
      </Breadcrumbs>
      <h1>API Platforms Marketplace</h1>

      <div style={{ display: "flex", marginTop: "30px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "700px",
          }}
        >
          <TextField
            fullWidth
            placeholder="Search Platform..."
            id="fullWidth"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            style={{
              backgroundColor: "white",
            }}
          />
          <Button
            style={{
              backgroundColor: "#59acff",
              borderRadius: "5px",
              color: "white",
              width: "100px",
              height: "40px",
              margin: 0,
              marginLeft: "20px",
              marginTop: "5px",
            }}
            variant="contained"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
