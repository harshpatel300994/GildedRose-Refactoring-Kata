import { Item } from "./item";


export class Conjured extends Item {
  updateQuality() {
    super.decreaseQuality(2); //Math.max(this.quality - 2, 0)
    this.sellIn--;
  }
}