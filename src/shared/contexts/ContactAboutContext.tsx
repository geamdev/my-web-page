import { createContext, useContext, useState } from 'react';

type ContactAboutContextType = {
  isMenuOpenAbout: boolean;
  toggleMenuAbout: () => void;
  isMenuOpenContact: boolean;
  toggleMenuContact: () => void;
  isMenuOpenNav: boolean;
  toggleMenuNav: () => void;
  isMenuOpenContactAbout: boolean;
  toggleMenuContactAbout: () => void;
};

const ContactAboutContext = createContext<ContactAboutContextType>({
  isMenuOpenAbout: false,
  toggleMenuAbout: () => {},
  isMenuOpenContact: false,
  toggleMenuContact: () => {},
  isMenuOpenNav: false,
  toggleMenuNav: () => {},
  isMenuOpenContactAbout: false,
  toggleMenuContactAbout: () => {},
});

export const useContactAbout = () => useContext(ContactAboutContext);

export const ContactAboutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMenuOpenAbout, setIsMenuOpenAbout] = useState<boolean>(false);
  const [isMenuOpenContact, setIsMenuOpenContact] = useState<boolean>(false);
  const [isMenuOpenNav, setIsMenuOpenNav] = useState<boolean>(false);
  const [isMenuOpenContactAbout, setIsMenuOpenContactAbout] =
    useState<boolean>(false);

  const toggleMenuAbout = () => {
    setIsMenuOpenAbout((prevMenu) => (prevMenu === false ? true : false));
  };

  const toggleMenuContact = () => {
    setIsMenuOpenContact((prevMenu) => (prevMenu === false ? true : false));
  };

  const toggleMenuNav = () => {
    setIsMenuOpenNav((prevMenu) => (prevMenu === false ? true : false));
  };

  const toggleMenuContactAbout = () => {
    setIsMenuOpenContactAbout((prevMenu) =>
      prevMenu === false ? true : false
    );
  };

  return (
    <ContactAboutContext.Provider
      value={{
        isMenuOpenAbout,
        toggleMenuAbout,
        isMenuOpenContact,
        toggleMenuContact,
        isMenuOpenNav,
        toggleMenuNav,
        isMenuOpenContactAbout,
        toggleMenuContactAbout,
      }}
    >
      {children}
    </ContactAboutContext.Provider>
  );
};
