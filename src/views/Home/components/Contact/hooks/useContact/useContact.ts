import axios from 'axios';
import { useState } from 'react';

import { ContactFormData } from '@/shared/interfaces';

const useContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const enviarMensaje = async (formData: ContactFormData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/contact', formData);

      if (response.status === 200) {
        setSuccess(true);
      } else {
        setError('Hubo un error al enviar el mensaje');
      }
    } catch (error) {
      setError('Hubo un error al enviar el mensaje');
    }

    setLoading(false);
  };

  return {
    loading,
    error,
    success,
    enviarMensaje,
  };
};

export default useContactForm;
