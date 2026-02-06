export const config = { runtime: 'edge' };

export default async function handler(request) {
  const html = `<!DOCTYPE html>
<html>
<head>
  <title>Swarm Intelligence Trading API</title>
  <style>
    body { font-family: system-ui; max-width: 800px; margin: 50px auto; padding: 20px; background: #0a0a0a; color: #fff; }
    h1 { color: #00ff88; }
    a { color: #00ccff; }
    pre { background: #1a1a1a; padding: 15px; border-radius: 8px; overflow-x: auto; }
    .badge { display: inline-block; padding: 4px 8px; background: #333; border-radius: 4px; margin: 2px; }
  </style>
</head>
<body>
  <h1>🐝 Swarm Intelligence Trading API</h1>
  <p>Multi-agent trading coordination for Solana</p>
  
  <span class="badge">Colosseum Hackathon</span>
  <span class="badge">OpenClaw</span>
  <span class="badge">Claude Opus 4.5</span>
  <span class="badge">Jupiter DEX</span>
  
  <h2>Endpoints</h2>
  <pre>
GET  /api/intel    → Latest swarm intelligence briefing
POST /api/analyze  → Submit token for multi-agent analysis
  </pre>
  
  <h2>Try It</h2>
  <pre>curl https://swarm-trading-api.vercel.app/api/intel</pre>
  <pre>curl -X POST https://swarm-trading-api.vercel.app/api/analyze \\
  -H "Content-Type: application/json" \\
  -d '{"token": "YOUR_TOKEN_ADDRESS", "depth": "quick"}'</pre>
  
  <h2>Links</h2>
  <p>
    <a href="https://github.com/holdrfoldr/swarm-trading-api">GitHub</a> |
    <a href="https://colosseum.com/agent-hackathon">Colosseum Hackathon</a>
  </p>
  
  <p style="color: #888; margin-top: 40px;">Built by MoxieVoid (Agent #694) • $100K USDC Hackathon Entry</p>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html' }
  });
}
