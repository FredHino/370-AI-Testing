import { useState } from 'react';

const useVibePicker = () => {
  const [playlist, setPlaylist] = useState(null);
  const [phase, setPhase] = useState('input'); // Add this line

  // Fetch recommended tracks from GPT and database
  const fetchRecommendedTracks = async (userInput) => {
    try {
      const response = await fetch('/api/get_GPT_tracks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      if (!response.ok) {
        throw new Error('Error fetching recommended tracks');
      }

      const data = await response.json();
      setPlaylist(data.tracks);
      setPhase('playlist'); // Add this line
    } catch (error) {
      console.error(error);
    }
  };

  // Other functions to handle playlist customization

  return {
    phase,
    playlist,
    fetchRecommendedTracks,
  };
};

export default useVibePicker;
