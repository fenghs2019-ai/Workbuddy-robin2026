"""
COS file upload script (used by GitHub Actions)
Requires environment variables: COS_SECRET_ID, COS_SECRET_KEY, COS_BUCKET, COS_REGION
"""
import os
from qcloud_cos import CosConfig
from qcloud_cos import CosS3Client
from pathlib import Path

SECRET_ID = os.environ['COS_SECRET_ID']
SECRET_KEY = os.environ['COS_SECRET_KEY']
BUCKET = os.environ['COS_BUCKET']
REGION = os.environ['COS_REGION']

config = CosConfig(Region=REGION, SecretId=SECRET_ID, SecretKey=SECRET_KEY)
client = CosS3Client(config)

print(f"Bucket: {BUCKET}, Region: {REGION}")
print("Starting upload...")

# Upload root index.html
print("Uploading index.html...")
client.put_object(Bucket=BUCKET, Body=open('index.html', 'rb'), Key='index.html')
print("  OK: index.html")

# Upload platform/ directory
platform_dir = Path('platform')
if platform_dir.exists():
    files = sorted(platform_dir.rglob('*'))
    dirs = [f for f in files if f.is_dir()]
    file_list = [f for f in files if f.is_file()]

    for d in dirs:
        cos_dir = str(d) + '/'
        if '.git' in cos_dir:
            continue
        try:
            client.put_object(Bucket=BUCKET, Body=b'', Key=cos_dir)
            print(f"  DIR: {cos_dir}")
        except Exception as e:
            print(f"  DIR ERR: {cos_dir} {e}")

    for f in file_list:
        rel = str(f)
        if '.git' in rel or rel.startswith('.'):
            continue
        ct = None
        if rel.endswith('.js'): ct = 'application/javascript'
        elif rel.endswith('.css'): ct = 'text/css; charset=utf-8'
        elif rel.endswith('.html'): ct = 'text/html; charset=utf-8'
        elif rel.endswith('.json'): ct = 'application/json'
        elif rel.endswith('.png'): ct = 'image/png'
        elif rel.endswith(('.jpg', '.jpeg')): ct = 'image/jpeg'

        with open(f, 'rb') as fp:
            if ct:
                client.put_object(Bucket=BUCKET, Body=fp, Key=rel, ContentType=ct)
            else:
                client.put_object(Bucket=BUCKET, Body=fp, Key=rel)
        print(f"  OK: {rel}")

print(f"\nAll done! URL: https://{BUCKET}.cos-website.{REGION}.myqcloud.com")
