import { useState } from "react";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  return { searchTerm: debouncedSearchTerm };
};
