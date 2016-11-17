describe("Gilded Rose - Individual test cases for all items", function() {
  describe("First day check", function() {
    it("Items sell_in and quality value", function() {
      update_quality();

      // expect(items[0].name).toEqual('+5 Dexterity Vest')
      expect(items[0].sell_in).toEqual(9)
      expect(items[0].quality).toEqual(19)

      // expect(items[1].name).toEqual('Aged Brie')
      expect(items[1].sell_in).toEqual(1)
      expect(items[1].quality).toEqual(1)

      // expect(items[3].name).toEqual('Sulfuras, Hand of Ragnaros')
      expect(items[3].sell_in).toEqual(0)
      expect(items[3].quality).toEqual(80)

      // expect(items[4].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
      expect(items[4].sell_in).toEqual(14)
      expect(items[4].quality).toEqual(21)

      // expect(items[5].name).toEqual('Conjured Mana Cake')
      expect(items[5].sell_in).toEqual(2)
      expect(items[5].quality).toEqual(5)
    });
  });

  describe("Second day check", function() {
    it("Items sell_in and quality value", function() {
      update_quality();
      update_quality();
      expect(items[0].name).toEqual('+5 Dexterity Vest')
      expect(items[0].sell_in).toEqual(8)
      expect(items[0].quality).toEqual(18)

      expect(items[1].name).toEqual('Aged Brie')
      expect(items[1].sell_in).toEqual(0)
      expect(items[1].quality).toEqual(2)

      expect(items[3].name).toEqual('Sulfuras, Hand of Ragnaros')
      expect(items[3].sell_in).toEqual(0)
      expect(items[3].quality).toEqual(80)

      expect(items[4].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
      expect(items[4].sell_in).toEqual(13)
      expect(items[4].quality).toEqual(22)

      expect(items[5].name).toEqual('Conjured Mana Cake')
      expect(items[5].sell_in).toEqual(1)
      expect(items[5].quality).toEqual(4)
    });
  });

  describe('When sell_in is less then zero',function() {
    it("Items sell_in and quality value", function() {
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      // expect(items[1].name).toEqual('Aged Brie')
      expect(items[1].sell_in).toEqual(-2)
      expect(items[1].quality).toEqual(6)

      update_quality();
      // expect(items[2].name).toEqual('Elixir of the Mongoose')
      expect(items[2].sell_in).toEqual(0)
      expect(items[2].quality).toEqual(2)

      update_quality();
      // expect(items[2].name).toEqual('Elixir of the Mongoose')
      expect(items[2].sell_in).toEqual(-1)
      expect(items[2].quality).toEqual(0)
    });
  });

  describe('Quality is always non negative: 50 > Quality > 0',function() {
    it("Quality if zero, check it should remain zero", function() {
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      // expect(items[2].name).toEqual('Elixir of the Mongoose')
      expect(items[2].sell_in).toEqual(-3)
      expect(items[2].quality).toEqual(0)
    });
  });

  describe('Backstage passes quality',function() {
    it("Increases by 2 for 10 days or less and by 3 for 5 days or less drops to 0 after concert", function() {
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      //after 5 iterations
      expect(items[4].sell_in).toEqual(10)
      expect(items[4].quality).toEqual(25)
      //6th iteration
      update_quality();
      expect(items[4].sell_in).toEqual(9)
      expect(items[4].quality).toEqual(27)
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      //after 10 iterations
      expect(items[4].sell_in).toEqual(5)
      expect(items[4].quality).toEqual(35)
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      expect(items[4].sell_in).toEqual(0)
      expect(items[4].quality).toEqual(50)
      update_quality();
      expect(items[4].sell_in).toEqual(-1)
      expect(items[4].quality).toEqual(0)
    });
  });

});
