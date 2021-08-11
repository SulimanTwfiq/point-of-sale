import { Button } from "components/shared"
import Image from "next/image"
import clsx from "clsx"
import { useRouter } from "next/router"
import { AnimateSharedLayout } from "framer-motion"
import ActivePageTabContainer from "./ActivePageTabContainer"

const Navigation = () => {
  return (
    <nav className="grid grid-rows-[90px,1fr] h-full rounded-tr-2xl rounded-br-2xl bg-secondary-1100">
      <Logo />
      <PagesTabs />
    </nav>
  )
}

const PagesTabs = () => {
  const router = useRouter()
  const pages = [
    { url: "/", icon: "home-page.svg" },
    { url: "/discounts", icon: "discounts.svg" },
    { url: "/statistics", icon: "statistics.svg" },
    { url: "/messages", icon: "messages.svg" },
    { url: "/notifications", icon: "notifications.svg" },
    { url: "/settings", icon: "settings.svg" },
    {
      url: "/logout",
      icon: "logout.svg",
      onClick: () =>
        alert("Sorry you cannot logout , we dont have this functionality at this moment ."),
    },
  ]

  return (
    <AnimateSharedLayout>
      <div className="flex flex-col items-center justify-around overflow-hidden">
        {pages.map((page) => {
          const isItTheSelectedPage = router.pathname === page.url
          return (
            <div className="relative" key={page.url}>
              {isItTheSelectedPage && <ActivePageTabContainer />}

              <Button
                variant={isItTheSelectedPage ? "solid" : "none"}
                className={clsx(
                  "h-14 w-14 translate-x-0 ",
                  isItTheSelectedPage && "shadow-tertiary"
                )}
                onClick={() => {
                  if (page.onClick) {
                    page.onClick()
                  } else {
                    router.push(page.url)
                  }
                }}
              >
                <Image
                  src={`/icons/pages/${page.icon}`}
                  className={clsx(
                    isItTheSelectedPage ? "brightness-0 invert" : "",
                    "rotate-[19deg]"
                  )}
                  alt={page.url}
                  width={22}
                  height={22}
                />
              </Button>
            </div>
          )
        })}
      </div>
    </AnimateSharedLayout>
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
export default Navigation
