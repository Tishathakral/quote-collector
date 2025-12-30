"use client";

import { useState, useEffect } from "react";
import { Quote } from "@/types/quote";
import Header from "@/components/Header";
import AddQuoteButton from "@/components/AddQuoteButton";
import QuoteForm from "@/components/QuoteForm";
import QuoteList from "@/components/QuoteList";
import Stats from "@/components/Stats";

export default function Home() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [showForm, setShowForm] = useState(false);

  // Load quotes from localStorage on mount
  useEffect(() => {
    const savedQuotes = localStorage.getItem("quotes");
    if (savedQuotes) {
      setQuotes(JSON.parse(savedQuotes));
    }
  }, []);

  // Save quotes to localStorage whenever quotes change
  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);

  const addQuote = (text: string, author: string) => {
    const newQuote: Quote = {
      id: Date.now().toString(),
      text,
      author,
      createdAt: new Date().toLocaleDateString(),
    };
    setQuotes([newQuote, ...quotes]);
    setShowForm(false);
  };

  const deleteQuote = (id: string) => {
    setQuotes(quotes.filter((quote) => quote.id !== id));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />

        {!showForm && <AddQuoteButton onClick={() => setShowForm(true)} />}

        {showForm && (
          <QuoteForm
            onSave={addQuote}
            onCancel={() => setShowForm(false)}
          />
        )}

        <QuoteList quotes={quotes} onDelete={deleteQuote} />

        <Stats count={quotes.length} />
      </div>
    </div>
  );
}
