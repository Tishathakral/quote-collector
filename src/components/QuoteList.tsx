import { Quote } from "@/types/quote";
import QuoteCard from "./QuoteCard";
import EmptyState from "./EmptyState";

interface QuoteListProps {
  quotes: Quote[];
  onDelete: (id: string) => void;
}

export default function QuoteList({ quotes, onDelete }: QuoteListProps) {
  if (quotes.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-4">
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} onDelete={onDelete} />
      ))}
    </div>
  );
}

