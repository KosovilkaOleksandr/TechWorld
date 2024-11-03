import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Forminp from "../components_elem/Forminp";
import styles from "C:/ttt/newappt/src/components/css/form_in.module.css";
import "@testing-library/jest-dom/extend-expect";

describe("Forminp Component", () => {
  let mockSetState;

  beforeEach(() => {
    mockSetState = jest.fn();
    render(
      <Forminp
        placeholder="Enter text"
        type="text"
        value=""
        setState={mockSetState}
      />
    );
  });

  test("should render the input field with correct placeholder", () => {
    const inputElement = screen.getByPlaceholderText(/enter text/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should call setState on input change", () => {
    const inputElement = screen.getByPlaceholderText(/enter text/i);
    fireEvent.change(inputElement, { target: { value: "New value" } });
    expect(mockSetState).toHaveBeenCalledWith("New value");
  });

  test("should have correct input type", () => {
    const inputElement = screen.getByPlaceholderText(/enter text/i);
    expect(inputElement).toHaveAttribute("type", "text");
  });

  test("should have correct class name", () => {
    const inputElement = screen.getByPlaceholderText(/enter text/i);
    expect(inputElement).toHaveClass(styles.textboxinput);
  });
});
