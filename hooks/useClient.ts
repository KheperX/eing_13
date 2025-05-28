import { useEffect, useState } from 'react'

export function useIsClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}

export function useLocalStorage(key: string, initialValue: string | null = null) {
  const [storedValue, setStoredValue] = useState<string | null>(initialValue)
  const isClient = useIsClient()

  useEffect(() => {
    if (isClient) {
      try {
        const item = window.localStorage.getItem(key)
        setStoredValue(item)
      } catch (error) {
        console.log(error)
        setStoredValue(initialValue)
      }
    }
  }, [key, initialValue, isClient])

  const setValue = (value: string | null) => {
    try {
      setStoredValue(value)
      if (isClient) {
        if (value === null) {
          window.localStorage.removeItem(key)
        } else {
          window.localStorage.setItem(key, value)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue] as const
}
