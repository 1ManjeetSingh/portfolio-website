export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/20 backdrop-blur-sm p-8 shadow-sm hover:shadow-xl transition-all duration-500 ${className}`}>
      {children}
    </div>
  );
}