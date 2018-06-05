import Dashboard from '../components/dashboard'

// Widgets
import SonarQube from '../components/widgets/sonarqube'
import Jenkins from '../components/widgets/jenkins'
import Date from '../components/widgets/date'
import JiraIssueCount from '../components/widgets/jira/issue-count'
import Weather from '../components/widgets/weather'

// Theme
import darkTheme from '../styles/dark-theme'

export default () => (
  <Dashboard theme={darkTheme}>
  <Date />
    <Jenkins
      url='http://sdappl00007.devaddelijn.be:8080'
      jobs={[
        { label: 'React Starterkit', path: 'Website/job/react-app' },
        { label: 'React Component Library Docs', path: 'Website/job/react-component-library-docs'},
        { label: 'React Components', path: 'Website/job/react-components/job/pipeline'}
      ]}
    />
    <SonarQube
      url='http://sdappl00017.devaddelijn.be:9000'
      componentKey='Abonnementen-1.0'
    />
    <JiraIssueCount
      title='JIRA Open issues'
      url='https://delijn.atlassian.net'
      query='project = RISE AND status = "To Do" AND resolution = Unresolved'
      authKey='jira'
    />
  </Dashboard>
)
