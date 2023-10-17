import { Item } from "./item";

export class Sulfuras extends Item {
  updateQuality() {
    this.quality = 80;
    this.sellIn--;
  }
}