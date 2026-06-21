#!/bin/bash

# Create product images directory
mkdir -p /home/server/workspace/steven-rantai-ponton/assets/images/products
mkdir -p /home/server/workspace/steven-rantai-ponton/assets/images/portfolio
mkdir -p /home/server/workspace/steven-rantai-ponton/assets/images/testimonials

# Create product placeholder images
cat > /home/server/workspace/steven-rantai-ponton/assets/images/products/chain-heavy-20mm.jpg << 'EOF'
<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#E2E8F0"/><stop offset="100%" style="stop-color:#CBD5E0"/></linearGradient></defs>
  <rect width="400" height="300" fill="url(#g1)"/>
  <g stroke="#FFD700" stroke-width="8" fill="none" stroke-linecap="round">
    <circle cx="80" cy="150" r="25"/>
    <circle cx="130" cy="150" r="25"/>
    <circle cx="180" cy="150" r="25"/>
    <circle cx="230" cy="150" r="25"/>
    <circle cx="280" cy="150" r="25"/>
    <circle cx="330" cy="150" r="25"/>
  </g>
  <line x1="50" y1="150" x2="360" y2="150" stroke="#FF6B35" stroke-width="3"/>
  <text x="200" y="280" font-family="Arial" font-size="14" fill="#004E89" text-anchor="middle" font-weight="bold">Rantai Ponton 20mm</text>
</svg>
EOF

cat > /home/server/workspace/steven-rantai-ponton/assets/images/products/chain-medium-16mm.jpg << 'EOF'
<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#E2E8F0"/><stop offset="100%" style="stop-color:#CBD5E0"/></linearGradient></defs>
  <rect width="400" height="300" fill="url(#g2)"/>
  <g stroke="#FF8C00" stroke-width="6" fill="none" stroke-linecap="round">
    <circle cx="100" cy="150" r="20"/>
    <circle cx="150" cy="150" r="20"/>
    <circle cx="200" cy="150" r="20"/>
    <circle cx="250" cy="150" r="20"/>
    <circle cx="300" cy="150" r="20"/>
  </g>
  <line x1="50" y1="150" x2="340" y2="150" stroke="#FF6B35" stroke-width="2"/>
  <text x="200" y="280" font-family="Arial" font-size="14" fill="#004E89" text-anchor="middle" font-weight="bold">Rantai Ponton 16mm</text>
</svg>
EOF

cat > /home/server/workspace/steven-rantai-ponton/assets/images/products/chain-light-13mm.jpg << 'EOF'
<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#E2E8F0"/><stop offset="100%" style="stop-color:#CBD5E0"/></linearGradient></defs>
  <rect width="400" height="300" fill="url(g3)"/>
  <g stroke="#FFA500" stroke-width="4" fill="none" stroke-linecap="round">
    <circle cx="120" cy="150" r="15"/>
    <circle cx="170" cy="150" r="15"/>
    <circle cx="220" cy="150" r="15"/>
    <circle cx="270" cy="150" r="15"/>
  </g>
  <line x1="50" y1="150" x2="320" y2="150" stroke="#FF6B35" stroke-width="1.5"/>
  <text x="200" y="280" font-family="Arial" font-size="14" fill="#004E89" text-anchor="middle" font-weight="bold">Rantai Ponton 13mm</text>
</svg>
EOF

echo "Product images created successfully"
