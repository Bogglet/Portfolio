type Props = { className?: string; full?: boolean };

// The wordmark PNG is used as a CSS mask so it takes the current text color.
export function Logo({ className = "", full = false }: Props) {
  const src = full ? "/brand/logo-full.png" : "/brand/wordmark.png";
  const ratio = full ? 1985 / 333 : 914 / 214;
  return (
    <span
      role="img"
      aria-label="Bogglet Innovations"
      className={`logo-mask inline-block h-7 ${className}`}
      style={{ maskImage: `url(${src})`, WebkitMaskImage: `url(${src})`, aspectRatio: ratio }}
    />
  );
}
