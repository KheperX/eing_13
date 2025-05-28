# Quick Fix Script for Windows

# ใน PowerShell หรือ Command Prompt
cd C:\Users\HP\Desktop\Portfolio\eing_13

# ลบ build cache
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

# ติดตั้งใหม่
npm install

# รัน dev server
npm run dev
