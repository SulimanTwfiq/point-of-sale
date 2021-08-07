import { useQuery } from "react-query"

function fetchMenu() {
  return fetch("/api/menus").then((res) => res.json())
}

export const useMenuQuery = ({ options = {} } = {}) => {
  console.log("options", options)
  return useQuery("menu", fetchMenu, options)
}
