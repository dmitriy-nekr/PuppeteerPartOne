let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    await page.goto("https://github.com/team");
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 20000);

  test("The first link attribute", async () => {
    await page.goto("https://github.com/team");
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 10000);

  test("The page contains Sign in button", async () => {
    await page.goto("https://github.com/team");
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  });
});


describe("Github page tests 1", () => {
  test("The marketplace header content'", async () => {
    await page.goto("https://github.com/marketplace");
    const actual = await page.$eval("h1", link => link.textContent);
    expect(actual).toEqual('Extend GitHub');
  });

  test("The topics header", async () => {
    await page.goto("https://github.com/topics");
    const actual = await page.$eval("h1", link => link.textContent);
    expect(actual).toEqual('Topics');
    
  });

  test("The explore header", async () => {
    await page.goto("https://github.com/explore/email");
    const actual = await page.$eval("h1", link => link.textContent);
    expect(actual).toEqual('Explore email newsletter');
  });
});
