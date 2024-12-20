import React from 'react'
import { AuthProvider } from '../contexts/AuthContext'
type Props = {
  children: React.ReactNode
}
export const Providers = (props: Props) => {
  // Props
  const { children } = props
  return <AuthProvider>{children}</AuthProvider>
}
