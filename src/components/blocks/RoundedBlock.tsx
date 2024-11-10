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
      className={`grid gap-5 p-4 bg-white rounded-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
