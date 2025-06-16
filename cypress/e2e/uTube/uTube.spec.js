/// <reference types="Cypress"/>
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import page from "../poM/page";
   Given('Access to Youtube',() => {
    page.open()
    cy.wait(5000);
    cy.url().should('contain', 'youtube.com');
   });
   When('Enter text and Search',() => {
    page.getSearchbtn.click();
    cy.wait(5000);
    page.getSearchbtn.type('Rahul Shetty Tutorials')
        page.getTypetext.click();
        cy.wait(5000);
     // page.getValidatetext.contains('attr','Rahul Shetty Academy') ;
      //cy.wait(5000);
   //cy.url().should('contain', '/results?search_query=rahul+shetty+tutorials');
    });
   Then('Return Back to Main page',() => {
    cy.go('back');
    cy.url().should('contain', 'youtube.com');
        });
 
    