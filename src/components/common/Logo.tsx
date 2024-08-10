"use client";
type Props = {
  size?: "small" | "large";
};

const Logo = ({ size }: Props) => (
  <div
    className={`text-primary ${size === "small" ? "text-2xl" : "text-3xl"} font-extrabold`}
    onClick={() => window.location.replace("/about")}
  >
    D-ERP
  </div>
);

export default Logo;
