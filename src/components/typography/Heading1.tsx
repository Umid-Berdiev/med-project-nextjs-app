export default function Heading1({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1 className={`font-serif text-left text-[23px] leading-8 mb-[18px] text-[#232427] font-semibold ${className}`}>
      {children}
    </h1>
  )
}
