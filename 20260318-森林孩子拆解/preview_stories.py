# 提取前几个完整的故事
with open('extracted_content.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 故事标题的位置
story_positions = [8, 28, 38, 46, 56]  # 前5个故事的起始行号

for idx, pos in enumerate(story_positions, 1):
    print(f"\n{'='*60}")
    print(f"故事 #{idx} (从行{pos}开始)")
    print('='*60)

    # 打印这个故事的内容（从标题到下一个标题之前）
    start = pos - 1  # 转换为0-based索引

    # 找下一个故事的起始位置
    next_pos = None
    for p in story_positions:
        if p > pos:
            next_pos = p
            break

    # 打印内容
    end = (next_pos - 1) if next_pos else min(start + 50, len(lines))
    for i in range(start, end):
        line = lines[i].strip()
        if ':' in line:
            content = line.split(':', 1)[1].strip()
            print(content)
        else:
            print(line)
