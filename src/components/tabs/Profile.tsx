import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Award, Clock, DollarSign, Star } from 'lucide-react';

const mockUserStats = {
  totalEarned: 45.8,
  completedBounties: 6,
  activeSubmissions: 2,
  reputation: 4.8,
};

const mockActiveBounties = [
  {
    id: 1,
    title: 'DeFi Protocol Security Audit',
    status: 'In Review',
    submittedAt: '2024-03-10',
  },
  {
    id: 2,
    title: 'NFT Marketplace Integration',
    status: 'Submitted',
    submittedAt: '2024-03-15',
  },
];

export default function Profile() {
  const { connected } = useWallet();

  if (!connected) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
        <p className="text-gray-400">Please connect your wallet to view your profile</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-secondary-light rounded-xl p-6 border border-gray-800">
          <div className="flex items-center space-x-3 mb-2">
            <DollarSign className="text-primary" size={24} />
            <h3 className="text-lg font-semibold">Total Earned</h3>
          </div>
          <p className="text-2xl font-bold text-primary">{mockUserStats.totalEarned} SOL</p>
        </div>

        <div className="bg-secondary-light rounded-xl p-6 border border-gray-800">
          <div className="flex items-center space-x-3 mb-2">
            <Award className="text-primary" size={24} />
            <h3 className="text-lg font-semibold">Completed</h3>
          </div>
          <p className="text-2xl font-bold">{mockUserStats.completedBounties} bounties</p>
        </div>

        <div className="bg-secondary-light rounded-xl p-6 border border-gray-800">
          <div className="flex items-center space-x-3 mb-2">
            <Clock className="text-primary" size={24} />
            <h3 className="text-lg font-semibold">Active</h3>
          </div>
          <p className="text-2xl font-bold">{mockUserStats.activeSubmissions} submissions</p>
        </div>

        <div className="bg-secondary-light rounded-xl p-6 border border-gray-800">
          <div className="flex items-center space-x-3 mb-2">
            <Star className="text-primary" size={24} />
            <h3 className="text-lg font-semibold">Reputation</h3>
          </div>
          <p className="text-2xl font-bold">{mockUserStats.reputation}/5.0</p>
        </div>
      </div>

      <div className="bg-secondary-light rounded-xl border border-gray-800">
        <div className="p-6 border-b border-gray-800">
          <h3 className="text-xl font-semibold">Active Submissions</h3>
        </div>
        
        {mockActiveBounties.map((bounty) => (
          <div
            key={bounty.id}
            className="p-6 border-b border-gray-800 last:border-0 hover:bg-secondary transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold mb-1">{bounty.title}</h4>
                <p className="text-gray-400">Submitted on {bounty.submittedAt}</p>
              </div>
              <span className="px-4 py-2 rounded-full bg-secondary text-primary border border-primary">
                {bounty.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}