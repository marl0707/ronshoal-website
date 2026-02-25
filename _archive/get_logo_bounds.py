from PIL import Image
import sys

img1 = Image.open("/Users/sejimakazuki/Desktop/Ronshoal_Tech_Base/01_Obsidian/2026年ロンショール/002ロンショール合同会社/1.png").convert("RGB")
img2 = Image.open("/Users/sejimakazuki/Desktop/Ronshoal_Tech_Base/01_Obsidian/2026年ロンショール/002ロンショール合同会社/2.png").convert("RGB")
p1 = img1.load()
p2 = img2.load()
w, h = img1.size

min_x, min_y, max_x, max_y = w, h, -1, -1

for x in range(w):
    for y in range(h):
        if p1[x, y] != p2[x, y]:
            min_x = min(min_x, x)
            min_y = min(min_y, y)
            max_x = max(max_x, x)
            max_y = max(max_y, y)

if max_x == -1:
    print("No difference found")
else:
    print(f"Diff Bounds: left={min_x}, top={min_y}, right={max_x}, bottom={max_y}")
    print(f"Diff Size: width={max_x - min_x}, height={max_y - min_y}")
    print(f"Image Size: {w}x{h}")
    # Relative center in percentages
    cx = (min_x + max_x) / 2 / w
    cy = (min_y + max_y) / 2 / h
    print(f"Relative Center: cx={cx*100:.2f}%, cy={cy*100:.2f}%")
    # Relative Size in percentages
    rw = (max_x - min_x) / w
    rh = (max_y - min_y) / h
    print(f"Relative Size: width={rw*100:.2f}%, height={rh*100:.2f}%")
