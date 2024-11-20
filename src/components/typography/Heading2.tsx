export default function Heading2({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2 className={`text-[40px] font-semibold ${className}`}>{children}</h2>
  )
}
