# Chapter 2-1. 클린코드와 리팩토링

## 기본과제: 더티코드 개선

이번 과제는 더티코드를 클린코드의 형태로 개선을 하는 과제입니다. 주어진 테스트를 통과하면서 원래 기능과 동일한 동작을 하는 코드를 만들어주세요. basic과제는 제공되는 더티코드를 클린코드와 리팩토링 원칙에 입각해서 더 나은 코드로 만들어보세요. 주어진 테스트를 참고삼아 좋은 이름, 좋은 모양, 좋은 구조를 가지는 코드로 만들어 보세요.

[필수조건]

- Prettier와 ESLint를 설치해서 적용할 것
- 테스트 코드 모두 통과할 것
- = 기존 기능과 동일하게 동작할 것
- = 어플리케이션 요구사항을 모두 만족할 것
  - 상품
    - 상품1 - 10,000원
    - 상품2 - 20,000원
    - 상품3 - 30,000원
  - 상품 관리
    - 상품을 장바구니에 추가할 수 있어야 한다.
    - 장바구니에서 상품을 제거할 수 있어야 한다.
    - 각 상품의 수량을 변경할 수 있어야 한다.
    - 재고가 부족한 상품은 장바구니에 담을 수 없습니다.
  - 가격 계산
    - 장바구니 내 모든 상품의 총액을 계산해야 한다.
    - 개별 상품의 가격과 수량에 따른 소계를 표시해야 한다.
    - 상품1 > 10개 이상 구매 시 10% 할인
    - 상품2 > 10개 이상 구매 시 15% 할인
    - 상품3 > 10개 이상 구매 시 20% 할인
    - 상품 종류와 상관 없이, 30개 이상 구매할 경우 25% 할인
    - 화요일에는 특별할인 10%
    - 임의의 시간마다 깜짝세일 20%, 추천세일 5%
  - 기본 기능
    - 장바구니에 상품 추가 기능
    - 장바구니에서 상품 제거 기능
    - 상품 수량 변경 기능
    - 장바구니 내역 조회 기능
    - 총액 계산 기능

## 심확과제: 유지보수 하기 좋은 코드만들기

심화과제는 **기본과제에서 작성한 코드를 기술고도화를 하는 것입니다.** 바닐라 자바스크립트로 되어 있는 코드를 유지보수하기에 유리한 기술스택(React + Typescript)으로 고도화 리팩토링을 진행해주세요. 우리의 목표는 앞으로 유지보수를 더 잘할 수 있도록 하기 위함입니다. 최소 React와 Typescript를 이용한 코드로 개선해주세요. 그 밖의 기술선택과 폴더/파일 구조, 테스트 코드등은 자유입니다.
