
export const postProject = (inputName) => {
    fetch('https://e-inkling.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: inputName })
  })
}

export const putProject = (inputName, projectId) => {
  fetch('https://e-inkling.herokuapp.com/projects/'+ projectId, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: inputName, id: projectId})
})
}

export const postDocument = (inputTitle, projectId, inputContent) => {
  fetch('https://e-inkling.herokuapp.com/documents/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: inputTitle, project: projectId, content:inputContent})
})
}
export const putDocument = (inputTitle, projectId, inputContent, documentId) => {
  fetch('https://e-inkling.herokuapp.com/documents/'+ documentId, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: inputTitle, project: projectId, content: inputContent})
})
}

export const deleteDocument = (documentId) => {
  fetch('https://e-inkling.herokuapp.com/documents/'+ documentId, {
    method: 'DELETE',
  })
}
