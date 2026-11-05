const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function main() {
    const buf = fs.readFileSync("Wolf's Guide to Dharma Retreats & Teachings.pdf");
    const dataBuffer = new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    const parser = new PDFParse(dataBuffer);
    await parser.load();
    
    const result = await parser.getText();
    console.log('Type:', typeof result);
    console.log('Constructor:', result.constructor.name);
    
    // It's likely an object with pages
    const json = JSON.stringify(result, null, 2);
    fs.writeFileSync('pdf_structure.json', json, 'utf-8');
    console.log('Wrote structure, length:', json.length);
    
    // Try to extract text from pages
    let allText = '';
    if (result.pages) {
        for (const page of result.pages) {
            if (page.lines) {
                for (const line of page.lines) {
                    allText += (line.text || line.str || JSON.stringify(line)) + '\n';
                }
            } else if (typeof page === 'string') {
                allText += page + '\n';
            }
            allText += '\n';
        }
    } else if (Symbol.iterator in Object(result)) {
        for (const item of result) {
            allText += JSON.stringify(item) + '\n';
        }
    }
    
    if (allText) {
        fs.writeFileSync('pdf_content.txt', allText, 'utf-8');
        console.log('Extracted text:', allText.length, 'chars');
    }
}

main().catch(console.error);
