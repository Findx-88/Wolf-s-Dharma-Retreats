import subprocess
subprocess.run(['pip', 'install', 'pymupdf'], capture_output=True)
import fitz

doc = fitz.open(r"d:\Projects\Wolf's Dharma Retreats\Wolf's Guide to Dharma Retreats & Teachings.pdf")
text = ''
for page in doc:
    text += page.get_text()

with open(r"d:\Projects\Wolf's Dharma Retreats\pdf_content.txt", 'w', encoding='utf-8') as f:
    f.write(text)

print(f'Extracted {len(text)} characters from {len(doc)} pages')
