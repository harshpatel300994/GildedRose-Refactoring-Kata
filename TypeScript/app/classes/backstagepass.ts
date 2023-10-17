import { Item } from "./item";

export class BackstagePass extends Item {
  updateQuality() {
    if (this.sellIn <= 0) {
      this.quality = 0;
    } else if (this.sellIn <= 5) {
      super.increaseQuality(3); // Math.min(this.quality + 3, 50)
    } else if (this.sellIn <= 10) {
      super.increaseQuality(2); // Math.min(this.quality + 2, 50)
    } else {
      super.increaseQuality(1); // Math.min(this.quality + 1, 50)
    }
    this.sellIn--;
  }
}