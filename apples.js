function calculatePackets() {
  // Get input values
  var boxCost = parseFloat(document.getElementById("boxCost").value);
  var numApplesInBox = parseInt(document.getElementById("numApplesInBox").value);
  var numApplesInPacket = parseInt(document.getElementById("numApplesInPacket").value);
  var profitPercentage = parseFloat(document.getElementById("profitPercentage").value);

  // DOM references for displaying results
  var costPricePerAppleElement = document.getElementById("costPricePerApple");
  var costPricePerPacketElement = document.getElementById("costPricePerPacket");
  var numPacketsElement = document.getElementById("numPackets");
  var sellingPricePerPacketElement = document.getElementById("sellingPricePerPacket");

  // Calculating cost price per apple
  var costPricePerApple = boxCost / numApplesInBox;

  // Calculating cost price per packet
  var costPricePerPacket = costPricePerApple * numApplesInPacket;

  // Calculating number of packets that can be made
  var numPackets = Math.floor(numApplesInBox / numApplesInPacket);

  // Calculating selling price per packet to make the required profit percentage
  var sellingPricePerPacket = costPricePerPacket + (costPricePerPacket * (profitPercentage / 100));

  // Display results after calculations
  costPricePerAppleElement.innerHTML = "R" + costPricePerApple.toFixed(2);
  costPricePerPacketElement.innerHTML = "R" + costPricePerPacket.toFixed(2);
  numPacketsElement.innerHTML = numPackets;
  sellingPricePerPacketElement.innerHTML = "R" + sellingPricePerPacket.toFixed(2);

  // Clear input fields
  document.getElementById("boxCost").value = "";
  document.getElementById("numApplesInBox").value = "";
  document.getElementById("numApplesInPacket").value = "";
  document.getElementById("profitPercentage").value = "";
}

    