export default {
  bitbucket: {
    username: process.env.BITBUCKET_USER,
    password: process.env.BITBUCKET_PASS
  },
  elasticsearch: {
    username: process.env.ELASTICSEARCH_USER,
    password: process.env.ELASTICSEARCH_PASS
  },
  jenkins: {
    username: 'pcambien',
    password: 'DeLijn2017'
  },
  jira: {
    username: 'philippe.cambien.ext@delijn.be',
    password: 'mo0108AT'
  },
  sonarqube: {
    username: process.env.SONARQUBE_USER,
    password: process.env.SONARQUBE_PASS
  },
  github: {
    username: process.env.GITHUB_USER,
    password: process.env.GITHUB_PASS
  }
}
