import { pdfToBase64, base64ToPdf, pdfToHex, hexToPdf, pdfToAscii85, ascii85ToPdf } from "../src/pdf.js";
import assert from "assert";
import fs from "fs";

describe("PDF conversion", () => {
    it("should convert PDF to base64 and back", () => {
        const sample = "tests/sample.pdf";
        const base64 = pdfToBase64(sample);
        base64ToPdf(base64, "tests/out.pdf");
        assert.ok(fs.existsSync("tests/out.pdf"));
    });

    it("should convert PDF to hex and back", () => {
        const sample = "tests/sample.pdf";
        const hex = pdfToHex(sample);
        hexToPdf(hex, "tests/out_hex.pdf");
        assert.ok(fs.existsSync("tests/out_hex.pdf"));
    });

    it("should convert PDF to ASCII85 and back", () => {
        const sample = "tests/sample.pdf";
        const ascii85 = pdfToAscii85(sample);
        ascii85ToPdf(ascii85, "tests/out_ascii85.pdf");
        assert.ok(fs.existsSync("tests/out_ascii85.pdf"));
    });
});
