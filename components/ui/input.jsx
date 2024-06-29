import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-light dark:bg-primary px-4 py-5 text-base placeholder:text-black/80 text-black dark:text-white/80 dark:placeholder:text-white/60 outline-none ",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
