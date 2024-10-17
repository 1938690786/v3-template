function useEnv(env?: string) {
  const { VITE_APP_MODE } = import.meta.env
  if (env) {
    if (env === 'development')
      return VITE_APP_MODE === 'development'
    if (env === 'test')
      return VITE_APP_MODE === 'test'
    if (env === 'production')
      return VITE_APP_MODE === 'production'
    return env === VITE_APP_MODE
  }
  return VITE_APP_MODE
}

export { useEnv }
