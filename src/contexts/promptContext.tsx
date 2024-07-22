import { Prompt } from "@/types/Insight";
import React, { createContext, ReactNode, useState, useContext } from "react";

interface PromptContextType {
  prompt: Prompt | null;
  setPrompt: (value: Prompt | null) => void;
}
const PromptContext = createContext<PromptContextType | null>(null);

export const PromptProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [prompt, setPrompt] = useState<Prompt | null>(null);

  return (
    <PromptContext.Provider value={{ prompt, setPrompt }}>
      {children}
    </PromptContext.Provider>
  );
};

export const usePrompt = (): PromptContextType => {
  const context = useContext(PromptContext);
  if (!context) {
    throw new Error("useVariable must be used within a VariableProvider");
  }
  return context;
};
