const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('http://u-knight.ninja');
  await page.click('#root > div > div:nth-child(1) > header > div > div:nth-child(5) > button')
  
  await page.screenshot({path: 'u-knight.png'});

  await browser.close();
})();

