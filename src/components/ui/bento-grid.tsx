import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 transition duration-200 shadow-input border-t border-gray-300 p-4 justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div>
        {icon}
        <div className="font-medium mb-2 mt-2">
          {title}
        </div>
        <div className="">
          {description}
        </div>
      </div>
      {header}
    </div>
  );
};
