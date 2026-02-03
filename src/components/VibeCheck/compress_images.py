import os
from PIL import Image

# ======= CONFIG =======
input_folder = "."               # current folder
output_folder = "compressed"     # Output folder for compressed images
quality = 80                     # JPEG/WebP quality (1–100)
convert_to_webp = True           # Convert to WebP for max compression
# =======================

os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder):
    file_path = os.path.join(input_folder, filename)
    if not os.path.isfile(file_path):
        continue
    if not filename.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
        continue

    try:
        img = Image.open(file_path)
        img = img.convert("RGB")

        name, ext = os.path.splitext(filename)
        output_name = f"{name}.webp" if convert_to_webp else f"{name}{ext}"
        output_path = os.path.join(output_folder, output_name)

        img.save(
            output_path,
            format="WEBP" if convert_to_webp else img.format,
            optimize=True,
            quality=quality,
        )

        old_size = os.path.getsize(file_path) / 1024
        new_size = os.path.getsize(output_path) / 1024
        print(f"✅ {filename}: {old_size:.1f}KB → {new_size:.1f}KB")

    except Exception as e:
        print(f"❌ Error compressing {filename}: {e}")

print("\n🎯 Compression complete! Files saved in:", output_folder)
