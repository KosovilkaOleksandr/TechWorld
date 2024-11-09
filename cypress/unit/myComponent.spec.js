import React from "react";
import { mount } from "cypress/react";
import MyPage from "../../src/components/mpage";

describe("MyPage Component", () => {
  it("renders correctly", () => {
    mount(<MyPage />);
    cy.get("input[placeholder='Email']").should("be.visible");
    cy.get("input[placeholder='Name']").should("be.visible");
    cy.get("input[placeholder='Surname']").should("be.visible");
    cy.get("input[placeholder='Password']").should("be.visible");
    cy.get("button").contains("Sign Up").should("be.visible");
  });

  it("allows input to be typed", () => {
    mount(<MyPage />);
    cy.get("input[placeholder='Email']")
      .type("test@example.com")
      .should("have.value", "test@example.com");
    cy.get("input[placeholder='Name']")
      .type("Test")
      .should("have.value", "Test");
    cy.get("input[placeholder='Surname']")
      .type("User")
      .should("have.value", "User");
    cy.get("input[placeholder='Password']")
      .type("password")
      .should("have.value", "password");
  });
});
