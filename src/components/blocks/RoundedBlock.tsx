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
      className={`grid sm:gap-5 gap-3 sm:p-4 p-2 bg-white rounded-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
