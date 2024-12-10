export default function RoundedBlock({
  children,
  className,
  shadow,
  onClick
}: {
  children?: React.ReactNode
  className?: string
  shadow?: boolean
  onClick?: () => void
}) {
  return (
    <div
      className={`flex flex-col gap-3 rounded-xl bg-white p-2 sm:gap-5 sm:p-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
