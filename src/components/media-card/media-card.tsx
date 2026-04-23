interface MediaCardProps {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function MediaCard({
  src = "/images/inkbridge-house-small.png",
  alt = "Card image",
  title = "Card title",
  description = "A short description of the card content.",
  className = "w-64",
}: MediaCardProps) {
  return (
    <div className={`rounded-xl overflow-hidden border border-gray-200 bg-white ${className}`}>
      <img src={src} alt={alt} className="w-full h-40 object-cover" />
      <div className="p-4 space-y-1">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
}
