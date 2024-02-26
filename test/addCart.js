const { assert } = require("nightwatch");

const homePage = browser.page.amazon.Homepage();
const ProductPage= browser.page.amazon.Productpage();
describe('Add Cart', function() {
   
  
    before( () => homePage.navigate()
                  .searchproduct("Poco x2")
                  .submit()
                             
    );
  
    after((browser) => browser.quit());
  
    it('Verify that ', async(browser)=> {
        ProductPage.clickonSearchproduct();
        const originalWindow = await browser.window.getHandle();
        const allWindows = await browser.window.getAllHandles();


        for (const windowHandle of allWindows) {
            if (windowHandle !== originalWindow) {
              await browser.window.switchTo(windowHandle);
              break;
            }

          }

        browser.assert.verifyTitle("Boat headphones");

    });

  });