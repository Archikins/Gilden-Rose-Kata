var { Shop, Item } = require('../src/gilded_rose.js');
describe("Gilded Rose", function () {

  const item = [new Item("Aged Brie", 2, 0)];


  it("should foo", function () {
    const gildedRose = new Shop(item);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Aged Brie");
  });

  it("should foo", function () {
    const gildedRose = new Shop(item);
    let items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });
});
