import React, { useEffect } from 'react'
import { fetchUsers } from './actions/actions'
import { useDispatch, useSelector } from 'react-redux'


function App() {

  const dispatch = useDispatch()
  const { users, loading, error } = useSelector((state) => state.anandStore)


  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  // console.log(users);



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users data using redux</h1>
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between border p-2 rounded"
          >
            <div>
              <span className="font-semibold">{user.name}</span> -{" "}
              <span>{user.email}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App