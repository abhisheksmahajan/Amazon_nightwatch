

const homePage = browser.page.amazon.Homepage();
const ProductPage= browser.page.amazon.Productpage();
describe('Sreach Product', function() {
    //const homePage = browser.page.amazon.Homepage(); 
  
    before( () => homePage.navigate());
  
    after((browser) => browser.quit());
  
    it('Verify that User should able to search Product', function(browser) {
      homePage.searchproduct("Poco x2")
        //homePage.setValue('@searchBar', 'poco x2');
      .submit()
      .verifyresult1("Poco x2")
  
    
    });
    it('Verify that User not should able to search Product Wrong product', function(browser) {
        homePage.setValue('@searchBar', '999999999999')
        .submit()
        .verifyresult('does not contain 999999999999')
    });
  });

  
 
  