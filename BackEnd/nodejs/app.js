const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// Express 애플리케이션 설정
const app = express();
app.use(cors()); // CORS 미들웨어 추가

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'moreburger-database.cz0oi80og7ce.ap-northeast-2.rds.amazonaws.com',
  user: 'moreburger_admin',
  password: 'kakao-moreburger-admin',
  database: 'moreburger-database'
});

// 데이터베이스 연결 테스트
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1); // 데이터베이스 연결에 실패하면 애플리케이션을 종료합니다.
  } else {
    console.log('Connected to the database.');
  }
});

// 기본 라우트
app.get('/getData', (req, res) => {
  res.send('Hello from Node.js!');
});

// 데이터 조회 라우트
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM new_table';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('쿼리 실행 오류:', err);
      res.status(500).send('서버 오류');
      return;
    }
    res.json(results); // 조회된 데이터를 클라이언트에게 JSON 형식으로 반환합니다.
  });
});

// 서버 시작
const port = 8080;
app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
});
