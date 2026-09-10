const PORT = 8000;

const resolveBaseUrl = () => {
  const codespaceName = process.env.CODESPACE_NAME;

  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${PORT}`;
};

export const apiBaseUrl = resolveBaseUrl();
