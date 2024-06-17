// pages/dapps.js
import Head from 'next/head';

export default function Defi() {
  return (
    <div style={styles.container}>
      <Head>
        <title>CryptoSafe - DApps</title>
        <meta name="description" content="De-Fi Services for your Crypto Wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={styles.header}>
        <h1 style={styles.title}>CryptoSafe</h1>
        <nav style={styles.nav}>
          <a style={styles.navItem} href="/">Home</a>
          <a style={styles.navItem} href="/wallets">Wallets</a>
          <a style={styles.navItem} href="/transactions">Transactions</a>
          <a style={styles.navItem} href="/settings">Settings</a>
          <a style={{...styles.navItem, ...styles.activeNavItem}} href="/dapps">DApps</a>
        </nav>
      </header>

      <main style={styles.main}>
        <h2 style={styles.sectionTitle}>Available De-Fi Services</h2>
        <div style={styles.dappList}>
          <div style={styles.dappCard}>
            <h3 style={styles.dappTitle}>Uniswap</h3>
            <p style={styles.dappDescription}>A decentralized exchange for swapping ERC-20 tokens.</p>
            <a style={styles.dappLink} href="https://uniswap.org" target="_blank" rel="noopener noreferrer">Visit Uniswap</a>
          </div>
          <div style={styles.dappCard}>
            <h3 style={styles.dappTitle}>Aave</h3>
            <p style={styles.dappDescription}>A decentralized lending and borrowing platform.</p>
            <a style={styles.dappLink} href="https://aave.com" target="_blank" rel="noopener noreferrer">Visit Aave</a>
          </div>
          <div style={styles.dappCard}>
            <h3 style={styles.dappTitle}>Compound</h3>
            <p style={styles.dappDescription}>An algorithmic, autonomous interest rate protocol.</p>
            <a style={styles.dappLink} href="https://compound.finance" target="_blank" rel="noopener noreferrer">Visit Compound</a>
          </div>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#181818',
    color: '#FFFFFF',
    minHeight: '100vh',
    padding: '0 2rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',
    borderBottom: '1px solid #333',
  },
  title: {
    fontSize: '1.5rem',
    color: '#FFFFFF',
  },
  nav: {
    display: 'flex',
  },
  navItem: {
    marginLeft: '2rem',
    color: '#AAA',
    textDecoration: 'none',
  },
  activeNavItem: {
    color: '#FFFFFF',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  dappList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  dappCard: {
    backgroundColor: '#222',
    borderRadius: '0.5rem',
    padding: '1rem 2rem',
    marginBottom: '2rem',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0 0 15px rgba(138, 43, 226, 0.5)',
    textAlign: 'center',
  },
  dappTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  dappDescription: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  dappLink: {
    color: '#8A2BE2',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
