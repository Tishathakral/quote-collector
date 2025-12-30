"use client";

import { useState, FormEvent } from "react";

interface QuoteFormProps {
  onSave: (text: string, author: string) => void;
  onCancel: () => void;
}

export default function QuoteForm({ onSave, onCancel }: QuoteFormProps) {
  const [quoteText, setQuoteText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (quoteText.trim() && author.trim()) {
      onSave(quoteText.trim(), author.trim());
      setQuoteText("");
      setAuthor("");
    }
  };

  const handleCancel = () => {
    setQuoteText("");
    setAuthor("");
    onCancel();
  };

  return (
    <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Add a New Quote
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Quote
          </label>
          <textarea
            value={quoteText}
            onChange={(e) => setQuoteText(e.target.value)}
            placeholder="Enter your quote here..."
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
            rows={4}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author name..."
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Save Quote
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

