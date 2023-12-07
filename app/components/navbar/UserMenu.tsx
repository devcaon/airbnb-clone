"use client"

import { RiGlobalLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "../Avatar";
import React, { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {

  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  return (
    <div className="relative">
      <div className="flex items-center gap-2">

        {/* Your home */}
        <div onClick={() => { }} className="hidden md:block text-sm font-bold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Airbnb your home
        </div>

        {/* language */}
        <div onClick={() => { }} className="hidden md:block text-sm font-semibold py-3 px-3 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          <RiGlobalLine size={18} />
        </div>

        {/* User menu */}
        <div onClick={toggleOpen} className="p-4 md:py-2 md:px-3 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-lg shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => { }} label="Winter release features" fontW/>
                <hr />
                <MenuItem onClick={() => { }} label="Messages" fontW/>
                <MenuItem onClick={() => { }} label="Notifications" fontW/>
                <MenuItem onClick={() => { }} label="Trips" fontW/>
                <MenuItem onClick={() => { }} label="Wishlists" fontW/>
                <hr />
                <MenuItem onClick={() => { }} label="Airbnb your home" />
                <MenuItem onClick={() => { }} label="Account" />
                <hr />
                <MenuItem onClick={() => { }} label="Gift Cards" />
                <MenuItem onClick={() => { }} label="Help Center" />
                <MenuItem onClick={() => signOut()} label="Log out" />

              </>

            ) : (
              <>
                <MenuItem onClick={() => { }} label="Winter release features" />
                <hr />
                <MenuItem onClick={loginModal.onOpen} label="Log in" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
                <hr />
                <MenuItem onClick={() => { }} label="Gift cards" />
                <MenuItem onClick={() => { }} label="Airbnb your home" />
                <MenuItem onClick={() => { }} label="Help Center" />
              </>

            )}
          </div>
        </div>
      )
      }
    </div >
  );
}

export default UserMenu;