pipeline {
    agent any

    environment {
        REPO = 'KakaoTech-team20/Cloud_practice'
        ECR_REPO = '211125697339.dkr.ecr.ap-northeast-2.amazonaws.com/back_node'
        ECR_CREDENTIALS_ID = 'ecr:ap-northeast-2:moreburgerIAM'
    }

    stages {
        stage('Checkout') {
            steps {
                // Git 소스 코드를 체크아웃하는 단계
                git branch: 'main', url: "https://github.com/${REPO}.git", credentialsId: 'github_for_jenkins'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Docker 이미지를 빌드하는 단계
                    dockerImage = docker.build("${ECR_REPO}:latest", "BackEnd")
                }
            }
        }

        stage('Push to ECR') {
            steps {
                script {
                    // ECR에 Docker 이미지를 푸시하는 단계
                    docker.withRegistry("https://${ECR_REPO}", "$ECR_CREDENTIALS_ID") {
                        dockerImage.push('latest')
                    }
                }
            }
        }
        stage('Cleanup Local Docker Images') {
            steps {
                script {
                    // 로컬 Docker 이미지를 삭제하는 단계
                    sh "docker rmi ${ECR_REPO}:latest || true"
                }
            }
        }
    }
    post {
        always {
            // Cleanup: 로컬 Docker 시스템을 정리
            sh 'docker system prune -f'
        }
    }
}
