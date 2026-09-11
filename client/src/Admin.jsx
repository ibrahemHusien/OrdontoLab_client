import React, { useState } from 'react';
import Dashboard from './pages/Dashbord';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('ordonto_admin') === 'true');
  const [passInput, setPassInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const ADMIN_PASSWORD = 'admin123';

  const handleLogin = (e) => {
    e.preventDefault();
    if (passInput === ADMIN_PASSWORD) {
      localStorage.setItem('ordonto_admin', 'true');
      setIsLoggedIn(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ordonto_admin');
    setIsLoggedIn(false);
    setPassInput('');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4" dir="ltr">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-slate-100 border-t-4 border-t-[#C5912B]">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-[#0C1B2D]">Admin Login</h2>
            <p className="text-slate-500 text-sm mt-2">Enter password to access OrdontoLab dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Password:</label>
              <input 
                type="password" 
                value={passInput} 
                onChange={(e) => setPassInput(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C5912B] focus:border-transparent outline-none transition"
                required
              />
            </div>

            {loginError && (
              <p className="text-red-500 text-sm font-semibold text-center bg-red-50 py-2 rounded-lg">
                Incorrect password. Please try again.
              </p>
            )}

            <button type="submit" className="w-full bg-[#0C1B2D] hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl transition shadow-md">
              Login to Dashboard
            </button>
          </form>
          <div className="text-center mt-6">
            <a href="/" className="text-sm text-slate-400 hover:text-[#C5912B] transition font-medium">Back to Website</a>
          </div>
        </div>
      </div>
    );
  }

  return <Dashboard onLogout={handleLogout} />;
};

export default Admin;