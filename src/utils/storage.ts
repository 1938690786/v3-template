// Storage Keys
const STORAGE_KEYS = {
    TOKEN: 'token',
} as const

// Token
export function getToken() {
    return localStorage.getItem(STORAGE_KEYS.TOKEN)
}

export function setToken(token: string) {
    localStorage.setItem(STORAGE_KEYS.TOKEN, token)
}

export function removeToken() {
    localStorage.removeItem(STORAGE_KEYS.TOKEN)
}
