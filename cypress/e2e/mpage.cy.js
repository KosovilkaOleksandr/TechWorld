describe("MyPage", () => {
  it("reg", () => {
    cy.visit("http://localhost:3000/");

    cy.get("input[placeholder='Email']").type("test@example.com");
    cy.get("input[placeholder='Name']").type("Test");
    cy.get("input[placeholder='Surname']").type("User");
    cy.get("input[placeholder='Password']").type("password123");

    cy.contains("Sign Up").click();

    cy.url().should("include", "/main_page");
  });
});
