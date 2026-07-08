#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

echo "Stopping existing dev servers..."
pkill -f "${ROOT}.*vite" 2>/dev/null || true
for port in 5173 5174 5175; do
  lsof -ti :"$port" | xargs kill -9 2>/dev/null || true
done

sleep 1
echo "Starting dev server..."
npm run dev
