"""Render the original typographic share card with local fonts (Pillow required)."""
from pathlib import Path
import unicodedata
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[2]
target = root / 'public/personal/danang/og.png'
fonts = Path('/System/Library/Fonts')
jp_path = next(p for p in fonts.iterdir() if unicodedata.normalize('NFC', p.name) == 'ヒラギノ角ゴシック W8.ttc')
en_path = fonts / 'Supplemental/Arial Black.ttf'
jp = lambda size: ImageFont.truetype(str(jp_path), size)
en = lambda size: ImageFont.truetype(str(en_path), size)
im = Image.new('RGB', (1200, 630), '#111110')
d = ImageDraw.Draw(im)
paper, orange, muted = '#ece7dc', '#ff5c24', '#b0ac9f'
d.text((55, 35), 'SEJIMA / PERSONAL FIELD NOTES', font=en(15), fill=paper)
d.text((900, 35), 'VIETNAM, 2026', font=en(14), fill=muted)
d.line((55, 78, 1145, 78), fill='#4c4b45', width=1)
d.text((44, 88), 'DA NANG.', font=en(164), fill=paper, stroke_width=1)
d.text((55, 310), '食欲だけ、先に着いた。', font=jp(60), fill=orange)
d.text((58, 414), 'まだ食べていない。なのに、もう楽しい。', font=jp(24), fill=paper)
d.text((58, 458), '瀬島 和樹の、これから行きたい候補帳。', font=jp(21), fill=muted)
d.line((55, 535, 1145, 535), fill='#4c4b45', width=1)
d.text((58, 558), '20 SPOTS / 4 APPETITES / 1 STOMACH', font=en(17), fill=paper)
d.text((906, 551), '続きは、お店で。', font=jp(20), fill=orange)
im.save(target, optimize=True)
print(f'Wrote {target.name}: 1200x630')
