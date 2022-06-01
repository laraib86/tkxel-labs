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
				dir('tkxel-labs'){
					sh 'docker build -t sannan1357/backend:$GIT_COMMIT .'
                    sh 'docker container run --rm -p 8081:8081 --name backend -d sannan1357/backend:$GIT_COMMIT' 
				    sh 'sleep 5'
				    sh 'curl -I http://localhost:8081'
				}
			} 
		}
	}
}