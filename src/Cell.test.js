import { render } from "@testing-library/react";
import Cell from "./Cell"

// snapshot test of cell
test("takes snapshot of Cell and matches it", () => {
    const { asFragment } = render(<Cell />)
    expect(asFragment()).toMatchSnapshot()
})