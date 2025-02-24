// FilterContext.js

import React, { createContext, useState } from "react"

// 1. Create the context
export const FilterContext = createContext(null)

// 2. Create the provider component
export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    time: [],
    visibility: 5,
    category: [],
    frequency: [],
  })

  // We'll store "searchQuery" here too if you want it global
  const [searchQuery, setSearchQuery] = useState("")

  // This object is what we expose to the rest of the app
  const value = {
    filters,
    setFilters,
    searchQuery,
    setSearchQuery,
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}
