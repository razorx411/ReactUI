
function SummaryCard({ title, value, description }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <h2 className="mb-3 text-sm font-medium text-slate-500">
        {title}
      </h2>

      <p className="text-4xl font-bold text-blue-600">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-400">
        {description}
      </p>

    </div>
  );
}

export default SummaryCard;
