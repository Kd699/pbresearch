import { UserIcon } from 'lucide-react';
import { useState } from 'react';
import { UserProfileModal } from './UserProfileModal';

export function UserProfileIcon() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer"
      >
        <UserIcon className="w-5 h-5 text-primary" />
      </div>
      
      <UserProfileModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
} 
