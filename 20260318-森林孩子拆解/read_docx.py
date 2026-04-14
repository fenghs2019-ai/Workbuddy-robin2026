import sys
import zipfile
import xml.etree.ElementTree as ET

def read_docx_text(docx_path):
    """Read text from a docx file"""
    with zipfile.ZipFile(docx_path, 'r') as zip_ref:
        # Read document.xml
        xml_content = zip_ref.read('word/document.xml')

    # Parse XML
    root = ET.fromstring(xml_content)

    # Define namespace
    namespaces = {
        'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
    }

    # Extract text
    text_elements = []
    for paragraph in root.findall('.//w:p', namespaces):
        # Get all text runs in this paragraph
        para_text = []
        for run in paragraph.findall('.//w:r', namespaces):
            text_elem = run.find('w:t', namespaces)
            if text_elem is not None and text_elem.text:
                para_text.append(text_elem.text)

        if para_text:
            text_elements.append(''.join(para_text))

    return text_elements

if __name__ == '__main__':
    docx_path = "D:/Robin/00-沉沙谷/BB-森林的孩子/文字/给小孩子：故事诗（1-162）-2019-4.docx"
    paragraphs = read_docx_text(docx_path)

    # Save to file
    with open('extracted_content.txt', 'w', encoding='utf-8') as f:
        for i, para in enumerate(paragraphs, 1):
            f.write(f"{i}: {para}\n")

    print(f"Extracted {len(paragraphs)} paragraphs")
    print("Content saved to extracted_content.txt")
