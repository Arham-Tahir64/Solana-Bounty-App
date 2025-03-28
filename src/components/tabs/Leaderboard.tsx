import React from 'react';
import { Trophy, Wallet } from 'lucide-react';

const mockLeaderboard = [
  {
    rank: 1,
    wallet: '7xKX...9Yka',
    earnings: 125.5,
    completedBounties: 15,
  },
  {
    rank: 2,
    wallet: '3mNB...4Pqx',
    earnings: 98.2,
    completedBounties: 12,
  },
  {
    rank: 3,
    wallet: '9vRT...2Wzb',
    earnings: 76.8,
    completedBounties: 9,
  },
];

export default function Leaderboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Top Earners</h2>
      
      <div className="bg-secondary-light rounded-xl border border-gray-800">
        <div className="grid grid-cols-4 gap-4 p-4 border-b border-gray-800 font-semibold">
          <div>Rank</div>
          <div>Wallet</div>
          <div>Total Earned</div>
          <div>Completed</div>
        </div>
        
        {mockLeaderboard.map((entry) => (
          <div
            key={entry.wallet}
            className="grid grid-cols-4 gap-4 p-4 border-b border-gray-800 last:border-0 hover:bg-secondary transition-colors"
          >
            <div className="flex items-center">
              {entry.rank === 1 && <Trophy className="text-yellow-500 mr-2" size={20} />}
              {entry.rank === 2 && <Trophy className="text-gray-400 mr-2" size={20} />}
              {entry.rank === 3 && <Trophy className="text-amber-700 mr-2" size={20} />}
              {entry.rank > 3 && <span className="ml-2">{entry.rank}</span>}
            </div>
            <div className="flex items-center">
              <Wallet size={16} className="mr-2 text-primary" />
              {entry.wallet}
            </div>
            <div className="text-primary font-semibold">{entry.earnings} SOL</div>
            <div>{entry.completedBounties} bounties</div>
          </div>
        ))}
      </div>
    </div>
  );
}