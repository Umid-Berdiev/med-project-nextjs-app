export default function Heading1({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1
      className={`text-left text-2xl font-semibold text-[#232427] ${className}`}
    >
      {children}
    </h1>
  )
}
