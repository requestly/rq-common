import { DB_UTILS } from "../src/main.js";

describe("Example test", () => {
  test("example test getUserProfilePath", () => {
    const exampleUid = "123";
    expect(DB_UTILS.getUserProfilePath(exampleUid)).toBe("users/" + exampleUid + "/profile");
  });
});
