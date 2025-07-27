import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">
                  Tamrenna Gym Management
                </h1>
              </div>
              <nav className="flex space-x-8">
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Dashboard
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Members
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Classes
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to Tamrenna Gym Management System
              </h2>
              <p className="text-gray-600 mb-6">
                Your gym management solution is ready to get started!
              </p>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Counter Example</h3>
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      onClick={() => setCount(count - 1)}
                      className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
                    >
                      -
                    </button>
                    <span className="text-xl font-bold">{count}</span>
                    <button
                      onClick={() => setCount(count + 1)}
                      className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Routes>
          <Route path="/" element={<div />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App