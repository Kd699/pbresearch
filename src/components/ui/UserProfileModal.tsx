import * as React from 'react';
import { Flame, Trophy, Users } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './dialog';

interface TeamMember {
  name: string;
  streak: number;
  lastViewed: string;
}

const teamMembers: TeamMember[] = [
  { name: "MK", streak: 5, lastViewed: "2 hours ago" },
  { name: "Hardeep", streak: 3, lastViewed: "1 day ago" },
  { name: "Richard", streak: 7, lastViewed: "3 hours ago" },
  { name: "Adarsh", streak: 4, lastViewed: "5 hours ago" },
  { name: "Purti", streak: 6, lastViewed: "1 hour ago" },
  { name: "Momina", streak: 2, lastViewed: "2 days ago" },
].sort((a, b) => b.streak - a.streak);

interface UserProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UserProfileModal({ open, onOpenChange }: UserProfileModalProps) {
  const userStreak = 5; // This would come from your actual user data

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Your Profile</DialogTitle>
        </DialogHeader>
        
        {/* Personal Stats */}
        <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-lg font-semibold">MK</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Current Streak</span>
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              <span className="text-2xl font-bold">{userStreak} days</span>
            </div>
          </div>
        </div>

        {/* Team Insights */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <h3 className="font-semibold">Team Activity</h3>
          </div>
          
          <div className="space-y-3">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="flex items-center justify-between p-2 rounded-lg bg-background border"
              >
                <div className="flex items-center gap-3">
                  {index === 0 && <Trophy className="h-4 w-4 text-yellow-500" />}
                  <span className="font-medium">{member.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Flame className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">{member.streak}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {member.lastViewed}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 
