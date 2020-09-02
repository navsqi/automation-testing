const { subtract, add } = require('./utils');
const puppeteer = require('puppeteer');

test('should output result of subtraction', () => {
  const result = subtract(10, 2);
  expect(result).toBe(8);
});

test('should output result of addition', () => {
  add('2', '1', (err, res) => {
    expect(res).toBe(3);
  });
});

// End-to-End testing
test('should create an element with number of addition', async () => {
  // Mendefinisikan browser
  const browser = await puppeteer.launch({
    headless: false, // non-headless config
    slowMo: 80,
    args: ['--window-size=1920,1080'],
  });

  // Membuat page baru di browser
  const page = await browser.newPage();
  // Memanggil file apa html
  await page.goto('file:///C:/Users/Nauval/Desktop/testing/index.html');
  // Manipulasi DOM
  // untuk membuat skenario mengisi form
  await page.click('input#numberX');
  await page.type('input#numberX', '14');
  await page.click('input#numberY');
  await page.type('input#numberY', '3');
  await page.click('#buttonResult');

  // hasil akhir
  const resultText = await page.$eval('#result', (el) => el.textContent);

  expect(resultText).toBe('17');
}, 10000); // Maksimum waktu eksekusi
