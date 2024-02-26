const productCommands = {
    
    verifyresult(){
      return this
      .getText('@errorResult')
      .pause(1000);
      
    },
    verifyresult1(){
      return this
      .getText('@result');
      
    },
    clickonSearchproduct(){
        return this.waitForElementVisible('@firstProduct')
        .click('@firstProduct');
    }
  

  };
    
  module.exports = {
    url: 'https://www.amazon.in/',
  
    commands: [
        productCommands
    ],
  
    elements: {
      result:{
        selector: '.a-color-state.a-text-bold'
      },
      errorResult:{
        selector:'div[id="search"] div[class="a-row"] span:nth-child(1)'
      },
      firstProduct:{
        selector:'//div[@class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1"]//h2[@class="a-size-mini a-spacing-none a-color-base s-line-clamp-2"]//span[1]',
        locateStrategy: 'xpath' 
     }

      
    }
  };
