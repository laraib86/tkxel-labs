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
                    sh 'docker container run -p 8081:8081 --name backend -d sannan1357/backend:${BUILD_NUMBER}' 
		    sh 'sleep 20'
		    sh 'docker rm -f backend'
				
			} 
		}
	}
}
