import { Dialog, Transition } from "@headlessui/react";
import { StarIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { Fragment } from "react";
import { ShowcaseItem } from "../showcase-item";
import { Pill } from "./pill";

export interface ShowcaseSlideoverProps {
  open: boolean;
  showcase: ShowcaseItem;

  setOpen: (open: boolean) => void;
}

export function ShowcaseSlideOver({
  open,
  showcase,
  setOpen,
}: ShowcaseSlideoverProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-2xl border-left border-left">
                <div className="flex h-full flex-col overflow-y-scroll bg-[#0B090B] shadow-xl">
                  <div className="px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        id="slide-over-heading"
                        className="text-lg font-medium text-white"
                      >
                        Showcase
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="rounded-md text-white "
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Main */}
                  <div>
                    <div className="pb-1 sm:pb-6">
                      <div>
                        <div className="relative h-40 sm:h-56">
                          <img
                            className="absolute h-full w-full object-cover"
                            src={showcase.imageURL}
                            alt=""
                          />
                        </div>
                        <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                          <div className="sm:flex-1">
                            <div>
                              {/* <div className={"p-3"} /> */}
                              <div className="flex items-center">
                                <h3 className="text-white text-lg font-semibold sm:text-2xl">
                                  <StarIcon
                                    className={
                                      "text-[#fcdc4d] h-7 w-7 pr-0 mr-1 inline relative -top-0.5"
                                    }
                                  />
                                  {showcase.name}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pt-1 pb-5 sm:px-0 sm:pt-0">
                      <div className={"px-4 space-y-2 sm:px-6"}>
                        {showcase.tags.map((t, i) => {
                          return (
                            <Pill text={t} key={`tech-${showcase.name}-${i}`} />
                          );
                        })}
                      </div>

                      <dl className="space-y-8 mt-4 px-4 sm:space-y-6 sm:px-6">
                        <div className={"text-white text-sm"}>
                          {!showcase.display && <p>{showcase.description}</p>}
                          {showcase.display && <>{showcase.display}</>}
                        </div>
                        {showcase.url && (
                          <Link href={showcase.url}>
                            <a>
                              <button
                                className={
                                  " bg-[#B69502] hover:bg-[#A28402] text-white mt-4 rounded-md px-4 py-1 text-sm transition-all"
                                }
                              >
                                <span className={"leading-4"}>
                                  View the source
                                </span>
                              </button>
                            </a>
                          </Link>
                        )}
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
