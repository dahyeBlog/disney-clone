## Disney Clone
- Clever Programmer - 디지니+ 사이트 클론
- YouTube : https://www.youtube.com/watch?v=R_OERlafbmw

### 사용한 도구
- React, Redux, Firebase, Styled Components


### 사용한 라이브러리
- npm install firebase
- npm i styled-components
- npm install react-router-dom@6.2.2
- npm install @reduxjs/toolkit react-redu
- 

### 참고 사이트 
- 리덕스 툴킷(공식사이트):[https://redux-toolkit.js.org/tutorials/quick-start]

### 프로젝트를 통해 배운 내용 정리
1. Styled-commponents 사용
```
// 조건부 스타일링

const SignOut = styled.div`

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
```

2. 리덕스 직렬화 이해하기
```
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
// configureStore 함수는 리덕스 라이브러리의 createStore함수를 추상화한 것이다. 기존의 리덕스 설정을 간편하게 해준다.

export const store = configureStore({
  reducer: { user: userReducer },

  middleware: (getDefaultMiddleware) =>
    // 액션이 리듀서에 전달되기 전에 미들웨어를 사용하여 함수를 담는다.
    // 사용할 모든 미들웨어는 배열에 담아서 명시할 수 있다.
    // getDefaultMiddleware는 기본적인 미들웨어를 설정하는 것이다.

    getDefaultMiddleware({
      serializableCheck: false,
      // js에서 사용하는 데이터 타입은 주로 object 이다. 그런데 다른 언어나 환경에서 사용사는 데이터 타입이 다르기 때문에, 해당 데이터 타입을 변화하는 작업이 필요하다 이를 (serializableCheck) 직렬화라고 한다. 리덕스는 일반적으로 직렬화타입을 저장하지 않기를 권장한다. store의 일관성 유지 및 복원기능 디버깅에서 방해를 받을 수 있기 때문이다.  redux 가 데이터 변화 감지 비교 할 때 shallow-equalty 를 기준으로 작업을 수행하기 때문에, 에러를 동반하는 비동기 값이나, 값이 상황에 따라 변화할 수 있는 데이터 값을 저장했다가는 모든 데이터를 다 덮어 쓰기 때문에 꺼려하는 것이다.참고로 서비스를 운영하는데 non-serializable 타입 데이터를 꼭 store 에 저장해서 공유해야한다면, redux 설정에서 미들웨어 설정 시, serializableCheck 를 false 로 설정하면 된다.
    }),
});

► 직렬화란?
 - 예를 들어 localstorage는 값으로 string 가능하지만, object는 불가능하다. 이때 json.stringify를 통해 (object 를 string)으로 바꿀 수 가 있는데, 이것을 직렬화라고 한다. 반대로 json.parse 를 통해 (string 에서 object) 으로 바꿀 수 있다.

 - 리덕스에서는 function, promise 등과 같은 non-serializable type 은 저장되지만, 표시를 하지 않는다.
 - 리덕스에서는 직렬화 할수 없는 것을 state, action 값에 넣지 말하야한다.
 - 하지만, 직렬화 할 수 밖에 없는 데이터를 수락해야 하는 작업의 경우는 아래와 같은 코드를 입력한다. 

   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

```




### 오류해결

1. 발생한 오류
- 이 에러는 리액트 개발에 사용하는 jsx에서 발생하는데 즉, 나의 경우은 <a>태그 안에 <a>태그를 사용한 것이다. 

```
react-dom.development.js:86 Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>.
```

2. 
```

```
