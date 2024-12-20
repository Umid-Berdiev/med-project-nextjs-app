import { useContext, useMemo } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  const { user, loading, updateUser } = context

  return useMemo(
    () => ({ user, loading, updateUser }),
    [user, loading, updateUser]
  )
}
