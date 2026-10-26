const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8000');
    await page.waitForSelector('#dynamic-shoe-container');
    const count = await page.evaluate(() => document.querySelectorAll('.buy').length);
    const html = await page.evaluate(() => document.getElementById('dynamic-shoe-container').innerHTML);
    console.log('Buy count:', count);
    if (count > 0) {
        console.log('First buy HTML:', html.substring(0, 200));
    }
    await browser.close();
})();
