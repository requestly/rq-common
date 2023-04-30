import { getUserProfilePath } from "../src/main.js";

describe("Example test", () => {
  test("example test getUserProfilePath", () => {
    const exampleUid = "123";
    expect(getUserProfilePath(exampleUid)).toBe("users/" + exampleUid + "/profile");
  });
});
