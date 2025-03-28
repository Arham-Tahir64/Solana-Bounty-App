import React from 'react';
import { Clock, DollarSign, Tag } from 'lucide-react';

const mockBounties = [
  {
    id: 1,
    title: 'Implement Smart Contract Testing Suite',
    description: 'Create a comprehensive testing suite for our NFT marketplace smart contract',
    reward: 2.5,
    deadline: '2024-04-15',
    tags: ['Smart Contracts', 'Testing', 'Solidity'],
  },
  {
    id: 2,
    title: 'Design Token Economics Model',
    description: 'Develop a sustainable token economics model for our DeFi protocol',
    reward: 5.0,
    deadline: '2024-04-20',
    tags: ['DeFi', 'Tokenomics', 'Research'],
  },
];

export default function AllBounties() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Available Bounties</h2>
        <div className="flex space-x-4">
          <select className="bg-secondary-light text-white border border-gray-700 rounded-lg px-4 py-2">
            <option>Latest First</option>
            <option>Highest Reward</option>
            <option>Ending Soon</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {mockBounties.map((bounty) => (
          <div
            key={bounty.id}
            className="bg-secondary-light rounded-xl p-6 border border-gray-800 hover:border-primary transition-colors"
          >
            <h3 className="text-xl font-semibold mb-3">{bounty.title}</h3>
            <p className="text-gray-400 mb-4">{bounty.description}</p>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center text-primary">
                <DollarSign size={20} className="mr-1" />
                <span className="font-semibold">{bounty.reward} SOL</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock size={20} className="mr-1" />
                <span>{bounty.deadline}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {bounty.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center px-3 py-1 rounded-full bg-secondary text-sm text-gray-400 border border-gray-700"
                >
                  <Tag size={14} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}