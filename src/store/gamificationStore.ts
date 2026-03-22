import { create } from 'zustand';

interface GamificationState {
  visitedSlides: number[];
  badges: string[];
  skipGames: boolean;
  gameStarted: boolean;  // true once user clicks "Start Playing"
  unlockedLevels: number[];
  markVisited: (slideIndex: number) => void;
  awardBadge: (badge: string) => void;
  setSkipGames: (skip: boolean) => void;
  setGameStarted: (started: boolean) => void;
  unlockLevel: (levelIndex: number) => void;
}

export const useStore = create<GamificationState>((set) => ({
  visitedSlides: [],
  badges: [],
  skipGames: false,
  gameStarted: false,
  unlockedLevels: [0], // Level 0 (Welcome/Arcade Landing) is always unlocked
  
  markVisited: (slideIndex) => set((state) => {
    if (state.visitedSlides.includes(slideIndex)) return state;
    
    const newVisited = [...state.visitedSlides, slideIndex];
    const newBadges = [...state.badges];
    
    // Logic to award badges
    if (newVisited.length >= 3 && !newBadges.includes("Explorer")) {
      newBadges.push("Explorer");
    }
    
    return { visitedSlides: newVisited, badges: newBadges };
  }),
  
  awardBadge: (badge) => set((state) => {
    if (state.badges.includes(badge)) return state;
    return { badges: [...state.badges, badge] };
  }),

  setSkipGames: (skip) => set({ skipGames: skip }),

  setGameStarted: (started) => set({ gameStarted: started }),

  unlockLevel: (levelIndex) => set((state) => {
    if (state.unlockedLevels.includes(levelIndex)) return state;
    return { unlockedLevels: [...state.unlockedLevels, levelIndex] };
  })
}));
