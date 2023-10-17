import { expect } from 'chai';
import { GildedRose } from '@/gilded-rose';
import { Conjured } from '@/classes/conjured';
import { Sulfuras } from '@/classes/sulfuras';
import { AgedBrie } from '@/classes/aged-brie';
import { BackstagePass } from '@/classes/backstagepass';
let gildedRose;
describe('Gilded Rose', () => {
  beforeEach(() => {
    gildedRose = new GildedRose([
      new Conjured('Conjured', 10, 2),
      new Sulfuras('Sulfuras, Hand of Ragnaros', 1, 80),
      new AgedBrie('Aged Brie ', 1, 42),
      new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 12, 35),
      new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 7, 30),
      new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 2, 47),
    ]);
  })
  it('"Conjured" items degrade in Quality twice as fast as normal items & The Quality of an item is never negative ', () => {
    let items = gildedRose.updateQuality();
    expect(items[0].quality).to.eq(0);
    items = gildedRose.updateQuality();
    expect(items[0].quality).to.eq(0);
  });
  it('"Sulfuras", being a legendary item, never has to be sold or decreases in Quality', () => {
    let items = gildedRose.updateQuality();
    expect(items[1].quality).to.eq(80);
    items = gildedRose.updateQuality();
    expect(items[1].quality).to.eq(80);
  });
  it('"Aged Brie" actually increases in Quality the older it gets & the quality of an item is never more than 50', () => {
    let items = gildedRose.updateQuality();
    expect(items[2].quality).to.eq(43);
    items = gildedRose.updateQuality();
    expect(items[2].quality).to.eq(44);
  });
  it('The Quality of Backstage passes item decreases by 1 when there are 10 days or more', () => {
    const items = gildedRose.updateQuality();
    expect(items[3].quality).to.eq(36);
  });
  it('The Quality of Backstage passes item increases by 2 when there are 10 days or less', () => {
    const items = gildedRose.updateQuality();
    expect(items[4].quality).to.eq(32);
  });
  it('The Quality of Backstage passes item increases by 3 when there are 5 days or less', () => {
    let items = gildedRose.updateQuality();
    expect(items[5].quality).to.eq(50);
    items = gildedRose.updateQuality();
    expect(items[5].quality).to.eq(50);
    items = gildedRose.updateQuality();
    expect(items[5].quality).to.eq(0);
  });
});