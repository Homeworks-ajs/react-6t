const fetchApi = (path) => {
  const f = fetch('http://localhost:3000' + path);
  return f.then(data => data.json()).then(data => data);
}

export default fetchApi