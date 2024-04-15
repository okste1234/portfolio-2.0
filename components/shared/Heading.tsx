export default function Heading({ title, subtitle }: HeadingPropType) {
  return (
    <div className="my-6 space-y-2">
      <h2 className="w-max text-2xl font-semibold">{title}</h2>
      <p className="max-w-xl text-sm md:text-base leading-relaxed text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}
