import cv2
import numpy as np

# Read images
img = cv2.imread("/Users/sejimakazuki/Desktop/Ronshoal_Tech_Base/01_Obsidian/2026年ロンショール/002ロンショール合同会社/1.png")
logo = cv2.imread("/Users/sejimakazuki/Desktop/Ronshoal_Tech_Base/01_Obsidian/2026年ロンショール/002ロンショール合同会社/logo (2).png のコピー")

# Resize logo to fit different scales if necessary, or assume exact match
# But let's just use minMaxLoc with template matching

result = cv2.matchTemplate(img, logo, cv2.TM_CCOEFF_NORMED)
min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)

print(f"Match value: {max_val}")
if max_val > 0.8:
    print(f"Top-Left: {max_loc}")
    print(f"Width: {logo.shape[1]}")
    print(f"Height: {logo.shape[0]}")
    
    # Calculate relative position
    x = max_loc[0]
    y = max_loc[1]
    w = logo.shape[1]
    h = logo.shape[0]
    img_h, img_w = img.shape[:2]
    
    cx = (x + w/2) / img_w
    cy = (y + h/2) / img_h
    rw = w / img_w
    rh = h / img_h
    
    print(f"Relative Location: cx={cx*100:.2f}%, cy={cy*100:.2f}%, width={rw*100:.2f}%, height={rh*100:.2f}%")
else:
    print("Logo not found in 1.png")
