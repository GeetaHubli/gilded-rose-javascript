

describe('Item - Change Quality value and change sell in value of item', function() {
  describe('Item - change quality', function(){
    it('Item - ChangeQuality updates the quality value - Increment or decrement', function() {
        const item1 = new Item()
        expect(item1.changeQuality(8,1)).toEqual(9)
    })
  })
});
