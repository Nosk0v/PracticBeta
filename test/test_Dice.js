
const Dice = artifacts.require("Dice");

contract("Dice", () => {
  let dice;
  beforeEach(async () => {
    dice = await Dice.new();
  });

  it("should return the winner correctly", async () => {
    const winner1 = await dice.Winner();
    const winner2 = await dice.Winner();
    const winner3 = await dice.Winner();

    assert.ok(winner1[0] === "Win 1" || winner1[0] === "Win 2" || winner1[0] === "Not win");
    assert.ok(winner1[1] >= 2 && winner1[1] <= 11);

    assert.ok(winner2[0] === "Win 1" || winner2[0] === "Win 2" || winner2[0] === "Not win");
    assert.ok(winner2[1] >= 2 && winner2[1] <= 11);

    assert.ok(winner3[0] === "Win 1" || winner3[0] === "Win 2" || winner3[0] === "Not win");
    assert.ok(winner3[1] >= 2 && winner3[1] <= 11);
    
  });
  it("should return the winner correctly", async () => {
    const winner4 = await dice.Winner();
    const winner5 = await dice.Winner();
    const winner6 = await dice.Winner();

    assert.ok(winner4[0] === "Win 1" || winner4[0] === "Win 2" || winner4[0] === "Not win");
    assert.ok(winner4[1] >= 2 && winner4[1] <= 11);

    assert.ok(winner5[0] === "Win 1" || winner5[0] === "Win 2" || winner5[0] === "Not win");
    assert.ok(winner5[1] >= 2 && winner5[1] <= 11);

    assert.ok(winner6[0] === "Win 1" || winner6[0] === "Win 2" || winner6[0] === "Not win");
    assert.ok(winner6[1] >= 2 && winner6[1] <= 11);
    
  });
  
});
contract("Dice", (accounts) => {
  it("should return 'Win 1' if player 1 throws a higher number", async () => {
    const diceInstance = await Dice.deployed();
    const result = await diceInstance.Winner();
    assert.equal(result[0], "Win 1", "Player 1 should win");
  });

  it("should return 'Win 2' if player 2 throws a higher number", async () => {
    const diceInstance = await Dice.deployed();
    const result = await diceInstance.Winner();
    assert.equal(result[0], "Win 2", "Player 2 should win");
  });

  
});



  
