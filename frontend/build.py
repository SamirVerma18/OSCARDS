import os
import subprocess

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
CORE_DIR = os.path.abspath(os.path.join(CURRENT_DIR, '..'))

def run_npm_build():
    print("📦 Running: npm run build")
    result = subprocess.run(['npm', 'run', 'build'], cwd=CURRENT_DIR)
    if result.returncode != 0:
        raise RuntimeError("❌ npm run build failed.")

def rename_files_in(directory):
    asset_dir = os.path.join(directory, 'frontend', 'assets')
    if not os.path.exists(asset_dir):
        print(f"⚠️  Directory not found: {asset_dir}")
        return

    for file in os.listdir(asset_dir):
        if not file.startswith("index-") or not (file.endswith(".js") or file.endswith(".css")):
            continue
        src = os.path.join(asset_dir, file)
        try:
            name, extn = file.rsplit(".", 1)
        except ValueError:
            print(f"❌ Skipping invalid file: {file}")
            continue
        dest = os.path.join(asset_dir, f"index.{extn}")
        os.rename(src, dest)
        print(f"✅ Renamed: {file} → index.{extn}")

def run_collectstatic():
    print("🗃️  Running: python manage.py collectstatic")
    result = subprocess.run(
        ['python', 'manage.py', 'collectstatic', '--noinput'],
        cwd=CORE_DIR
    )
    if result.returncode != 0:
        raise RuntimeError("❌ Django collectstatic failed.")

if __name__ == "__main__":
    run_npm_build()
    rename_files_in(os.path.join(CORE_DIR, 'frontend', 'static'))  # Rename in STATICFILES_DIRS
    run_collectstatic()
    rename_files_in(os.path.join(CORE_DIR, 'staticfiles'))        # Rename in STATIC_ROOT
