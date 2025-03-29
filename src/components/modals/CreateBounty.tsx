import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Calendar, DollarSign, Hash, X } from 'lucide-react';

interface CreateBountyProps {
  onClose: () => void;
}

export default function CreateBounty({ onClose }: CreateBountyProps) {
  const { publicKey } = useWallet();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [reward, setReward] = useState('');
  const [deadline, setDeadline] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');

  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implementation for creating bounty will go here
    console.log({
      title,
      description,
      reward,
      deadline,
      tags,
      creator: publicKey?.toBase58()
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-secondary border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
            placeholder="Enter bounty title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-secondary border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary h-32"
            placeholder="Describe the bounty requirements"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              <div className="flex items-center space-x-2">
                <DollarSign size={16} />
                <span>Reward (SOL)</span>
              </div>
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              value={reward}
              onChange={(e) => setReward(e.target.value)}
              className="w-full bg-secondary border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
              placeholder="0.0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>Deadline</span>
              </div>
            </label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full bg-secondary border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            <div className="flex items-center space-x-2">
              <Hash size={16} />
              <span>Tags</span>
            </div>
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              className="flex-1 bg-secondary border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
              placeholder="Add tags"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg transition-colors"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center space-x-2 bg-secondary px-3 py-1 rounded-full text-sm text-gray-400 border border-gray-700"
              >
                <span>{tag}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-4 border-t border-gray-800">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 bg-secondary hover:bg-secondary-light rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-primary hover:bg-primary-dark rounded-lg transition-colors"
        >
          Create Bounty
        </button>
      </div>
    </form>
  );
}