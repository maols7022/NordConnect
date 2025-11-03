export const DialogContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = "",
  ...p
}) => {
  const ctx = React.useContext(Ctx);
  if (!ctx || !ctx.open) return null;

  const stop: React.MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation();

  const node = (
    <div
      className="fixed inset-0 z-50 pointer-events-auto"
      onClick={() => ctx.setOpen(false)}
      aria-modal="true"
      role="dialog"
    >
      {/* Mørk bakgrunn */}
      <div className="fixed inset-0 bg-black/40" />
      {/* Sentralisert innhold */}
      <div
        className="fixed inset-0 flex items-center justify-center z-10"
        onClick={stop}
      >
        <div
          className={`w-[min(90vw,48rem)] rounded-2xl border bg-white p-6 shadow-xl ${className}`}
          {...p}
        />
      </div>
    </div>
  );

  return ReactDOM.createPortal(node, document.body);
};
