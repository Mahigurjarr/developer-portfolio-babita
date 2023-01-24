pipeline {
    agent any
    stages {
        stage('GitPull') {
            steps {
                // Get some code from a GitHub repository
                git branch: 'mahi-portfolio', url: 'https://github.com/Mahigurjarr/developer-portfolio-babita.git'
            }
        }
        stage('local Build') {
            steps {
                sh 'sudo npm ci && sudo npm run build --prod'
            }
        }
        stage('Image Build') {
            steps {
                sh 'aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/b9b9f2k3'
                sh 'docker build -t project3images .'
                sh 'docker tag project3images:latest public.ecr.aws/b9b9f2k3/project3images:latest'
                sh 'docker push public.ecr.aws/b9b9f2k3/project3images:latest'
            }
        }
        stage('Testing-2') {
            steps {
                sh 'sudo kubectl apply -f project3-deploy.yaml'
                sh 'sleep(30)'
                sh 'sudo kubectl get svc -o yaml | grep hostname'
            }
        }
    }
}
