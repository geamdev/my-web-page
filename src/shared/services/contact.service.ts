import { client } from '@/shared/config';
import { loadAbort } from '@/shared/utilities';

import { ContactFormData } from '../interfaces';

export const contactFormData = (data: ContactFormData) => {
  const controller = loadAbort();
  return {
    controller,
    call: client().post('/api/contact', data, {
      signal: controller.signal,
    }),
  };
};
