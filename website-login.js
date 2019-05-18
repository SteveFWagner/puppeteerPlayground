const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

    

  await page.goto('http://u-knight.ninja',{waitUntil: 'networkidle2'});
  await page.click('#root > div > div:nth-child(1) > header > div > div:nth-child(5) > button')

//wait for and input user email
  await page.waitForSelector('body > div.jss74 > main > div > form > div:nth-child(1) > div > input')
  await page.focus('body > div.jss74 > main > div > form > div:nth-child(1) > div > input')
  await page.keyboard.type('steve.Testing@gmail.com')

//wait for and input user password
  await page.waitForSelector('body > div.jss74 > main > div > form > div:nth-child(2) > div > input')
  await page.focus('body > div.jss74 > main > div > form > div:nth-child(2) > div > input')
  await page.keyboard.type('!Testing12345')

//login
  await page.click('body > div.jss74 > main > div > form > button:nth-child(3)')

//navigation to account page
  await page.waitFor(2000)
  await page.waitForSelector('#root > div > div:nth-child(1) > header > div > div.jss112')
  await page.click('#root > div > div:nth-child(1) > header > div > div.jss112')

//wait for and assign biography to const
  await page.waitForSelector('#profilepaper > p:nth-child(4)')

    function waitForBio () {
        return document.querySelector('#profilepaper > p:nth-child(4)').innerHTML != ''
    }

  await page.waitFor(waitForBio)

  const biography = await page.evaluate(()=>{
    return document.querySelector('#profilepaper > p:nth-child(4)').innerHTML
  })
  console.log(biography)

  await page.waitFor(5000)

  await page.screenshot({path: 'u-knight.png'});
  await browser.close();
})();

