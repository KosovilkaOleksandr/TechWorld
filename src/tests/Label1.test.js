import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Label1 from "../components_elem/Label1";

describe("Label1 Component", () => {
  test("should render the label with correct text", () => {
    render(<Label1 text="My Label" />);
    const labelElement = screen.getByText(/my label/i);
    expect(labelElement).toBeInTheDocument();
  });

  test("should have the correct class name", () => {
    render(<Label1 text="My Label" />);
    const labelElement = screen.getByText(/my label/i);
    expect(labelElement).toHaveClass("textboxlabel");
  });
});
