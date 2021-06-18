import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";

const aliceBlue = {
  color: "aliceblue",
  code: {
    hex: "#f0f8ff",
  },
  id: 1,
};

test("Renders without errors with blank color passed into component", () => {
  render(<Color color={{color: "", code: { hex: "" }, id: 0}} />);
});

test("Renders the color passed into component", () => {
    render(<Color color={aliceBlue}/>)
    screen.getByText('aliceblue');
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    const deleteColor = jest.fn();
    const toggleEdit = jest.fn();

    render(<Color deleteColor={deleteColor} toggleEdit={toggleEdit} color={aliceBlue}/>)
    const deleteButton = screen.getByTestId('delete');
    userEvent.click(deleteButton)

    expect(deleteColor).toHaveBeenCalledWith(aliceBlue)
    expect(toggleEdit).toHaveBeenCalledWith(false)
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    render(<Color color={aliceBlue}/>)
});
