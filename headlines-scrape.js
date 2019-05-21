const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:false,slowMo:70});
    const page = await browser.newPage();

    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('https://news.google.com/?hl=en-US&gl=US&ceid=US:en',{waitUntil: 'networkidle2'});

    await page.waitForSelector('article h3 a');
    const titles = await page.evaluate(()=>
        Array.from(document.querySelectorAll('article h3'))
            .map(article => ({
                title:article.querySelector('a').innerText,
                link:article.querySelector('a').href
            }))
    )
    console.log(titles)

    await browser.close();
})();
