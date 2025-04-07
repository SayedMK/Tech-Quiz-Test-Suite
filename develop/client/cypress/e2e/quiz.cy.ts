describe('Quiz Component End-to-End Test', () => {
    it('should display the quiz and allow users to complete it', () => {
        cy.visit('/'); // Adjust the URL as necessary
        cy.get('.quiz-start-button').click(); // Adjust the selector as necessary
        
        for (let i = 0; i < 10; i++) {
            cy.get('.quiz-question').should('exist'); // Adjust the selector as necessary
            cy.get('.quiz-option').first().click(); // Adjust the selector as necessary
            cy.get('.quiz-next-button').click(); // Adjust the selector as necessary
        }
        
        cy.get('.quiz-submit-button').click(); // Adjust the selector as necessary
        cy.get('.final-score').should('exist'); // Adjust the selector as necessary
    });
});