#!/bin/bash
set -e

# Install pnpm if not already installed
if ! command -v pnpm &> /dev/null; then
  echo "Installing pnpm..."
  npm install -g pnpm@8.15.4
fi

# Install dependencies
echo "Installing root dependencies..."
pnpm install

echo "Installing backend dependencies..."
cd apps/backend
pnpm install
cd ../..

echo "Installing frontend dependencies..."
cd apps/frontend
pnpm install
cd ../..

echo "Installing shared packages..."
cd packages/types
pnpm install
cd ../config
pnpm install
cd ../..

echo "Setting up git hooks..."
pnpm prepare

# Install commitlint and husky
pnpm dlx husky install

# Add commit-msg hook
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

echo "🎉 Setup complete! You can now start developing."
echo "To start the development servers, run: pnpm dev"
