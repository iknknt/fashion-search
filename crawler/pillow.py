import os
import glob

from PIL import Image, ImageDraw, ImageFont

src_dir = 'data/images'
dst_dir = 'data/new_images'

files = glob.glob(os.path.join(src_dir, '*.jpg'))

def square(pil_img):
    width, height = pil_img.size
    result = Image.new("RGB", (height, height), (255, 255, 255))
    result.paste(pil_img, ((height - width) // 2, 0))
    return result

for f in files:
    im = Image.open(f)
    im_thumb = square(im).resize((300, 300), Image.LANCZOS)
    ftitle, fext = os.path.splitext(os.path.basename(f))
    im_thumb.save(os.path.join(dst_dir, ftitle + '_half' + fext), quality=95)