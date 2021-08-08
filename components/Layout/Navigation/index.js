import { useEffect, useState } from "react"
import { Button } from "components/shared"
import Image from "next/image"
import clsx from "clsx"
import styles from "./Navigtation.module.css"
import { useRouter } from "next/router"

const Navigation = () => {
  return (
    <nav className="grid grid-rows-[90px,1fr] h-full rounded-tr-2xl rounded-br-2xl bg-secondary-1100">
      <Logo />
      <PagesTabs />
    </nav>
  )
}
const Logo = () => {
  return (
    <div
      className={clsx("pt-2 px-2 translate-x-2.5 pb-0 mt-5 ml-3	h-14 w-14 bg-[#543C3B] rounded-xl")}
    >
      <Image
        src={`/icons/pages/logo.svg`}
        className={"rotate-[19deg]"}
        alt={"logo"}
        width={60}
        height={60}
      />
    </div>
  )
}
const PagesTabs = () => {
  const router = useRouter()
  console.log("router.query", router.pathname)
  const pages = [
    { name: "/", icon: "home-page.svg" },
    { name: "/discounts", icon: "discounts.svg" },
    { name: "/statistics", icon: "statistics.svg" },
    { name: "/messages", icon: "messages.svg" },
    { name: "/notifications", icon: "notifications.svg" },
    { name: "/settings", icon: "settings.svg" },
    { name: "/logout", icon: "logout.svg" },
  ]

  return (
    <div className="flex flex-col justify-around">
      {pages.map((p) => (
        <div
          key={p.icon}
          className={clsx(
            "py-3 px-3 translate-x-2.5 rounded-tl-2xl rounded-bl-2xl	",
            router.pathname === p.name && "bg-primary-1100",
            styles["button-curve"]
          )}
        >
          <Button
            variant={router.pathname === p.name ? "solid" : "none"}
            className={clsx("h-14 w-14", router.pathname === p.name && "shadow-tertiary")}
            onClick={() => {
              console.log("p", p.name)
              router.push(p.name)
            }}
          >
            <Image
              src={`/icons/pages/${p.icon}`}
              className={clsx(
                router.pathname === p.name ? "brightness-0 invert" : "",
                "rotate-[19deg]"
              )}
              alt={p.name}
              width={22}
              height={22}
            />
          </Button>
        </div>
      ))}
    </div>
  )
}
export default Navigation
