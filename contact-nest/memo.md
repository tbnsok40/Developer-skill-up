`nest start --watch`

- 데이터ㅔ이스와 연결할 모델이 어던 파일과 연결돼있는지를 결정 : entities in ormconfig.json
- synchronize: code to schema => ORM(Django) 나중에는 schema to Code.

`console.log(JSON.parse(id), typeof id);`


- t.s : delete method,  id값의 형식 문제, 파싱과 스트링파이 과정 깔끔하지 않다. 파싱을 하면 문자형.


- table => entity
- 새로운 컬럼 추가하면 터진다 => notnull option이 없기 때문에. 
- entity는 db와, dto는 front와.

- backend 까지 배포해볼 것 .
