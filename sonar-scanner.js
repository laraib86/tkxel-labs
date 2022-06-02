const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://10.0.8.49:9000',
    token : "857a291b7d2aa7f0a85e42e29db721d69c84a8dc",
    options: {
      'sonar.projectName': 'lab1',
      'sonar.projectDescription': 'Assignment_1',
    
    }
  },
  () => process.exit()
)

