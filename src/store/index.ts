import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

interface IBitcoin {
  id: string;
  addr: string;
  pkey: string;
  isLoading: boolean;
  error: any;
}

interface IBitcoins {
  bitcoins: IBitcoin[];
  counterButtonAdd: number;
  fetchBitcoin: () => void;
}

const useStore = create<IBitcoins>() (
  devtools(
    persist(
      (set, get) => ({
        bitcoins: [],
        counterButtonAdd: 0,
        async fetchBitcoin() {
          let bitcoins = get().bitcoins;
          let counterButtonAdd = get().counterButtonAdd;
          const bitcoin = {
            id: nanoid(),
            addr: '',
            pkey: '',
            isLoading: true,
            error: null,
          };
          bitcoins.unshift(bitcoin);
          ++counterButtonAdd;   
          set({ bitcoins, counterButtonAdd });

          try {
            const response = await fetch('http://achemakin.ru/test-smartavia/btcaddr.php');
            if (!response.ok) throw response;
            const result = await response.json();
            if (!result || !result.addr || !result.pkey) throw Error('Ошибка JSON');
            bitcoins = get().bitcoins.map((item) =>
              item.id === bitcoin.id ? { ...item, addr: result.addr, pkey: result.pkey } : item
            );
            set({ bitcoins });
          } catch (e: any) {
            let error = e;
            if (e.statusCode === 400) {
              error = await e.json();
            }
            bitcoins = get().bitcoins.map((item) =>
              item.id === bitcoin.id ? { ...item, error: error } : item
            );            
            set({ bitcoins });

            console.log(error);
          } finally {
            bitcoins = get().bitcoins.map((item) =>
              item.id === bitcoin.id ? { ...item, isLoading: false } : item
            );

            counterButtonAdd = get().counterButtonAdd;
            --counterButtonAdd;
            
            set({ bitcoins, counterButtonAdd });
          }
        },
      })
    )
  )
)

export default useStore;