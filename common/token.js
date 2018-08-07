let accessToken = null;
let idToken = null;

function tokenModule() {
  function setTokens(pAccessToken, pIdToken) {
    accessToken = pAccessToken;
    idToken = pIdToken;
  }

  function getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    return "N/A";
  }

  function getIdToken() {
    if (idToken) {
      return idToken;
    }
    return "N/A";
  }

  return { setTokens, getAccessToken, getIdToken };
}

module.exports = tokenModule;
