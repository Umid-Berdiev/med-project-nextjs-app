'use client'

import type { ReactNode } from 'react'
import { createContext, useState, useCallback } from 'react'
import { IUser } from '../utils/interfaces'

type AuthContextProps = {
  user: IUser | null
  loading: boolean
  updateUser: (user: Partial<IUser>) => void
}

type Props = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const updateUser = useCallback(
    (newUser: Partial<IUser>) => {
      setLoading(false)

      setUser(newUser as IUser)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  )

  return (
    <AuthContext.Provider value={{ user, loading, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}
