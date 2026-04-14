with open('extracted_content.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    # 查找带有数字开头的行（可能是故事标题）
    story_headers = []
    for i, line in enumerate(lines):
        if line.strip() and line.strip()[0].isdigit():
            # 检查是否是故事标题格式（如 "01.羽", "02.桥"）
            if '.' in line and len(line.split('.')[0]) <= 3:
                story_headers.append((i+1, line.strip()))
    
    print(f"找到 {len(story_headers)} 个可能的故事标题：")
    for num, (line_no, content) in enumerate(story_headers[:20], 1):
        print(f"{num}. 行{line_no}: {content}")
    
    if len(story_headers) > 20:
        print(f"\n...（还有 {len(story_headers)-20} 个）")
