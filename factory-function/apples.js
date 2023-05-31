function ApplePricePlanner() {
    var boxCost = 0; // Define and initialize boxCost variable
    var numApplesInBox = 0; // Define and initialize numApplesInBox variable
    let cost = 0;
    let packetCost = 0;
    let numberOfPackets = 0;

    function appleCost(value) {
        if (value) {
            cost = value;
        }
        
        return cost;
    }

    function getBoxCost(value) {
        if (value) {
            boxCost = value;
        }
        return boxCost;
    }

    function getNumberOfApples() {
        return numApplesInBox;
    }
   
    function setPacketCost(value){
        if (value) {
            packetCost = value;
        }

        return packetCost;

    }
    function getPacketCost() {
        return packetCost;
    }
    function setNumberOfPackets(value){
        if (value) {
            numberOfPackets = value;
        }

        return numberOfPackets;
    }
    function getNumberOfPackets(){
        return numberOfPackets;
    }

    return {
        appleCost,
        getBoxCost,
        getNumberOfApples,
        setPacketCost,
        getPacketCost,
        setNumberOfPackets,
        getNumberOfPackets
    };
}


