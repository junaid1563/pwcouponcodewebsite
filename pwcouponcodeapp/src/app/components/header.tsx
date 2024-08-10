"use client";
import React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { WHATSAPP_API } from "../config/constants";

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">PW Coupon Code</span>
            <span className="flex justify-between">
              <AcademicCapIcon className="h-8 w-auto mr-2" />
              PW Coupon Code
            </span>
          </a>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            FAQ
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Enroll
          </a>
          <a
            href={WHATSAPP_API + `How are you?`}
            target="_blank"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Get in Touch
          </a>
        </PopoverGroup>
      </nav>
    </header>
  );
}
