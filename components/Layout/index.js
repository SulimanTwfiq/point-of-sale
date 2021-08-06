import React, { useState } from "react"
import { Button } from "components/shared"
import Image from "next/image"
import clsx from "clsx"

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-[110px,1fr]">
      <nav className="rounded-tr-2xl rounded-br-2xl bg-secondary-1100 ">
        <Pages />
      </nav>
      {children}
    </div>
  )
}

const Pages = () => {
  const [selectedPage, setSelectedPage] = useState("homePage")
  const pages = [
    { name: "homePage", icon: "home-page.svg" },
    { name: "discounts", icon: "discounts.svg" },
    { name: "messages", icon: "messages.svg" },
    { name: "notifications", icon: "notifications.svg" },
    { name: "settings", icon: "settings.svg" },
    { name: "statistics", icon: "statistics.svg" },
  ]
  return pages.map((p) => (
    <div
      key={p.icon}
      className={clsx(
        "p-5 translate-x-3.5	my-2 rounded-tl-2xl rounded-bl-2xl	",
        selectedPage === p.name && "bg-primary-1100 "
      )}
    >
      <Button
        variant={selectedPage === p.name ? "solid" : "none"}
        className="h-14 w-14"
        onClick={() => setSelectedPage(p.name)}
      >
        <Image
          src={`/icons/pages/${p.icon}`}
          className={selectedPage === p.name ? "brightness-0 invert" : ""}
          alt={p.name}
          width={30}
          height={30}
        />
      </Button>{" "}
    </div>
  ))
}

export default Layout
