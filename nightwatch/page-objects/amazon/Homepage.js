const searchCommands = {
    submit() {
      return this
      .waitForElementVisible('@submitButton', 1000)
      .click('@submitButton');
  
    },
    verifyresult(Result){
      return this
      .assert.containsText('@errorResult',Result)
      .pause(1000);
      
    },
    searchproduct(product){
      
      return this.waitForElementVisible('@searchBar', 1000)
      .setValue('@searchBar',product)
    },
    verifyresult1(Result){
      return this
      .assert.containsText('@result',Result)
      .pause(1000);
      
    }
  

  };
  
  module.exports = {
    url: 'https://www.amazon.in/',
  
  commands: [
     searchCommands
    ],
  
    elements: {
      searchBar: {
        selector: '#twotabsearchtextbox'
      },
  
      submitButton: {
        selector: '#nav-search-submit-button'
      },
      result:{
        selector: '.a-color-state.a-text-bold'
      },
      errorResult:{
        selector:'div[id="search"] div[class="a-row"] span:nth-child(1)'
      }
    }
  };
