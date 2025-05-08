import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,  // Store user details
    city: null,  // Selected city
      rideType: 'car',  // Default ride type (Car/Motorbike)
        setUser: (user) => set({ user }),
          setCity: (city) => set({ city }),
            setRideType: (rideType) => set({ rideType }),
            }));

            export default useStore;