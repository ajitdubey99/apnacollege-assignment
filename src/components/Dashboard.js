const Dashboard = ({ user, currentPage, onLogout, onNavigate, children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <nav className="flex space-x-6">
              <button
                onClick={() => onNavigate('profile')}
                className={`hover:text-blue-200 transition duration-200 ${
                  currentPage === 'profile' ? 'text-blue-200' : ''
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => onNavigate('dashboard')}
                className={`hover:text-blue-200 transition duration-200 ${
                  currentPage === 'dashboard' ? 'text-blue-200' : ''
                }`}
              >
                Topics
              </button>
              <button
                onClick={() => onNavigate('progress')}
                className={`hover:text-blue-200 transition duration-200 ${
                  currentPage === 'progress' ? 'text-blue-200' : ''
                }`}
              >
                Progress
              </button>
              <button
                onClick={onLogout}
                className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition duration-200"
              >
                Logout
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
};

export default Dashboard;