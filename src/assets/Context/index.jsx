
import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';


const AppContext = createContext();


const AppProvider = ({ children }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (event) => {
        setIsChecked(event.target.checked);
      };

  return (
    <AppContext.Provider
      value={{ isChecked,setIsChecked, handleChange }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
// Hook para usar o contexto
const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };
