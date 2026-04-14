with open('extracted_content.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 查找故事标题（格式：数字.标题）
story_headers = []
for i, line in enumerate(lines):
    content = line.strip()
    if ':' in content:
        # 提取冒号后的内容
        text = content.split(':', 1)[1].strip()
        # 检查是否匹配故事标题格式（如 "01.羽", "10.蒲"）
        if text and text[0].isdigit() and '.' in text and len(text.split('.')[0]) <= 3:
            title = text.split('.', 1)[1] if len(text.split('.')) > 1 else ''
            num = text.split('.')[0]
            story_headers.append((i+1, num, title, text))

print(f"找到 {len(story_headers)} 个故事标题：")
for num, (line_no, story_num, title, full_text) in enumerate(story_headers[:30], 1):
    print(f"{num}. 故事{story_num} ({title}) - 行{line_no}")

if len(story_headers) > 30:
    print(f"\n...（还有 {len(story_headers)-30} 个）")
