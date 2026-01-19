// components/Heading.jsx
export default function Heading({ title, icon }) {
  return (
    <div className="flex flex-col items-center gap-2 mb-12">
      {icon && <div className="text-red-500 mb-2">{icon}</div>}
      <h2 className="text-4xl font-bold tracking-tight text-center">{title}</h2>
      <div className="h-1 w-12 bg-red-500 rounded-full" />
    </div>
  );
}