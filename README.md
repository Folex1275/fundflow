# FundFlow

> A contributor funding dashboard for Web3 open-source projects, built on the [Drips protocol](https://drips.network).

🔴 **Live Demo:** https://fundflow-app.vercel.app

![FundFlow](https://img.shields.io/badge/built%20on-Drips-7dd3fc?style=flat-square)
![SvelteKit](https://img.shields.io/badge/SvelteKit-TypeScript-orange?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)

---

## What is FundFlow?

FundFlow is an open-source web app that bridges your GitHub identity with your on-chain wallet activity on the [Drips protocol](https://drips.network).

The Drips protocol allows Web3 projects to stream continuous funding (in DAI/ETH) to their open-source contributors directly on-chain. FundFlow makes this activity visible and accessible — giving contributors a single dashboard to track how much they've earned, who is funding them, and which projects are actively paying contributors.

---

## Features

### 🔗 Wallet Connect
Connect your Ethereum wallet (MetaMask, Rabby, or any EIP-1193 compatible wallet) to instantly load your on-chain funding activity.

### ⟳ Live Funding Streams
See all active Drips funding streams flowing to and from your wallet address in real time. Each stream card shows:
- Amount per month (in DAI)
- Total streamed so far
- Stream start date
- Active or paused status

### ◈ Contributor Profile
Merge your GitHub identity with your wallet address into a unified contributor profile. Link your GitHub username to display your:
- GitHub avatar and bio
- Public repositories
- On-chain funding streams side by side

### ↗ Project Explorer
Browse Web3 open-source projects that are actively funding their contributors via Drips. Search and filter projects by name to find opportunities.

### 🌙 Dark / Light Mode
Switch between dark and light themes. Your preference is saved automatically.

### 🔗 Share Profile
Copy your FundFlow profile link to share with others or include in job applications.

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | SvelteKit + TypeScript |
| Styling | TailwindCSS + custom CSS variables |
| Web3 | ethers.js v6, ENS resolution |
| Blockchain data | Drips GraphQL API |
| Developer data | GitHub REST API |
| Icons | heroicons-svelte |
| Deployment | Vercel |

---

## Getting started

### Prerequisites
- Node.js 18 or higher
- A browser wallet extension (MetaMask or Rabby recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/Ugasutun/fundflow.git

# Navigate into the project
cd fundflow

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Environment variables

No API keys are required for basic usage. Both the Drips GraphQL API and GitHub REST API are publicly accessible.

For higher GitHub API rate limits, create a `.env` file in the root:

```env
VITE_GITHUB_TOKEN=your_github_personal_access_token
```

---

## Project structure
fundflow/
├── src/
│   ├── lib/
│   │   ├── api/
│   │   │   ├── drips.ts          # Drips GraphQL API client
│   │   │   └── github.ts         # GitHub REST API client
│   │   ├── components/
│   │   │   ├── Navbar.svelte     # Navigation with wallet connect + theme toggle
│   │   │   ├── StreamCard.svelte # Individual funding stream display
│   │   │   ├── ProjectCard.svelte# Project card for explorer
│   │   │   └── Skeleton.svelte   # Loading skeleton screens
│   │   └── stores/
│   │       ├── wallet.ts         # Wallet connection state
│   │       └── theme.ts          # Dark/light mode state
│   └── routes/
│       ├── +page.svelte                    # Homepage
│       ├── explore/+page.svelte            # Project explorer
│       └── profile/[address]/+page.svelte  # Contributor profile
├── static/
├── CONTRIBUTING.md
├── README.md
└── package.json

---

## How it works

1. **Connect your wallet** — FundFlow reads your public Ethereum address
2. **Fetches your streams** — queries the Drips GraphQL API for all incoming and outgoing funding streams associated with your address
3. **Fetches your GitHub data** — optionally link your GitHub username to display your repos and identity alongside your on-chain data
4. **Displays everything** — presents your funding activity in a clean, readable dashboard

> FundFlow is read-only. It never asks you to sign a transaction or send funds.

---

## Contributing

We welcome contributions of all kinds! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get started.

Looking for something to work on? Check out our [open issues](https://github.com/Ugasutun/fundflow/issues) — issues labeled `good first issue` are great for newcomers.

---

## Roadmap

- [ ] Token price conversion (DAI → USD)
- [ ] Contributor leaderboard page
- [ ] WalletConnect v2 support
- [ ] ENS reverse lookup on profile pages
- [ ] Drips splits visualizer
- [ ] Project detail page
- [ ] Mobile responsive navigation
- [ ] Transaction history on profile page
- [ ] Search by wallet address or ENS name

---

## License

MIT — feel free to use this project as a reference or build on top of it.

---

## Acknowledgements

Built on top of the [Drips protocol](https://drips.network) by [Radicle](https://radicle.xyz).