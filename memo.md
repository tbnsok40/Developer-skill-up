- vanilla 완료 후 리액트까지 끝내고 푸쉬까지 할 것

- 아마란스 api 호출하면 되기에, 백엔드 언어를 굳이 안탈 것 같다.

- js 스터디 논의

- 유효성에 맞지 않은 값이 들어오면 날려버리도록 html 효과 주자 .

- isNan, parseInt()

- 코드 리뷰 => prototype

- deep copy

- 주어진 문제에서 가장 간단하게 풀 수 있는 방법을 궁리할 것 => 배열을 하나만 사용한다던가. 

- 부동소수점

- JS : splice, slice 기록

- React 란 ?

- react로 만들면 어떤 생각을 가지고 만들어야 하는지.

- 리액트
돔을 찾아서 값을 바꾸는 것이 아니라,
미리 바인딩한 값을 돔에서 자동으로 변경시키는 것.


- 바닐라가 양방향 바인딩인 이유: dom 에서 값을 빼낸 후 연산하고 , 다시 dom을 업데이트 치기 때문에
- 반면 react 는 dom에서 값을 빼오지 않는다. 그냥 돔 내부에 바인딩 해놓은 값을 업데이트만 친다. 

- 돔의 요소와 바인딩 된 데이터를 state 라고 한다.
- 모든 데이터를 state에 넣은 것: 가장 큰 실수 of React 제작

- state 가 아닌 그냥 변수를 바인딩하여 값을 바꾸려고 하면, 렌더링이 돌지 않아서 리액트가 값이 변한지 모른다.

### 황지훈님이 push시킨 arr는 state이긴 하지만, dom에 바인딩 돼있지 않기 때문에, setArr이 아닌 push를 쳐도 값이 변할 수 있었다.

gi- 결국 useState()로 만들 값들은 dom에 바인딩할 값으로 한정하면 된다.

- component 화

- 배포: netlify -> cra 로 배포하기 가장 간단. 

- cra를 그대로 깃에 바인딩히야한다.
- 폴더 구조 하위에 있으면 yarn build를 해주어야한다. cra 그래도 깃에 매핑하면 바로 배포된다.


리액트
- 처음 만들 때, 
- 컴포넌트를 몇개로 할 것인가 정하고, 
- state, props 를 정하라.

- 마크업 팀에 수정 요청도 보낼 수 있어야한다. -> 개발할 때를 고려해서. 
- contact app : 구조 관리 좀 해봐

- 하나의 라이프 사이클은 render 의 사이클을 뜻함
- 라이프 사이클은 함수형에도 유효한 내용이다.

- state가 변할 때 라기 보다, setState() 함수가 호출될 때, 화면이 변한다. 

- 우리가 흔히 아는 render 를 세분화하면, shouldComponentUpdate 등으로 나뉜다.

- App 이 render 되면, 그 하위 모든 컴포넌트들이 rendering 된다.

- shouldComponentUpdate 가 false 되면 해당 컴포넌트 렌더링이 돌지 않느다 => 속도는 빨라짐
- 문제는 진짜 바뀌어야 할 때, 변하지 않는 문제가 발생하다 => hell
- PureComponent -> 다른 컴포넌트의 state 에 의해 내 state 가 변하지 않는다. 
- memo hooks

- memo 에서, arr = [] 를 변경할 때와, a = 1 을 변경할 때의 결과가 다르다. (render가 안될 수 있단 말) 
=> arr = [], ['a'] 은 참조값이 같기 때문.

- 근데,, memo 에서는 spreading 을 쓰라하는데, memo를 안쓸 때도, spreading을 써야하는거 아닌가? 왜냐면
- 어차피 참조값은 memo 를 쓰든 안쓰든 쉽게 변하지 않으니까.
- map 돌릴 때, index를 key 로 넣지말라 망한다 = > 검색할 때, 배열이 달라지면, index값이 달라져버리기 때문에, 기존의 값을 찾지 못한다 

- Next.js 는 리액트와 함께 가는 라이브러리 이다. => 쥰내 빠르다. 

- typeorm: 속도가 잘짠 쿼리보다 못할 수 있는 단점이 있다.
- typescript setting -> 책임님 readme.md

- compile error, runtime error,
- phonebook : convert to TS

- recoil 을 사용하면 React.memo를 사용하지 않아도 돤다.
- recoil 로 관리 되는 데이터에 한해서는 memo 를 사용하지 않아도 된다.


- interface 와 타입 중 하나를 고려해야할 때, 인터페이스를 우선 사용하기로 한다. 
- 인터페이스 명명은 I를 접두로 붙여준다.
- React.FC 사용하지 않는다.

- Recoil: 비동기이기 때문에 , setState 과정을 연속으로 사용해도 비동기 처리되어 한번만 렌더링 된다.

- 어느 영역까지 리코일로 처리할 것인지는 추후 논의한다. useState 와 recoil 함께 사용.

- Next.js -> server side rendering 을 위해 사용한다 ==|> ssr 을 지원하는 프레임워크: next 에 맞는 규칙에 맞게끔 강제해야한다.
- SSR, 엘리누나 ssr, csr 강의듣기 ㅠ

- typescript 기반, recoil, next.js 기반 =>  배포까지 + create/delete 까지 

- page에는 루트 만 넣을 것, 컴포넌트를 넣는 것 아니다 => components  
- next 와 react 가 공존하는 것.
  
- 흰화면과, 데이터가 없는 빈화면은 다르다. 
- .build  대신  .next
- netlify 에 next add on ㅡ을 깔아야해
- plugin tab 에서 nest.js cache 와 그 밑에 것을 인스톨(2개) => 그러고 디플로이.
- next 를 사용하는 것이 맞는데, 하다가 안될 수 도 있다.