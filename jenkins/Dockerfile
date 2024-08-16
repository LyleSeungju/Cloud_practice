# Jenkins의 기본 이미지를 사용합니다.
FROM jenkins/jenkins:lts

# root 사용자로 변경하여 추가 패키지를 설치할 수 있습니다.
USER root

# 필요한 패키지 설치: Git, Docker CLI, Nginx를 설치합니다.
RUN apt-get update && apt-get install -y \
    git \
    docker.io \
    nginx \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/sites-available/default

# Jenkins의 기본 사용자로 돌아갑니다.
USER jenkins

# Jenkins의 기본 포트는 8080입니다.
EXPOSE 8080

# Nginx의 기본 포트는 80, 443입니다.
EXPOSE 80 443

# Jenkins 작업 디렉토리를 설정합니다.
VOLUME /var/jenkins_home

# Nginx와 Jenkins를 모두 실행하는 스크립트를 작성합니다.
USER root
COPY start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

# 기본 실행 명령어를 Nginx와 Jenkins를 모두 시작하도록 변경합니다.
ENTRYPOINT ["/usr/local/bin/start.sh"]
