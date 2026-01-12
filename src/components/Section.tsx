import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export const Section = ({ children, id, className, ...props }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn("py-20 px-6 md:px-12 max-w-7xl mx-auto", className)}
            {...props}
        >
            {children}
        </section>
    );
};

export { cn };
