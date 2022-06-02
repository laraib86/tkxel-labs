pipeline {
  agent any
  stages {
      stage ('Git Clone')
      {
          steps
          {
              git branch: 'develop', url: 'https://github.com/msannan/tkxel-labs.git'
          }
      }

    stage('SonarQube Analysis') {
			steps {
		   sh 'sonar-scanner   -Dsonar.projectKey=Lab1   -Dsonar.sources=.   -Dsonar.host.url=http://10.0.8.49:9000   -Dsonar.login=857a291b7d2aa7f0a85e42e29db721d69c84a8dc'
			} 
		}

    stage('Build Docker Image') {
			steps {
		   sh 'docker build -t sannan1357/backend:${BUILD_NUMBER} .'
                    sh 'docker container run -p 8081:8081 --name backend -d sannan1357/backend:${BUILD_NUMBER}' 
		    sh 'sleep 20'
		    sh 'docker rm -f backend'
				
			} 
		}
	}
}
