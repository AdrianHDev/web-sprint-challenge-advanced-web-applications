import React from 'react';
import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';

test("Renders without errors", ()=> {
    render(<BubblePage />)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    render(<BubblePage /> )
    const colors = await screen.queryAllByTestId('color');
    expect(colors.length).toBe(11)
});