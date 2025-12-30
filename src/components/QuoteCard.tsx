import { Quote } from "@/types/quote";

interface QuoteCardProps {
  quote: Quote;
  onDelete: (id: string) => void;
}

export default function QuoteCard({ quote, onDelete }: QuoteCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 p-6 border-l-4 border-purple-500 relative group">
      <button
        onClick={() => onDelete(quote.id)}
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Delete quote"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="pr-8">
        <p className="text-gray-800 dark:text-gray-100 text-lg italic mb-4 leading-relaxed">
          &ldquo;{quote.text}&rdquo;
        </p>
        <div className="flex items-center justify-between">
          <p className="text-purple-600 dark:text-purple-400 font-semibold">
            — {quote.author}
          </p>
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {quote.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
}

