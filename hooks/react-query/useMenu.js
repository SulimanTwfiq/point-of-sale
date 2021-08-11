import { useQuery } from "react-query"

function fetchMenu() {
  return fetch("/api/menus").then((res) => res.json())
}

export const useMenuQuery = ({ options = {} } = {}) => {
  const defaultOptions = { staleTime: Infinity, refetchOnWindowFocus: false }
  return useQuery("menu", fetchMenu, { ...defaultOptions, ...options })
}
