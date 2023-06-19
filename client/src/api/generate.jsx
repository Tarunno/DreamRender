export const generateImages = async () => {
  const res = await fetch('http://localhost:5000/')
  const data = await res.json()
  return data
}