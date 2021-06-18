import React from 'react';
import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

const colors = [
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
]
test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]}/>)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={colors} />)

});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", async () => {
    const {rerender} = render(<ColorList colors={colors} editing={true} />)
    let editForm = screen.queryByTestId('editMenu')
    expect(editForm).toBeDefined()
    
    rerender(<ColorList colors={colors} editing={false} />)
    editForm = screen.queryByTestId('editMenu')
    expect(editForm).toBeNull();
}); 
