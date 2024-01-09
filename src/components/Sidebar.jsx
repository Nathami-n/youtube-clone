import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../assets/utilites";

const Sidebar = ({toogledCategory, setToogledCategory}) => {

  return (
    <Stack
      direction="row"
      sx={{
        height: { sx: "auto", md: "94%" },
        flexDirection: { md: "column" },
        overflowX: "auto",
        overflowY: "auto",
        mt: 1.3,
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            onClick={() => {setToogledCategory(category.name)}}
            key={category.name}
            style={{
              background: category.name == toogledCategory && "#fc1503",
            }}
          >
            <span
              style={{
                marginRight: "17px",
                color: "white",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                color: "#fff",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
