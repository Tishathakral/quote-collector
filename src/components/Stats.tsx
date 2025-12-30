interface StatsProps {
  count: number;
}

export default function Stats({ count }: StatsProps) {
  if (count === 0) return null;

  return (
    <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
      <p className="text-sm">
        You have collected{" "}
        <span className="font-semibold text-purple-600 dark:text-purple-400">
          {count}
        </span>{" "}
        {count === 1 ? "quote" : "quotes"}
      </p>
    </div>
  );
}

