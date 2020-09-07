# \- 리액트 학습 전 JS 필수 기초



#### \- JS 기본 문법 공부하고 싶다면 => MDN 사이트



#### \- 화살표 함수



- const 함수명 = (인자1, 인자2) => { 함수 내용 }
  - 인자가 1개이면 소괄호 생략 가능
  - 함수 내용이 한 줄이고, return 대상이라면 중괄호, return 생략 가능



#### \- Object Destructuring



```javascript

const human = {
    name: "yw",
    lastName: "k",
    nationality: "S.K.",
    favFood: {
    	breakfast: "sang",
        lunch: "Doncas",
        dinner: "ramen"
    }
};

// 1
const name = human.name;
const lastName = human.lastName;
const nation = human.nationality;

// 2 nationality를 다른 이름으로 명명 시 => 위와 동일
//	 favFood 중 lunch, dinner를 각각 lunch, dinner에 할당
//   다른 이름을 원하면 nation 과 같은 문법 적용
const { name, lastName, nationality: nation, favFood: {lunch, dinner} } = human;

```





#### \- Spread Operator



```javascript

const days = ["Mon", "Tue", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"]

// 1차원 배열을 두 개 묶은 2차원 배열 꼴
const allDays1 = [days, otherDays]
// 배열을 풀어 헤쳐 1차원 배열로 묶음
const allDays2 = [...days, ...otherDays, "Sun"]

```





#### \- Class



```javascript

class Human {
    // 생성자
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}

// 상속
class Baby extendsHuman {
    cry(){
        console.log("Waaaa");
    }
}

const kyw = new Human("yw", "k");

// 생성자도 물려받음
const babyKyw = new Baby("mini", "me");

```



#### \- Array map

​	=> 결과를 모아 배열에 저장하여 return



```javascript

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const addSmile = day => `^_^ ${day}`;

// 배열 요소 돌아가며 addSmile 함수 적용 후 결과를 smilingDay에 묶어 저장
const smilingDay = days.map(addSmile);

console.log(smilingDay);
// ["^_^ Mon", "^_^ Tue", "^_^ Wed", "^_^ Thu", "^_^ Fri"]

```



#### \- Array filter

​	=> 결과를 모아 배열에 저장하여 return



```javascript

const nums = [1,2,3,4,5,6,7,8,9,10];

const biggerThan7 = nums.filter(num => num > 5);

console.log(biggerThan7);
// [8, 9, 10]


```





#### \- forEach, incluldes, push

​	=> forEach 는 결과가 없음, 단순히 배열 요소를 이용하여 함수를 수행할 뿐

​	=> includes 는 포함 여부 파악

​	=> push 는 배열에 요소 추가



```javascript

let greetings = ["Hi", "Hello", "Howdy", "Suup"];

posts.forEach(post => console.log(post));

if(!greetings.include("Hello")) {
    greetings.push("Hello");
}

```







## \- 리액트 프로젝트 진행 과정





##### 1. npx 설치

- yarn global add npx

  또는

- npm i npx -g

  => npx로 모듈 설치 시, 해당 모듈을 프로젝트 종료와 함께 삭제.

  ​     프로젝트가 시작되면 해당 모듈을 최신 버전으로 재설치.

  ​     <u>결과적으로 모든 모듈을 최선 버전으로 유지가 가능해짐</u>



##### 2. create-react-app 모듈 설치

- npx create-react-app 프로젝트명

  => create-react-app 모듈을 자동으로 설치하여 실행해줌.



##### 3 react-router-dom 설치

- yarn add react-router-dom



##### \*\* 리액트에서는 css파일명.module.css 로 파일 생성 시 이를 로컬 css 로 받아들임 

#####     => className에 일정 문자를 덧붙여줌



##### 4. 꾸미기 위해 styled-components 모듈 설치

- yarn add styled-components



##### 5. Global 스타일을 위해  styled-reset 모듈 설치

- yarn add styled-reset

  => css를 초기화하는 것이 목적



##### 6.  Movie DB API 사용 위해 axios 모듈 설치

- yarn add axios



