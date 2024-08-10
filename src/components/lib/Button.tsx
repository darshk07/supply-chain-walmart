type Props = {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  cn?: string;
};

export function Button({
  children,
  type,
  cn,
  ...props
}: Props & React.HTMLProps<HTMLButtonElement>) {
  let className =
    "flex items-center justify-center bg-white px-4 py-2 text-primary rounded-xl border-2";

  if (type == "primary") {
    className =
      "flex items-center justify-center bg-primary p-4 text-white rounded-xl";
  } else if (type == "secondary") {
    className =
      "flex items-center justify-center bg-secondary p-4 text-white rounded-xl";
  }

  return (
    <button {...props} className={`${className} ${cn}`}>
      {children}
    </button>
  );
}
