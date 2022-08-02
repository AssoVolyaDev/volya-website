import React, { MutableRefObject, useCallback, useEffect, useRef } from 'react'

const OutsideClickerInterceptor = ({ enabled, exceptionRef, onIntercept, children }: { exceptionRef: MutableRefObject<HTMLInputElement>; enabled: boolean; onIntercept: () => void; children: JSX.Element | JSX.Element[] }) => {
  const ref = useRef(null)

  const clickListener = useCallback(
    (e: MouseEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (enabled && !(ref.current! as any).contains(e.target) && !(exceptionRef.current! as any).contains(e.target)) {
        onIntercept()
      }
    },
    [ref, enabled, exceptionRef, onIntercept]
  )

  useEffect(() => {
    document.addEventListener('click', clickListener)
    return () => {
      document.removeEventListener('click', clickListener)
    }
  }, [clickListener, enabled])

  return <div ref={ref}>{children}</div>
}

export default OutsideClickerInterceptor
