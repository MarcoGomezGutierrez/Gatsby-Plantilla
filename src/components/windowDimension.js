import { useEffect, useState } from "react";

export default function useWindowDimensions() {
    const isBrowser = typeof window !== 'undefined'
    const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

    useEffect(() => {
        if (!isBrowser) return false

        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return width
}
