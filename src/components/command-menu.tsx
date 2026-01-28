"use client";

import * as React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { CommandIcon, Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex h-14 w-14 rounded-full shadow-2xl md:hidden print:hidden"
      >
        <CommandIcon className="my-6 h-6 w-6" />
      </Button>

      <div className="fixed bottom-0 left-0 right-0 hidden border-t bg-white/80 p-2 text-center text-sm text-muted-foreground backdrop-blur-xl dark:bg-black/80 print:hidden md:block">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          ⌘K
        </kbd>{" "}
        to open command menu
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
            >
              <span>Print Resume</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map((link) => (
              <CommandItem
                key={link.url}
                onSelect={() => {
                  setOpen(false);
                  window.open(link.url, "_blank");
                }}
              >
                <span>{link.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => setTheme("light")}>
              {" "}
              <Sun className="mr-2 h-4 w-4" /> Light{" "}
            </CommandItem>
            <CommandItem onSelect={() => setTheme("dark")}>
              {" "}
              <Moon className="mr-2 h-4 w-4" /> Dark{" "}
            </CommandItem>
            <CommandItem onSelect={() => setTheme("system")}>
              {" "}
              <Laptop className="mr-2 h-4 w-4" /> System{" "}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
