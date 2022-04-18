const githubQuery = {
    query: `
        {
          viewer{
            login
            name
          }
        }
      `,
}

export default githubQuery