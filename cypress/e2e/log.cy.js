describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("Displays login page and logs in the user", () => {
    cy.contains("h1", "Login");
    cy.get('input[placeholder="Email"]').type("valik@gmail.com");
    cy.get('input[placeholder="Password"]').type("123456");
    cy.contains("button", "Login").click();
    cy.url().should("include", "/main_page");
  });

  it("Displays error on invalid login", () => {
    cy.get('input[placeholder="Email"]').type("invalid@example.com");
    cy.get('input[placeholder="Password"]').type("wrongpassword");
    cy.contains("button", "Login").click();
    cy.contains("Invalid email or password").should("be.visible");
  });
});
