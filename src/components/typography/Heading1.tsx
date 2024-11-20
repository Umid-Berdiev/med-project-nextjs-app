export default function Heading1({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1
      className={`mb-[18px] text-left text-[23px] font-semibold leading-8 text-[#232427] ${className}`}
    >
      {children}
    </h1>
  )
}
