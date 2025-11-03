import * as React from "react";

type DialogCtx = {
  open: boolean;
  setOpen: (v: boolean) => void;
};
const Ctx = React.createContext<DialogCtx | null>(null);

type RootProps = React.PropsWithChildren<{
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}>;

/**
 * Dialog-root. Kan brukes kontrollert (med open/onOpenChange) eller ukontrollert.
 */
export const Dialog: React.FC<RootProps> = ({ open, onOpenChange, children }) => {
  const isControlled = typeof open === "boolean";
  const [internal, setInternal] = React.useState(false);
  const isOpen = isControlled ? (open as boolean) : internal;

  const setOpen = (v: boolean) => {
    if (!isControlled) setInternal(v);
    onOpenChange?.(v);
  };

  // Lukk på Escape
  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return <Ctx.Provider value={{ open: isOpen, setOpen }}>{children}</Ctx.Provider>;
};

type TriggerProps = React.PropsWithChildren<{ asChild?: boolean }>;
export const DialogTrigger: React.FC<TriggerProps> = ({ asChild, children }) => {
  const ctx = React.useContext(Ctx);
  if (!ctx) return <>{children}</>;

  const child = React.Children.only(children) as React.ReactElement;
  const on
