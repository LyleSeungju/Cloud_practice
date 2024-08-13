# Step 1: Use NGINX to serve the app
FROM nginx:alpine

# NGINX 설정 파일 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 빌드된 파일들을 NGINX의 웹 루트 디렉토리로 복사
COPY ./react_pj/build /usr/share/nginx/html

# 포트 3000에서 NGINX 실행
EXPOSE 3000

# NGINX 실행
CMD ["nginx", "-g", "daemon off;"]
