import {MessageSquare} from 'lucide-react';
import { Link } from 'react-router-dom';

const NoChatSelected = () => {
  return (
    <div className='w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50'>
      <div className='max-w-md text-center space-y-6'>
        {/* icon display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              <MessageSquare className="w-8 h-8 text-primary " />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to Chatty!</h2>
        <p className="text-base-content/60">
          <Link to='/contacts' className='text-blue-500 font-semibold md:hidden'>Select</Link> <span className='hidden md:inline'>Select</span> a conversation to start chatting
        </p>
      </div>
    </div>
  )
}

export default NoChatSelected
