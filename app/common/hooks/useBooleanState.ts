import { useCallback, useState } from "react"

const useBooleanState = () => {
  const [booleanState, setBooleanState] = useState<boolean>(false)

  const toggleVisible = useCallback(() => {
    setBooleanState((prev) => !prev)
  }, [])

  return [booleanState, setBooleanState, toggleVisible] as const
  //as const를 사용하여 반환값의 타입을 튜플로 고정
}
export default useBooleanState
