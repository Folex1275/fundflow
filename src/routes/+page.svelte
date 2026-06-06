<script lang="ts">
  import { walletAddress, connectWallet, isConnecting } from '$lib/stores/wallet';
  import { goto } from '$app/navigation';

  function handleExplore() { goto('/explore'); }
  function handleProfile() {
    if ($walletAddress) goto(`/profile/${$walletAddress}`);
    else connectWallet();
  }
</script>

<svelte:head>
  <title>DripsFlow — Web3 Contributor Funding</title>
</svelte:head>

<section class="hero">
  <div class="hero-tag">Open-source · Web3 · On-chain</div>
  <h1 class="hero-title">
    Track your<br/>
    <span class="accent">funding streams</span><br/>
    on Drips
  </h1>
  <p class="hero-sub">
    Connect your wallet to see your real-time funding streams, contribution history,
    and how much you've earned across Web3 open-source projects.
  </p>

  <div class="hero-actions">
    <button class="btn-primary" onclick={handleProfile} disabled={$isConnecting}>
      {$walletAddress ? 'View my profile' : $isConnecting ? 'Connecting...' : 'Connect wallet'}
    </button>
    <button class="btn-ghost" onclick={handleExplore}>
      Explore projects →
    </button>
  </div>
</section>

<section class="features">
  {#each [
    { icon: '⟳', title: 'Live streams', desc: 'Real-time DAI/ETH funding streams from the Drips protocol, updated every block.' },
    { icon: '◈', title: 'Contributor profile', desc: 'Merge your GitHub identity with your on-chain wallet — one unified view of your work.' },
    { icon: '↗', title: 'Project explorer', desc: 'Discover Web3 open-source projects actively funding contributors via Drips.' },
  ] as f}
    <div class="feature-card">
      <div class="feature-icon">{f.icon}</div>
      <h3 class="feature-title">{f.title}</h3>
      <p class="feature-desc">{f.desc}</p>
    </div>
  {/each}
</section>

<style>
  .hero {
    text-align: center;
    padding: 5rem 0 4rem;
    max-width: 700px;
    margin: 0 auto;
  }
  .hero-tag {
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    color: #475569;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }
  .hero-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 600;
    line-height: 1.1;
    color: #f1f5f9;
    margin: 0 0 1.5rem;
    letter-spacing: -0.02em;
  }
  .accent { color: #7dd3fc; }
  .hero-sub {
    font-size: 1.05rem;
    color: #64748b;
    line-height: 1.7;
    margin: 0 0 2.5rem;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }
  .hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  .btn-primary {
    padding: 0.7rem 1.75rem;
    background: #7dd3fc;
    color: #060810;
    border: none;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    font-family: 'DM Mono', monospace;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
  }
  .btn-primary:hover { background: #38bdf8; }
  .btn-primary:active { transform: scale(0.98); }
  .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
  .btn-ghost {
    padding: 0.7rem 1.5rem;
    background: transparent;
    color: #94a3b8;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    font-size: 0.9rem;
    font-family: 'DM Mono', monospace;
    cursor: pointer;
    transition: color 0.15s, border-color 0.15s;
  }
  .btn-ghost:hover { color: #e2e8f0; border-color: rgba(255,255,255,0.2); }
  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
  }
  .feature-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 14px;
    padding: 1.5rem;
    transition: border-color 0.2s;
  }
  .feature-card:hover { border-color: rgba(125, 211, 252, 0.15); }
  .feature-icon { font-size: 1.4rem; margin-bottom: 0.75rem; color: #7dd3fc; }
  .feature-title { font-size: 1rem; font-weight: 600; color: #e2e8f0; margin: 0 0 0.5rem; }
  .feature-desc { font-size: 0.85rem; color: #64748b; line-height: 1.6; margin: 0; }
</style>