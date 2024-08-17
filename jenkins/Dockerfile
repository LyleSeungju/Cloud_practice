# Jenkins의 기본 이미지를 사용합니다.
FROM jenkins/jenkins:lts

# Jenkins에서 사용할 추가적인 플러그인이나 패키지를 설치할 수 있습니다.
# 예를 들어, Git과 Docker CLI를 설치할 수 있습니다.
USER root
RUN apt-get update && apt-get install -y \
    git \
    docker.io \
    && rm -rf /var/lib/apt/lists/*

# Jenkins의 기본 사용자로 돌아갑니다.
USER jenkins

# Jenkins가 사용할 추가적인 환경 변수나 설정을 여기에 추가할 수 있습니다.
# 예를 들어, 초기 관리자 비밀번호를 미리 설정할 수 있습니다.
# ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false

# Jenkins의 기본 포트는 8080입니다. Docker 컨테이너 외부에서 접근할 수 있도록 포트를 노출합니다.
EXPOSE 8080

# Jenkins 작업 디렉토리를 설정합니다.
VOLUME /var/jenkins_home

# 기본 실행 명령어는 Jenkins의 시작 명령어입니다.
CMD ["jenkins.sh"]
