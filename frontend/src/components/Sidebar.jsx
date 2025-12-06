import { useEffect, useState, useRef } from 'react'
import { useChatStore } from '../store/useChatStore'
import SidebarSkeleton from './skeletons/SidebarSkeleton'
import { Search, User } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '../customHook/media';

const Sidebar = () => {
  const { users, getUsers, isUsersLoading, selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [search, setSearch] = useState('');
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const isBigScreen = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const keyForSearch = search.trim().toLowerCase();
  let filteredUsers = users;
  if(keyForSearch) {
    filteredUsers = filteredUsers.filter(user => 
      user.fullName.toLowerCase().includes(keyForSearch)
    );
  }
  if(showOnlineOnly) {
    filteredUsers = filteredUsers.filter(user => 
      onlineUsers.includes(user._id)
    );
  }

  const handleChange = (key) => {
    setSearch(key);
  }

  const handleClick = (user) => {
    setSelectedUser(user);
    
    if(!isBigScreen) navigate('/');
  }

  if (isUsersLoading) return <SidebarSkeleton />

  return (
    <aside className='h-full w-full md:w-70 border-r border-base-300 flex flex-col transition-all duration-200'>
      <div className='border-b border-base-300 w-full p-5'>
        <div className='flex items-center gap-2'>
          <User className='size-6' />
          <span className='font-medium'>Contacts</span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="text-sm">Show online only</span>
          </label>
          <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
        </div>
        <div className='mt-3 flex items-center gap-2'>
          <label className="input w-full">
            <Search />
            <input type="search" className="grow" placeholder="Search" ref={searchRef} onChange={(e) => handleChange(e.target.value)} />
          </label>
        </div>
      </div>

      <div className='overflow-y-auto w-full py-3 px-2'>
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => handleClick(user)}
            className={`
              w-full flex p-3 items-center gap-3
              hover:bg-base-300 transition-colors rounded-md mt-2
              ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}
            `}
          >
            <div className='relative mx-0'>
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.fullName}
                className='h-12 w-12 object-cover rounded-full'
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className='absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900'
                />
              )}
            </div>

            {/* User info */}
            <div className='block text-left min-w-0'>
              <div className='font-medium truncate'>{user.fullName}</div>
              <div className='text-sm text-zinc-400'>
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-zinc-500 py-4">No online users</div>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
