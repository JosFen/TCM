// App.tsx
import { type FormEvent,  useState } from "react"

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const saveUser = async (e: FormEvent) => {
    e.preventDefault()
    await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  // useEffect(() => {
  //   fetch("http://localhost:3000")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  // }, [])

  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={saveUser} className="flex flex-col justify-center bg-gray-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-center text-lg font-semibold text-gray-700">Admin Login/Register</div>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="m-3 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="m-3 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
        />
        <button type="submit" className="m-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>
      </div>
    </>
  )
}

export default App
