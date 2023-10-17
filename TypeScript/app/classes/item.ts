export abstract class Item {
    constructor(public name: string, public sellIn: number, public quality: number) {}

    /**
     * update quality of an item
     */
    abstract updateQuality(): void;

    decreaseQuality(no: number) {
        this.quality = Math.max(this.quality - no, 0);
    }

    increaseQuality(no: number) {
        this.quality = Math.min(this.quality + no, 50);
    }
}