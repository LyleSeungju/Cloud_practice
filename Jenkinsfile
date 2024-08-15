pipeline {
    agent any

    environment {
        REPO = 'KakaoTech-team20/Cloud_practice'
        ECR_REPO = '211125697339.dkr.ecr.ap-northeast-2.amazonaws.com/front_react'
        ECR_CREDENTIALS_ID = 'ecr:ap-northeast-2:ecr_credentials_id'
    }

    stages {
        stage('Checkout') {
            steps {
                branch: 'main', url: "https://github.com/${REPO}"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${ECR_REPO}-Front:latest", "-f FrontEnd/Dockerfile .")
                }
            }
        }

        stage('Push to ECR') {
            steps {
                script {
                    docker.withRegistry("https://${ECR_REPO}", "$ECR_CREDENTIALS_ID") {
                        dockerImage.push('latest')
                    }
                }
            }
        }
    }
}
