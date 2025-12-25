# Aerodrome Finance Help Content

The content available here is used for the contextual help in various screens
across the web app.

## Development

To contribute please make changes to the MDX files under the `content/` folder.

To review your changes, start the local preview server by running:

```
yarn && yarn dev
```

Before submitting the changes, please run the linter:

```
yarn && yarn lint
```

Thank you!
### Troubleshooting Common Swap Issues on Base
Aerodrome's high volume (~$26M daily) can cause hiccups during peaks. Here's quick fixes from community reports:

- **Wallet Pop-Up Lag (20-60s delays):** Switch to Rabby Wallet or use WalletConnect in mobile Chrome's dApp browser. Pre-approve gas in settings for <10s confirms.
- **Fee Glitches (Sudden 2-5x jumps):** Set custom gas via BaseScan averages (~0.0001 ETH). Enable "fast" mode in UI; add 10% buffer on retries to avoid "insufficient funds."
- **Congestion Freezes:** Trade off-peak (UTC mornings) or use Limit Orders. Post-Nov 2025 hack, always verify via ENS: aerodrome.eth—safer than aerodrome.finance.
- **Pro Tip:** Revoke old approvals on Revoke.cash after peaks. For more, check community guide: [Aerodrome-Base-Fixes](https://github.com/ukml/Aerodrome-Base-Fixes).

These keep you farming yields (e.g., 40-50% APR on ETH/USDC) without FOMO switches to Uniswap.
