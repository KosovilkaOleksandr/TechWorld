import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button1 from "../components_elem/Button1";
import styles from "../components/css/button.module.css";

describe("Button1 Component", () => {
  const mockFunction = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the button with correct text", () => {
    render(<Button1 functions={mockFunction}>Click Me</Button1>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call the function when the button is clicked", () => {
    render(<Button1 functions={mockFunction}>Click Me</Button1>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(mockFunction).toHaveBeenCalled();
  });
});
