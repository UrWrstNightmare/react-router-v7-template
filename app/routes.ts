import { type RouteConfig } from "@react-router/dev/routes";// 라우트 설정 타입
import { flatRoutes } from "@react-router/fs-routes";// 파일 시스템 기반 라우트 생성

export default flatRoutes() satisfies RouteConfig;
// flatRoutes()를 호출하여 라우트 설정을 생성합니다.
// satisfies 키워드를 사용하여 타입 체크를 수행합니다.
// 생성된 라우트 설정이 RouteConfig 타입을 만족하는지 확인합니다.

// 라우트 설정 타입 정의
// export type RouteConfig = {
//   path: string;
//   element: React.ReactNode;
// };

// 파일 시스템 기반 라우팅:
// 파일 시스템의 구조를 기반으로 라우트를 자동으로 생성
// app/routes 디렉토리의 파일 구조가 URL 구조를 결정

// 타입 안정성:
// RouteConfig 타입을 사용하여 라우트 설정의 타입 안정성을 보장
// satisfies 키워드를 통해 타입 체크를 수행

// 간단한 설정:
// 복잡한 라우트 설정 코드를 작성할 필요가 없음
// 파일 시스템 구조만으로 라우트를 관리

// 유지보수성:
// 라우트 구조를 파일 시스템으로 관리하여 유지보수가 용이
// 새로운 라우트를 추가하거나 수정하기 쉬움