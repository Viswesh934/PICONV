import fs from "fs";

/** Convert an image file to Base64 string (with MIME type prefix) */
export function imageToBase64(path: string): string {
  const file = fs.readFileSync(path);
  const ext = path.split(".").pop();
  return `data:image/${ext};base64,${file.toString("base64")}`;
}

/** Convert Base64 string back to image file */
export function base64ToImage(base64: string, outputPath: string): void {
  const data = base64.includes(",") ? base64.split(",")[1] : base64;
  const buffer = Buffer.from(data, "base64");
  fs.writeFileSync(outputPath, buffer);
}

/** Convert an image file to Hex string */
export function imageToHex(path: string): string {
  const file = fs.readFileSync(path);
  return file.toString("hex");
}

/** Convert Hex string back to image file */
export function hexToImage(hex: string, outputPath: string): void {
  const buffer = Buffer.from(hex, "hex");
  fs.writeFileSync(outputPath, buffer);
}

/** Convert an image file to ASCII85 string */
export function imageToAscii85(path: string): string {
  const file = fs.readFileSync(path);
  return bufferToAscii85(file);
}

/** Convert ASCII85 string back to image file */
export function ascii85ToImage(ascii85: string, outputPath: string): void {
  const buffer = ascii85ToBuffer(ascii85);
  fs.writeFileSync(outputPath, buffer);
}

// Helper function to encode buffer to ASCII85
function bufferToAscii85(buf: Buffer): string {
  let result = "<~";
  for (let i = 0; i < buf.length; i += 4) {
    const block = buf.slice(i, i + 4);
    const paddedBlock = Buffer.concat([block, Buffer.alloc(4 - block.length, 0)]); // pad with zeros

    const num = paddedBlock.readUInt32BE(0);

    if (num === 0) {
      result += "z";
      continue;
    }

    let chars = "";
    let n = num;
    for (let j = 0; j < 5; j++) {
      chars = String.fromCharCode((n % 85) + 33) + chars;
      n = Math.floor(n / 85);
    }

    if (block.length < 4) {
      // truncate padding chars for partial block
      chars = chars.slice(0, block.length + 1);
    }

    result += chars;
  }
  result += "~>";
  return result;
}

// Helper function to decode ASCII85 to buffer
function ascii85ToBuffer(ascii85: string): Buffer {
  ascii85 = ascii85.replace(/^<~/, "").replace(/~>$/, "");

  const result: number[] = [];
  let i = 0;

  while (i < ascii85.length) {
    if (ascii85[i] === "z") {
      result.push(0, 0, 0, 0);
      i++;
      continue;
    }

    const block: number[] = [];
    let j = 0;
    for (; j < 5 && i + j < ascii85.length; j++) {
      const code = ascii85.charCodeAt(i + j) - 33;
      if (code < 0 || code > 84) throw new Error("Invalid ASCII85 character");
      block.push(code);
    }

    while (block.length < 5) block.push(84); // pad last block

    let num = 0;
    for (const n of block) num = num * 85 + n;

    const bytes = [
      (num >> 24) & 0xff,
      (num >> 16) & 0xff,
      (num >> 8) & 0xff,
      num & 0xff,
    ];

    // only take j-1 bytes for partial last block
    result.push(...bytes.slice(0, j - 1));

    i += j;
  }

  return Buffer.from(result);
}
