import cn from "classnames";

interface iInput {
  className?: string;
  placeholder?: string;
  dark?: boolean;
}

export const Input = ({ className, placeholder }: iInput) => {
  return (
    <input
      placeholder={placeholder}
      className={cn(
        className,
        "bg-blackLight py-4 px-5 rounded-lg border border-green inline-block"
      )}
    />
  );
};
