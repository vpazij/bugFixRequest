
Feature('Suite 1');
Scenario('test 1', ({ I }) => {
 
  I.amOnPage('https://new.novaposhta.ua/');
  I.seeElement('.logo__img');
})
  .tag('@Regression')
  .tag('@Smoke');

Scenario('test 2', ({ I }) => {
    I.amOnPage('/');
    I.seeElement('#logo');
})
  .tag('@Regression')
  .tag('@Smoke');



Feature('Suite 2');
Scenario('test 3', ({ I }) => {
 
    I.amOnPage('https://new.novaposhta.ua/');
    I.seeElement('.logo__img');
  })
    .tag('@Regression')
    .tag('@Smoke');
  
  Scenario('test 4', ({ I }) => {
      I.amOnPage('/');
      I.seeElement('#logo');
  })
    .tag('@Regression')
    .tag('@Smoke');


Feature('Suite 3');
Scenario('test 5', ({ I }) => {
 
    I.amOnPage('https://new.novaposhta.ua/');
    I.seeElement('.logo__img');
  })
    .tag('@Regression')
    .tag('@Smoke');
  
  Scenario('test 6', ({ I }) => {
      I.amOnPage('/');
      I.seeElement('#logo');
  })
    .tag('@Regression')
    .tag('@Smoke');

