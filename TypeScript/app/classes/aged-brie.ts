import { Item } from "./item";

export class AgedBrie extends Item {
    updateQuality() {
      super.increaseQuality(1);
      this.sellIn--;
    }
}