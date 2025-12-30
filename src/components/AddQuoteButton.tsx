interface AddQuoteButtonProps {
  onClick: () => void;
}

export default function AddQuoteButton({ onClick }: AddQuoteButtonProps) {
  return (
    <div className="mb-8 flex justify-center">
      <button
        onClick={onClick}
        className="px-6 py-3 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
      >
        + Add New Quote
      </button>
    </div>
  );
}

