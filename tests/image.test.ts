import { imageToBase64, base64ToImage, imageToHex, hexToImage, imageToAscii85, ascii85ToImage } from "../src/image.js";
import assert from "assert";
import fs from "fs";

describe("Image conversion", () => {
  it("should convert image to base64 and back", () => {
    const sample = "tests/sample.jpeg";

    const base64 = imageToBase64(sample);
    base64ToImage(base64, "tests/out.jpeg");

    assert.ok(fs.existsSync("tests/out.jpeg"));
  });

  it("should convert image to hex and back", () => {
    const sample = "tests/sample.jpeg";

    const hex = imageToHex(sample);
    hexToImage(hex, "tests/out_hex.jpeg");

    assert.ok(fs.existsSync("tests/out_hex.jpeg"));
  });

  it("should convert image to ASCII85 and back", () => {
    const sample = "tests/sample.jpeg";

    const ascii85 = imageToAscii85(sample);
    ascii85ToImage(ascii85, "tests/out_ascii85.jpeg");

    assert.ok(fs.existsSync("tests/out_ascii85.jpeg"));
  });
});
