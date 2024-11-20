export default function Heading5({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return <h5 className={`text-xl font-semibold ${className}`}>{children}</h5>
}
