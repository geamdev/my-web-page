import axios from 'axios';
import { useState } from 'react';

import { ContactFormData } from '@/shared/interfaces';
import { useFetchAndLoad } from '@/shared/hooks';
import { contactFormData } from '@/shared/services';

const useContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { callEndpoint } = useFetchAndLoad();

  const enviarMensaje = async (formData: ContactFormData) => {
    setLoading(true);

    try {
      const response = await callEndpoint(contactFormData(formData));

      if (!axios.isAxiosError(response)) {
        const result = response.data;
        return result;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.message ?? 'Error desconocido';
        console.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }

    setLoading(false);
  };

  return {
    loading,
    enviarMensaje,
  };
};

export default useContactForm;
