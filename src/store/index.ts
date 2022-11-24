import create from 'zustand';
import uniqid from 'uniqid';

interface IBitcoin {
  id: string;
  addr: string;
  pkey: string;
  isLoading: boolean;
  error: any;
}

type Bitcoins = {
  bitcoins: IBitcoin[];
  fetchBitcoin: () => void;
}

const useStore = create<Bitcoins>((set, get) => ({
  bitcoins: [],
  async fetchBitcoin() {
    const bitcoins = get().bitcoins;
    const bitcoin = {
      id: uniqid(),
      addr: '',
      pkey: '',
      isLoading: true,
      error: null,
    }
    bitcoins.push(bitcoin);
    
    set({ bitcoins });
    
    try {
      const response = await fetch('http://localhost:3000/btcaddr.php');
      if (!response.ok) throw response;
      const result = await response.json();
      console.log(result);      
    } catch (e: any) {
      let error = e;
      if (e.statusCode === 400) {
        error = await e.json();
      }
      console.log(error);
    } finally {
      bitcoins.map((item) =>
        item.id === bitcoin.id ? { ...item, isLoading: false } : item
      );
      set({ bitcoins });
    }
  },
}));

export default useStore;