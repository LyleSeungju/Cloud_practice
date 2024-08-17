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
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// 기본 라우트
app.get('/getData', (req, res) => {
  res.send('Hello from Node.js!');
});

app.get('/test-db', (req, res) => {
  const query = `
    SELECT 
      DATABASE() as database_name, 
      NOW() as current_time, 
      VERSION() as mysql_version
  `;
  
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error querying the database');
      return;
    }
    res.json({
      database_name: results[0].database_name,
      current_time: results[0].current_time,
      mysql_version: results[0].mysql_version
    });
  });
});

// 서버 시작
const port = 8080;
app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
});
