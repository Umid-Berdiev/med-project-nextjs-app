export default function Heading6({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h6 className={`mb-3 text-sm font-semibold ${className}`}>{children}</h6>
  )
}
