import { useState } from 'react';

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('Profile');

  const tabs = ['Profile', 'Leads', 'Earnings', 'Withdrawals'];

  if (!isLoggedIn) {
    return (
      <div className="p-6 max-w-md mx-auto font-sans mt-20 p-6 border rounded shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Affiliate Portal Login</h1>
        <input
          type="text"
          placeholder="Member ID"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={() => setIsLoggedIn(true)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4">Affiliate Portal Dashboard</h1>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 font-semibold text-blue-600'
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-6 p-4 border rounded shadow-sm">
        {activeTab === 'Profile' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">My Profile</h2>
            <p>Full Name: [User Name]</p>
            <p>Member ID: [User Member ID]</p>
            <p>UPI ID: [User UPI ID]</p>
          </div>
        )}
        {activeTab === 'Leads' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Lead Tracking</h2>
              <button className="bg-green-600 text-white py-2 px-4 rounded">
                Download Report
              </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th>Lead ID</th>
                  <th>Campaign Name</th>
                  <th>Payout</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Affiliate Program</td>
                  <td>₹500</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'Earnings' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">My Earnings</h2>
            <p>Available Balance: ₹[Amount]</p>
            <p>Total Withdrawn: ₹[Amount]</p>
          </div>
        )}
        {activeTab === 'Withdrawals' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Withdrawal Request</h2>
            <button className="bg-blue-600 text-white py-2 px-4 rounded">
              Request Payout
            </button>
          </div>
        )}
      </div>
    </div>
  );
            }

