
export const postProject = (inputName) => {
    fetch('https://e-inkling.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: inputName })
  })
}

export const putDocument = (inputTitle, projectId, inputContent, documentId) => {
  fetch('https://e-inkling.herokuapp.com/documents/'+ documentId, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: inputTitle, project: projectId, content: inputContent})
})
}