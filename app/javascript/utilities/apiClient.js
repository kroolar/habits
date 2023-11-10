const apiGet = url => (
  fetch(`/api/${url}`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  }).then(response => response.json())
)

const apiPost = (url, body = {}) => {
  const token = document.querySelector('meta[name="csrf-token"]').content
  body.authenticity_token = token

  return (
    fetch(`/api/${url}`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(response => response.json())
  )
}

const apiPatch = (url, body = {}) => {
  const token = document.querySelector('meta[name="csrf-token"]').content
  body.authenticity_token = token

  return (
    fetch(`/api/${url}`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(response => response.json())
  )
}

const apiDelete = (url) => {
  const token = document.querySelector('meta[name="csrf-token"]').content
  const body = { authenticity_token: token }

  return (
    fetch(`/api/${url}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
  )
}

export {
  apiGet,
  apiPost,
  apiPatch,
  apiDelete
}
