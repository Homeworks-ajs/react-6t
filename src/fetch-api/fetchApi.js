const fetchApi = (method = "GET") => {
  const SOURCE = 'http://localhost:4444/notes/';
  if (method === 'GET') {
    return () => {
      const data = fetch(SOURCE, {
        method
      });
      const dataJson = data.then(b => b.json())
      return (handler) => dataJson.then(d => handler(d))
    }
  }

  if (method === "POST") {
    return (data) => {
      const f = fetch(SOURCE, {
        method: method,
        body: JSON.stringify(data),
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }),

        origin: "http://localhost:3000"
      });
      const dataJson = f.then(b => b)
      return (handler) => dataJson.then(d => handler(d))
    }
  }

  if (method === "DELETE") {
    return (id) => {
      const f = fetch(SOURCE + id, {
        method: method,
        origin: "http://localhost:3000"
      });
      const dataJson = f.then(b => b)
      return (handler) => dataJson.then(d => handler(d))
    }
  }


}

export default fetchApi;