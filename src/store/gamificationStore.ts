import { create } from 'zustand';

interface GamificationState {
  visitedSlides: number[];
  badges: string[];
  markVisited: (slideIndex: number) => void;
  awardBadge: (badge: string) => void;
}

export const useStore = create<GamificationState>((set) => ({
  visitedSlides: [],
  badges: [],
  
  markVisited: (slideIndex) => set((state) => {
    if (state.visitedSlides.includes(slideIndex)) return state;
    
    const newVisited = [...state.visitedSlides, slideIndex];
    const newBadges = [...state.badges];
    
    // Logic to award badges
    if (newVisited.length >= 3 && !newBadges.includes("Explorer")) {
      newBadges.push("Explorer");
    }
    if (newVisited.includes(3) && !newBadges.includes("Innovation Hunter")) {
      newBadges.push("Innovation Hunter");
    }
    if (newVisited.includes(4) && !newBadges.includes("Cyber Analyst")) {
      newBadges.push("Cyber Analyst");
    }
    if (newVisited.length === 9 && !newBadges.includes("Master of the Matrix")) {
      newBadges.push("Master of the Matrix");
    }
    
    return { visitedSlides: newVisited, badges: newBadges };
  }),
  
  awardBadge: (badge) => set((state) => {
    if (state.badges.includes(badge)) return state;
    return { badges: [...state.badges, badge] };
  })
}));
