describe('Apples app', function () {
    it("should return cost price per apple", function () {
        let applePrice = ApplePricePlanner();
        let cost = "R2.00";
        applePrice.appleCost("R2.00")
        assert.equal("R2.00", applePrice.appleCost())
    });

    it("should return cost price of the box", function () {
        let applePrice = ApplePricePlanner();
        let cost = "R100.00";
        applePrice.getBoxCost("R100.00")
        assert.equal("R100.00", applePrice.getBoxCost())
    });

    it("should return cost price of the packet", function () {
        let applePrice = ApplePricePlanner();
        let cost = "R50.00";
        applePrice.setPacketCost("R50.00")
        assert.equal("R50.00", applePrice.getPacketCost())
    });

    it("should return number of packet", function () {
        let applePrice = ApplePricePlanner();
        let cost = "10";
        applePrice.setNumberOfPackets("10")
        assert.equal("10", applePrice.getNumberOfPackets())
    });

});