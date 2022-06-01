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

    stage('Build Docker Image') {
			steps {
		   sh 'docker build -t sannan1357/backend:${BUILD_NUMBER} .'
                    sh 'docker container run --name lab1 --rm -p 8081:8081 --name backend -d sannan1357/backend:${BUILD_NUMBER}' 
		    sh 'sleep 20'
		    sh 'docker rm -f lab1'
				
			} 
		}
	}
}
