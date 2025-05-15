// WARNING: MUST BE CALLED IN A BROWSER ENVIRONMENT

const LOCAL_STORAGE_SET_EVENT = "local-storage-set"; 
// 이 상수는 localStorage 변경 이벤트의 이름을 "local-storage-set"으로 정의

export const getLocalStorageItem = (key: string) => localStorage.getItem(key); // 지정된 키에 대한 값 가져오기

export const setLocalStorageItem = (key: string, value: string) => { 
  localStorage.setItem(key, value);
  window.dispatchEvent(new Event(LOCAL_STORAGE_SET_EVENT)); 
  // 이벤트 발생
  // 다른 탭이나 창에서 localStorage 변경을 감지하는 데 사용
}; 

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
  window.dispatchEvent(new Event(LOCAL_STORAGE_SET_EVENT)); // 이벤트 발생
};

// 이벤트 구독 함수 - localStorage 변경될 때 실행될 콜백함수 등록
export const subscribeLocalStorageSet = (callback: () => void) => {
  window.addEventListener(LOCAL_STORAGE_SET_EVENT, callback); // 이벤트 리스너 추가
};
// 이벤트 구독 해제 함수 - 등록된 콜백함수 제거
export const unsubscribeLocalStorageSet = (callback: () => void) => {
  window.removeEventListener(LOCAL_STORAGE_SET_EVENT, callback); // 이벤트 리스너 제거
};


// 전체 흐름
// 초기 설정:
// subscribeLocalStorageSet을 호출하여 이벤트 리스너를 등록
// 이 리스너는 localStorage 변경 시 실행될 콜백 함수를 지정

// 이벤트 발생:
// setLocalStorageItem 또는 removeLocalStorageItem이 호출되면 LOCAL_STORAGE_SET_EVENT 이벤트가 발생
// 이 이벤트는 등록된 콜백 함수를 실행

// 이벤트 해제:
// 더 이상 이벤트를 감지할 필요가 없을 때 unsubscribeLocalStorageSet을 호출하여 이벤트 리스너를 제거
// 이는 메모리 누수를 방지하고 성능을 최적화