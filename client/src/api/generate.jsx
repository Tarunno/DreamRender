export const generateImages = async (data) => {
  const res = await fetch('http://localhost:5000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const result = await res.json()
  return result
}