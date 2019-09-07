const childProcess = require('child_process');

module.exports = {
  buildDate: new Date().toISOString(),
  ...getCommitInfo()
};

/**
 * getCommitInfo
 * @param {gitlogFormat, gitLastLogCmmand}
 * %H: hash %h: short %an: author %d: date %s: comment
 * git rev-parse --short HEAD
 * @return {commitId, commitDate}
 */
function getCommitInfo({
  gitLogFormat = JSON.stringify({
    "commitId": "%h",
    "commitDate": "%ad"
  }),
  gitLastLogCmmand = `git log -1 --date=iso --pretty=format:'${gitLogFormat}'`
} = {}) {

  try {
    return JSON.parse(childProcess.execSync(
      gitLastLogCmmand, {
        encoding: 'utf8'
      }
    ));
  } catch (error) {
    return {
      commitError: error.message
    };
  }

}
