import { useState, useEffect } from 'react';
import crypto from 'crypto-browserify';

const useDecryptMnemonic = (hashedPassword) => {
  const [loading, setIsLoading] = useState(true);
  const [decryptedData, setDecryptedData] = useState({ decryptedMnemonic: null, decryptedSeed: null });
  const [error, setError] = useState(null);
  
  const saltForKey = localStorage.getItem('saltForKey');
  const encryptedMnemonic = localStorage.getItem('encryptedMnemonic');
  const encryptedSeed = localStorage.getItem('encryptedSeed');
  const ivHex = localStorage.getItem('iv');
  
  useEffect(() => {
    const decryptMnemonicAndSeed = () => {
      try {
        if (!saltForKey || !encryptedMnemonic || !encryptedSeed || !ivHex) {
          throw new Error('Missing encrypted data or salt in local storage.');
        }

        const iv = new Uint8Array(ivHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

        const key = crypto.pbkdf2Sync(hashedPassword, saltForKey, 10000, 16, 'sha256'); 

        const decipherMnemonic = crypto.createDecipheriv('aes-128-cbc', key, iv); 
        let decryptedMnemonic = decipherMnemonic.update(encryptedMnemonic, 'hex', 'utf8');
        decryptedMnemonic += decipherMnemonic.final('utf8');

        const decipherSeed = crypto.createDecipheriv('aes-128-cbc', key, iv); 
        let decryptedSeed = decipherSeed.update(encryptedSeed, 'hex', 'utf8');
        decryptedSeed += decipherSeed.final('utf8');

        setDecryptedData({ decryptedMnemonic: decryptedMnemonic.split(' '), decryptedSeed });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    decryptMnemonicAndSeed();
  }, [hashedPassword, saltForKey, encryptedMnemonic, encryptedSeed, ivHex]);

  return { loading, decryptedData, error };
};

export default useDecryptMnemonic;
