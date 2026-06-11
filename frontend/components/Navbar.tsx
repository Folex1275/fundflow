'use client';
import Link from 'next/link';
import { useWallet } from '@/lib/wallet';

export default function Navbar() {
  const { address, isConnected, isConnecting, connect, disconnect } = useWallet();

  const short = address
    ? `${address.slice(0, 4)}...${address.slice(-4)}`
    : null;

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-semibold text-lg tracking-tight">
            ◈ FundFlow
          </Link>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/pools" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Pools
            </Link>
            <Link href="/dashboard" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Dashboard
            </Link>
          </div>
        </div>
        <div>
          {isConnected ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono text-gray-500">{short}</span>
              <button
                onClick={disconnect}
                className="text-sm px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <button
              onClick={connect}
              disabled={isConnecting}
              className="text-sm px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {isConnecting ? 'Connecting...' : 'Connect Freighter'}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}