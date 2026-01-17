import os
import glob

dirs = [
    "components/ui-component/case-study",
    "components/ui-component/stats",
    "components/ui-component/pricing-calculator",
    "components/ui-component/logos"
]

for d in dirs:
    print(f"PROCESSING_DIR: {d}")
    # Get text files only
    files = glob.glob(os.path.join(d, "*.tsx"))
    for f in sorted(files):
        print(f"START_FILE: {f}")
        try:
            with open(f, 'r', encoding='utf-8') as file:
                print(file.read())
        except Exception as e:
            print(f"ERROR_READING: {f} {e}")
        print(f"END_FILE: {f}")
