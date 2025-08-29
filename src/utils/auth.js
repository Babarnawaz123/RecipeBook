const KEY = 'user'

export const getUser = () => {
  try { return JSON.parse(localStorage.getItem(KEY) || 'null') } catch { return null }
}
export const isAuthenticated = () => Boolean(getUser())
export const logout = () => localStorage.removeItem(KEY)

export const signup = async ({ email, password }) => {
  if (!email || !password) throw new Error('Email and password are required')
  localStorage.setItem(KEY, JSON.stringify({ email }))
  return { email }
}

export const signin = async ({ email, password }) => {
  if (!email || !password) throw new Error('Email and password are required')
  localStorage.setItem(KEY, JSON.stringify({ email }))
  return { email }
}
