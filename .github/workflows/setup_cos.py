"""
COS static website setup script (run once locally)
Environment variables required:
  COS_SECRET_ID, COS_SECRET_KEY, COS_BUCKET, COS_REGION
"""
from qcloud_cos import CosConfig, CosServiceError
from qcloud_cos import CosS3Client
import os

# Local credentials - replace with your own values
SECRET_ID = os.environ.get('COS_SECRET_ID', 'YOUR_SECRET_ID')
SECRET_KEY = os.environ.get('COS_SECRET_KEY', 'YOUR_SECRET_KEY')
BUCKET = os.environ.get('COS_BUCKET', 'YOUR_BUCKET')
REGION = os.environ.get('COS_REGION', 'ap-beijing')

def main():
    config = CosConfig(Region=REGION, SecretId=SECRET_ID, SecretKey=SECRET_KEY)
    client = CosS3Client(config)
    print("[CONFIG] Setting up COS static website hosting...")

    try:
        client.put_bucket_website(
            Bucket=BUCKET,
            WebsiteConfiguration={
                'IndexDocument': {'Suffix': 'index.html'},
                'ErrorDocument': {'Key': 'index.html'},
            }
        )
        print("[OK] Static website hosting enabled")
    except CosServiceError as e:
        print(f"[WARN] Static website: {e}")

    try:
        client.put_bucket_cors(
            Bucket=BUCKET,
            CORSConfiguration={
                'CORSRule': [
                    {
                        'AllowedOrigin': ['*'],
                        'AllowedMethod': ['GET', 'HEAD'],
                        'AllowedHeader': ['*'],
                        'ExposeHeader': ['ETag'],
                        'MaxAgeSeconds': 3600
                    }
                ]
            }
        )
        print("[OK] CORS configured")
    except CosServiceError as e:
        print(f"[WARN] CORS: {e}")

    url = f"https://{BUCKET}.cos-website.{REGION}.myqcloud.com"
    print(f"\n[DONE] COS URL: {url}")

if __name__ == '__main__':
    main()
