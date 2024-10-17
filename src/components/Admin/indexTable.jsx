import React, { useState } from 'react';
import { FaSearch, FaTrash, FaEdit } from 'react-icons/fa';

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [employees] = useState([
    {
      id: 1,
      name: 'John Doe',
      role: 'Developer',
      contact: 'john@example.com',
      department: 'IT'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Designer',
      contact: 'jane@example.com',
      department: 'Creative'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Manager',
      contact: 'mike@example.com',
      department: 'Operations'
    },
    {
      id: 4,
      name: 'Emily Brown',
      role: 'HR Specialist',
      contact: 'emily@example.com',
      department: 'Human Resources'
    },
    {
      id: 5,
      name: 'Chris Wilson',
      role: 'Analyst',
      contact: 'chris@example.com',
      department: 'Finance'
    }
  ]);

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search employees"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
        {filteredEmployees.length === 0 ? (
          <div
            className="bg-gray-800 text-white p-4 rounded-lg text-center"
            role="alert"
          >
            No employees found matching your search criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 text-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-700">
                  <th className="py-3 px-4 text-left">ID</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Role</th>
                  <th className="py-3 px-4 text-left">Contact</th>
                  <th className="py-3 px-4 text-left">Department</th>
                  <th className="py-3 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200"
                  >
                    <td className="py-3 px-4">{employee.id}</td>
                    <td className="py-3 px-4">{employee.name}</td>
                    <td className="py-3 px-4">{employee.role}</td>
                    <td className="py-3 px-4">{employee.contact}</td>
                    <td className="py-3 px-4">{employee.department}</td>
                    <td className="py-3 px-4 flex space-x-2">
                      <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-3 rounded transition-colors duration-200 flex items-center"
                        aria-label={`Update ${employee.name}'s profile`}
                      >
                        <FaEdit className="mr-1" />
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded transition-colors duration-200 flex items-center"
                        aria-label={`Delete ${employee.name}'s profile`}
                      >
                        <FaTrash className="mr-1" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
