import { mount } from 'cypress/react';
import Quiz from '../../src/components/Quiz';

describe('Quiz Component', () => {
  it('renders correctly', () => {
    mount(<Quiz />);
    cy.get('h1').contains('Quiz');
    cy.get('button').contains('Start Quiz');
  });

  it('functions as expected', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('.question').should('exist');
    cy.get('button').contains('Submit Answer').click();
    cy.get('.score').should('exist');
  });
});