export default function Heading4({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h4 className={`text-2xl font-semibold ${className}`}>
      {children}
    </h4>
  )
}
