import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { AuditModal } from "../components/AuditModal";

export interface AuditContextType {
  isAuditModalOpen: boolean;
  selectedService: string | undefined;
  openAuditModal: (preselectService?: string) => void;
  closeAuditModal: () => void;
}

const AuditContext = createContext<AuditContextType | undefined>(undefined);

export interface AuditProviderProps {
  children: ReactNode;
}

export const AuditProvider: React.FC<AuditProviderProps> = ({ children }) => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const openAuditModal = useCallback((preselectService?: string) => {
    setSelectedService(preselectService);
    setIsAuditModalOpen(true);
  }, []);

  const closeAuditModal = useCallback(() => {
    setIsAuditModalOpen(false);
    setSelectedService(undefined);
  }, []);

  return (
    <AuditContext.Provider
      value={{
        isAuditModalOpen,
        selectedService,
        openAuditModal,
        closeAuditModal,
      }}
    >
      {children}
      <AuditModal />
    </AuditContext.Provider>
  );
};

export const useAudit = (): AuditContextType => {
  const context = useContext(AuditContext);
  if (!context) {
    throw new Error("useAudit must be used within an AuditProvider");
  }
  return context;
};

export const useAuditModal = useAudit;
export default AuditContext;
