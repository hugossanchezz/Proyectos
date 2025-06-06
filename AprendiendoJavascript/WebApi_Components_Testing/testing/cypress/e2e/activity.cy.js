describe("main", () => {
    it("User generates a new activity", () => {
        cy.visit("http://localhost:8080");
        cy.get(".request").contains("Generate new one").click();
        cy.get(".activity div").should("exists");
    })
});