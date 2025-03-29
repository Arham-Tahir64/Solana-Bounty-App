import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Trophy, User, List, Plus, X } from 'lucide-react';
import AllBounties from './tabs/AllBounties';
import Leaderboard from './tabs/Leaderboard';
import Profile from './tabs/Profile';
import CreateBounty from './modals/CreateBounty';

const tabs = [
  { id: 'bounties', label: 'All Bounties', icon: List },
  { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
  { id: 'profile', label: 'Profile', icon: User },
];

export default function Layout() {
  const [activeTab, setActiveTab] = useState('bounties');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { connected } = useWallet();

  return (
    <div className="min-h-screen bg-secondary text-white">
      <header className="bg-secondary-light border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-primary">Solana Bounties</h1>
              <nav className="hidden md:flex items-center space-x-6">
                {tabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      activeTab === id
                        ? 'bg-primary text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              {connected && (
                <button 
                  onClick={() => setIsCreateModalOpen(true)}
                  className="flex items-center space-x-2 bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg transition-colors"
                >
                  <Plus size={20} />
                  <span>Create Bounty</span>
                </button>
              )}
              <WalletMultiButton className="!bg-primary hover:!bg-primary-dark" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'bounties' && <AllBounties />}
        {activeTab === 'leaderboard' && <Leaderboard />}
        {activeTab === 'profile' && <Profile />}
      </main>

      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-secondary-light rounded-xl w-full max-w-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold">Create New Bounty</h2>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <CreateBounty onClose={() => setIsCreateModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}