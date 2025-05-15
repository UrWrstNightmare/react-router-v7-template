import { useEffect, useRef } from "react"

const useOutsideClick = <T extends HTMLElement = HTMLDivElement>(
  callback: () => void, // 외부 클릭 시 실행할 함수
) => {
  const ref = useRef<T>(null) // 외부 클릭 감지 대상 요소의 ref
  const callbackRef = useRef<() => void>(callback)
  // callback함수를 저장하는 ref. callback함수가 변경되면 최신 상태 유지

  useEffect(() => {
    callbackRef.current = callback // callback이 변경될 때마다 callbackRef.current업데이트
  }) //callback이 의존성 배열에 없어도 최신 상태를 유지

  // 클릭 이벤트 리스너 설정
  useEffect(() => {
    const clickHandler = (e: globalThis.MouseEvent) => {
      if (!(ref.current as HTMLElement)?.contains(e.target as HTMLElement)) {
        callbackRef.current() // 클릭된 요소가 대상 요소 내부에 없으면 callback 호출
      }
    }

    window.addEventListener("click", clickHandler)

    return () => {
      window.removeEventListener("click", clickHandler)
    }
  }, [])

  return ref
}

export default useOutsideClick


{/** 사용 예시
const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <div ref={ref}>
          <p>This is a modal.</p>
        </div>
      )}
    </div>
  );
}; */}