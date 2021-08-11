pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 3001:3001'
        }
    }
    environment {
        HOME = "${WORKSPACE}"
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }