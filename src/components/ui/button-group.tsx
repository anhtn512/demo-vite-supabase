import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  children: React.ReactNode
}

export function ButtonGroup({
  orientation = "horizontal",
  className,
  children,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={cn(
        "inline-flex rounded-md shadow-sm",
        orientation === "horizontal" ? "flex-row" : "flex-col",
        className
      )}
      role="group"
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          const isFirst = index === 0
          const isLast = index === React.Children.count(children) - 1
          const childElement = child as React.ReactElement<{ className?: string }>
          
          return React.cloneElement(childElement, {
            className: cn(
              childElement.props.className,
              orientation === "horizontal"
                ? cn(
                    !isFirst && "rounded-l-none -ml-px",
                    !isLast && "rounded-r-none"
                  )
                : cn(
                    !isFirst && "rounded-t-none -mt-px",
                    !isLast && "rounded-b-none"
                  )
            ),
          })
        }
        return child
      })}
    </div>
  )
}
