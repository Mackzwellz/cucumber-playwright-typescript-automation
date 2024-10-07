const getWorldParams = () => {
  const params = {
    foo: 'bar'
  };

  return params;
};

const config = {
  import: ['src-cucumber/**/*.ts'],
  format: [
    // 'message:e2e/test-results/cucumber-report.ndjson',
    'json:test-results/cucumber-report.json',
    'html:test-results/report.html',
    'summary',
    'progress-bar'
  ],
  formatOptions: { snippetInterface: 'async-await' },
  worldParameters: getWorldParams()
};

if (process.env.USE_ALLURE) {
  config.format.push('./src-cucumber/support/reporters/allure-reporter.ts');
} else {
  config.format.push('@cucumber/pretty-formatter');
}
export default config;
