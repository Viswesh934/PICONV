# piconv

[![npm](https://img.shields.io/npm/dm/piconv)](https://www.npmjs.com/package/piconv)

A lightweight TypeScript library for converting PDF and image files to Base64, Hex, and ASCII85 encodings, and back.

## Features

- Convert PDF files to/from Base64, Hex, and ASCII85
- Convert image files to/from Base64, Hex, and ASCII85
- Simple API with synchronous file operations
- TypeScript support with full type definitions
- Zero external dependencies (uses Node.js built-ins)

## Installation

```bash
npm install piconv
```

## Usage

### PDF Conversions

```typescript
import { pdfToBase64, base64ToPdf, pdfToHex, hexToPdf, pdfToAscii85, ascii85ToPdf } from 'piconv';

// Convert PDF to Base64
const base64String = pdfToBase64('path/to/document.pdf');

// Convert Base64 back to PDF
base64ToPdf(base64String, 'path/to/output.pdf');

// Convert PDF to Hex
const hexString = pdfToHex('path/to/document.pdf');

// Convert Hex back to PDF
hexToPdf(hexString, 'path/to/output.pdf');

// Convert PDF to ASCII85
const ascii85String = pdfToAscii85('path/to/document.pdf');

// Convert ASCII85 back to PDF
ascii85ToPdf(ascii85String, 'path/to/output.pdf');
```

### Image Conversions

```typescript
import { imageToBase64, base64ToImage, imageToHex, hexToImage, imageToAscii85, ascii85ToImage } from 'piconv';

// Convert image to Base64 (includes MIME type prefix)
const base64String = imageToBase64('path/to/image.jpg');

// Convert Base64 back to image
base64ToImage(base64String, 'path/to/output.jpg');

// Convert image to Hex
const hexString = imageToHex('path/to/image.jpg');

// Convert Hex back to image
hexToImage(hexString, 'path/to/output.jpg');

// Convert image to ASCII85
const ascii85String = imageToAscii85('path/to/image.jpg');

// Convert ASCII85 back to image
ascii85ToImage(ascii85String, 'path/to/output.jpg');
```

## API Reference

### PDF Functions

- `pdfToBase64(path: string): string` - Converts PDF file to Base64 string
- `base64ToPdf(base64: string, outputPath: string): void` - Converts Base64 string back to PDF file
- `pdfToHex(path: string): string` - Converts PDF file to Hex string
- `hexToPdf(hex: string, outputPath: string): void` - Converts Hex string back to PDF file
- `pdfToAscii85(path: string): string` - Converts PDF file to ASCII85 string
- `ascii85ToPdf(ascii85: string, outputPath: string): void` - Converts ASCII85 string back to PDF file

### Image Functions

- `imageToBase64(path: string): string` - Converts image file to Base64 string with MIME type prefix
- `base64ToImage(base64: string, outputPath: string): void` - Converts Base64 string back to image file
- `imageToHex(path: string): string` - Converts image file to Hex string
- `hexToImage(hex: string, outputPath: string): void` - Converts Hex string back to image file
- `imageToAscii85(path: string): string` - Converts image file to ASCII85 string
- `ascii85ToImage(ascii85: string, outputPath: string): void` - Converts ASCII85 string back to image file

## Requirements

- Node.js 14+
- TypeScript 4.0+ (for development)

## Testing

Run the test suite:

```bash
npm test
```

Tests include round-trip conversions for all supported formats.

## Build

Build the project:

```bash
npm run build
```

This generates CommonJS and ESM builds in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run `npm test` to ensure all tests pass
6. Submit a pull request

## License

ISC

## Author

Viswesh934
