import { useEffect, useState } from 'react'

import { useHoverStateValue } from '../store/HoverState'

type UseOpacityAdjuster = {
  referenceEl: React.Ref<JSX.Element>
}

const useOpacityAdjuster = ({ referenceEl }: UseOpacityAdjuster) => {
  const [shouldReduceOpacity, setShouldReduceOpacity] = useState(false)
  const [{ hoveredElement }] = useHoverStateValue()

  useEffect(() => {
    let timeout: number

    if (hoveredElement) {
      if (hoveredElement !== referenceEl) {
        setShouldReduceOpacity(true)
      } else {
        setShouldReduceOpacity(false)
      }
    } else if (!hoveredElement && shouldReduceOpacity) {
      timeout = window.setTimeout(() => setShouldReduceOpacity(false), 100)
    }

    return () => clearTimeout(timeout)
  }, [hoveredElement, shouldReduceOpacity, referenceEl])

  return { shouldReduceOpacity }
}

export default useOpacityAdjuster
