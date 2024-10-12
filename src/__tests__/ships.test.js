import { Ship } from "../ships";

describe("ship", () => {
  let carrier;

  beforeEach(() => {
    carrier = new Ship(5);
  });

  test("should increment timesHit when hit", () => {
    carrier.hit();
    expect(carrier.timesHit).toBe(1);
  });

  test("should increment timesHit when hit multiple times", () => {
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    expect(carrier.timesHit).toBe(4);
  });

  test("should check if ship is sunk after being hit once", () => {
    carrier.hit();
    expect(carrier.isSunk()).toBe(false);
  });

  test("ship is sunk after being hit it's length number", () => {
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    expect(carrier.isSunk()).toBe(true);
  });
});
