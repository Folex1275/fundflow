'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@/lib/wallet';
import { createPool } from '@/lib/api';

export default function CreatePoolPage() {
  const router = useRouter();
  const { address, isConnected, connect } = useWallet();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    description: '',
    amount: '',
    deadline: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!address) return;
    setLoading(true);

    const result = await createPool({
      name: form.name,
      description: form.description,
      amount: Number(form.amount) * 10_000_000,
      deadline: Math.floor(new Date(form.deadline).getTime() / 1000),
      creator: address,
    });

    setLoading(false);
    if (result) router.push('/pools');
  }

  if (!isConnected) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 mb-4">Connect your Freighter wallet to create a pool</p>
        <button
          onClick={connect}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          Connect Freighter
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 mb-2">
        Create a grant pool
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Deposit XLM into a Soroban smart contract and accept contributor applications.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Pool name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="e.g. Stellar Dev Fund Q3"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm outline-none focus:border-blue-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows={3}
            placeholder="What is this grant pool for?"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm outline-none focus:border-blue-400 transition-colors resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Amount (XLM)
          </label>
          <input
            name="amount"
            type="number"
            value={form.amount}
            onChange={handleChange}
            required
            min="1"
            placeholder="e.g. 1000"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm outline-none focus:border-blue-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Application deadline
          </label>
          <input
            name="deadline"
            type="date"
            value={form.deadline}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm outline-none focus:border-blue-400 transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors mt-2"
        >
          {loading ? 'Creating pool...' : 'Create pool'}
        </button>
      </form>
    </div>
  );
}