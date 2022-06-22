class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(item => {
      let expDate = item.sellIn > 0;
      // and this function ONLY FOR NOT LEGENDARY ITEMS
      const notLegendary = (a) => {
        item.sellIn--
        if (a.quality < 0) (a.quality = 0); 
        if (a.quality > 50) (a.quality = 50);
        return a;
      };
      switch (item.name) {
        case 'Aged Brie':
          (expDate) ? item.quality++ : item.quality += 2;
          notLegendary(item);
          break;
        case 'Sulfuras, Hand of Ragnaros':
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          if (item.sellIn > 11) {
            item.quality++ 
          } else if (item.sellIn <= 11 && item.sellIn > 6) {
            item.quality += 2
          } else if (item.sellIn <= 6 && item.sellIn >= 1) { 
            item.quality += 3
          } else (item.quality = 0)
          notLegendary(item);
          break;
        case 'Conjured Mana Cake':
          (expDate) ? item.quality -= 2 : item.quality -= 4;
          notLegendary(item);
          break;
        // ADD NEW CASES HERE
        default:
          (expDate) ? item.quality-- : item.quality -= 2;
          notLegendary(item);
          break;
      }
    })
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}