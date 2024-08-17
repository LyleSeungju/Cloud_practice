# MySQL 클라이언트가 포함된 Alpine Linux 이미지 사용
FROM mysql:8.0

# 환경 변수 설정
ENV RDS_HOSTNAME=moreburger-database.cz0oi80og7ce.ap-northeast-2.rds.amazonaws.com
ENV RDS_USERNAME=moreburger_admin
ENV RDS_PASSWORD=kakao-moreburger-admin
ENV DATABASE_NAME=moreburger-database

# MySQL 명령어를 포함한 스크립트 복사
COPY create-database.sh /docker-entrypoint-initdb.d/

# 스크립트에 실행 권한 부여
RUN chmod +x /docker-entrypoint-initdb.d/create-database.sh

# Docker 컨테이너 실행 시 스크립트가 자동 실행되도록 설정
CMD ["sh", "/docker-entrypoint-initdb.d/create-database.sh"]
