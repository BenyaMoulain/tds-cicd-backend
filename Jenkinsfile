pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 3001:3001'
        }
    }
    environment {
        CI = 'true'
        HOME = "${WORKSPACE}"
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh './jenkins/scripts/test.sh' 
            }
        }
    }
}