import { Fragment, type ReactNode } from "react";

/**
 * Resalta «Grow Together» dentro de un texto (negrita + color de marca; en
 * fondos morados, turquesa — ver `.brand-name` en globals.css).
 */
export function brand(text: string): ReactNode {
  const parts = text.split(/(Grow Together)/);
  if (parts.length === 1) return text;
  return parts.map((p, i) =>
    p === "Grow Together" ? (
      <strong key={i} className="brand-name">
        {p}
      </strong>
    ) : (
      <Fragment key={i}>{p}</Fragment>
    ),
  );
}
