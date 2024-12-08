# HRMS 간단한 프로젝트 (Node.js)

이 저장소는 **Node.js**, **Express.js**, **PostgreSQL**, **Sequelize ORM**을 사용하여 구축된 간단한 인사 관리 시스템(HRMS)입니다. 직원 정보를 추가, 조회, 수정, 삭제할 수 있는 RESTful API를 제공합니다.

---

## 🚀 주요 기능

- **CRUD 기능**: 직원 정보를 추가(Create), 조회(Read), 수정(Update), 삭제(Delete) 가능.
- **PostgreSQL 연동**: Sequelize ORM을 사용하여 데이터베이스와 상호작용.
- **RESTful API 제공**: 명확한 API 설계로 활용 용이.
- **CORS 지원**: 다양한 도메인에서 API 호출 가능.

---

## 🛠️ 기술 스택

- **백엔드**: Node.js, Express.js
- **데이터베이스**: PostgreSQL
- **ORM**: Sequelize
- **기타 라이브러리**:
  - `body-parser`: 요청 본문의 JSON 데이터를 파싱.
  - `cors`: 크로스 도메인 요청 지원.

---

## 📂 프로젝트 구조

HRMS-Simple-Project-Using-Node.js/ │ ├── config/ │ └── database.js # 데이터베이스 설정 및 Sequelize 초기화 │ ├── models/ │ └── employee.js # Employee 테이블에 대한 Sequelize 모델 │ ├── routes/ │ └── employees.js # 직원 관리 RESTful API 라우터 │ ├── index.js # 애플리케이션 진입점 ├── package.json # 프로젝트 의존성 및 스크립트 └── README.md # 프로젝트 설명서
