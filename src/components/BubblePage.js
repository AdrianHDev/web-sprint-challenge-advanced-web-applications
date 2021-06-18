import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { editColorService, deleteColorService } from '../services/colorServices';
import fetchColorService from "../services/fetchColorService";

const BubblePage = () => {
  console.log("Bubble!");
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setColors(await fetchColorService());
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
      (async () => {
        try {
          const data = await editColorService(editColor)
          setColors(colors.map((color) => {
            if (color.id === data.id ) {
              return data
            } else {
              return color
            }
          })) 
        } catch (err) {
          console.error(err);
        }
      })()
  };

  const deleteColor = (colorToDelete) => {
    (async () => {
      try {
        const data = await deleteColorService(colorToDelete.id)
        setColors(colors.filter((color) => {
          console.log(color.id);
          return color.id !== data
        }))
      } catch (error) {
        console.error(error)
      }
    })()
  };

  return (
    <div className="container">
      <ColorList
        colors={colors}
        editing={editing}
        toggleEdit={toggleEdit}
        saveEdit={saveEdit}
        deleteColor={deleteColor}
      />
      <Bubbles colors={colors} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
