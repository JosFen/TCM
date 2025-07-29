import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getUsers, deleteUser } from '../../api/users';
import UserTable from '../../components/Users/UserTable';
import UserTable  from '../../components/Users/UserTable';
import { setUsers } from '../../store/userSlice';
import DashboardLayout from '../../components/Layout/DashboardLayout';

const UsersPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        dispatch(setUsers(usersData));
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    fetchUsers();
  }, [dispatch]);

  const handleDelete = async (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId);
        const updatedUsers = users.filter((user) => user.id !== userId);
        dispatch(setUsers(updatedUsers));
      } catch (error) {
        console.error('Failed to delete user:', error);
      }
    }
  };

  const handleEdit = (user: User) => {
    setCurrentUser(user);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setCurrentUser(null);
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">User Management</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add New User
          </button>
        </div>

        <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />

        {showForm && (
          <UserForm
            user={currentUser}
            onClose={handleFormClose}
            onUserUpdated={(updatedUser) => {
              const updatedUsers = currentUser
                ? users.map((u) => (u.id === updatedUser.id ? updatedUser : u))
                : [...users, updatedUser];
              dispatch(setUsers(updatedUsers));
              handleFormClose();
            }}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default UsersPage;