import { useQuery } from "react-query"

function fetchMenu() {
  return fetch("/api/menus").then((res) => res.json())
}

export const useMenuQuery = ({ options = {} } = {}) => {
  const defaultOptions = { staleTime: 0 }
  return useQuery("menu", fetchMenu, { ...defaultOptions, ...options })
}
