import React, { createContext, ReactNode, useContext, useState } from "react";

interface EmployeeContextType {
  isShowAddEmployee: boolean;
  setShowAddEmployee: (show: boolean) => void;
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(
  undefined
);

export const EmployeeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isShowAddEmployee, setShowAddEmployee] = useState<boolean>(false);

  return (
    <EmployeeContext.Provider value={{ isShowAddEmployee, setShowAddEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error(
      "useEmployeeContext must be used an EmployeeContextProvider"
    );
  }
  return context;
};
