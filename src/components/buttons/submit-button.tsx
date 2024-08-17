import React from "react"

interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.FormEvent) => void;
}
export default function Button({children, onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className="btn btn-primary">{children}</button>
  )
}
