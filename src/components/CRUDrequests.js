export const postProject = (inputName) => {
    fetch('https://e-inkling.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: inputName })
  })
}