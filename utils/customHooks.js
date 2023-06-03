import { useState, useCallback } from 'react';


export function useBoolean(defaultValue) {
  const [value, setValue] = useState(!!defaultValue);

  const onOpen = useCallback(() => setValue(true), [])
  const onClose = useCallback(() => setValue(false), [])
  const onToggle = useCallback(() => setValue((prev) => !prev), [])

  return {
    value,
    onOpen,
    onClose,
    onToggle,
  }
}
