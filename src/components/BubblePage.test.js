import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import fetchColorService from "../services/fetchColorService";
jest.mock("../services/fetchColorService");

test("Renders without errors", ()=> {
    fetchColorService.mockResolvedValue(colorList);
    render(<BubblePage />)
});


const colorList = [
    {
        color: "aliceblue",
        code: {
            hex: "#f0f8ff",
        },
        id: 1,
    },
    {
        color: "limegreen",
        code: {
            hex: "#99ddbc",
        },
        id: 2,
    },
    {
        color: "aqua",
        code: {
            hex: "#00ffff",
        },
        id: 3,
    },
];

test("Renders appropriate number of colors passed in through mock", async () => {
    fetchColorService.mockResolvedValue(colorList);
    render(<BubblePage />);
    const colors = await screen.findAllByTestId("color");
    expect(colors.length).toBe(colorList.length);
});
