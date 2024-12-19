export const calculateHash = (data: string): string => {
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(16, '0');
};

export const mineBlock = async (
  previousHash: string,
  transactions: string,
  difficulty: number = 4
): Promise<{ hash: string; nonce: number }> => {
  return new Promise((resolve) => {
    let nonce = 0;
    let hash = '';
    
    const mine = () => {
      for (let i = 0; i < 1000; i++) {
        hash = calculateHash(`${previousHash}${transactions}${nonce}`);
        if (hash.startsWith('0'.repeat(difficulty))) {
          resolve({ hash, nonce });
          return;
        }
        nonce++;
      }
      
      // Continue mining in the next tick to prevent UI blocking
      setTimeout(mine, 0);
    };
    
    mine();
  });
};