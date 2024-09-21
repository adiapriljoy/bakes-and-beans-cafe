/**
 * Darken a given hex color by a specified factor.
 *
 * @param hexColor - The hex color code (e.g., "#RRGGBB").
 * @param factor - The factor by which to darken the color (0.0 to 1.0).
 * @returns - The darkened hex color code.
 */
export function darkenHexColor(hexColor: string, factor: number): string {
  // Validate hex color format
  if (!/^#[0-9A-Fa-f]{6}$/.test(hexColor)) {
    throw new Error(
      "Invalid hex color code. It should be in the format '#RRGGBB'."
    );
  }

  if (factor < 0.0 || factor > 1.0) {
    throw new Error("Factor should be between 0.0 and 1.0.");
  }

  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  const darken = (color: number): number =>
    Math.max(0, Math.min(255, Math.floor(color * (1 - factor))));

  const darkenedR = darken(r);
  const darkenedG = darken(g);
  const darkenedB = darken(b);

  const toHex = (value: number): string =>
    value.toString(16).padStart(2, "0").toUpperCase();

  return `#${toHex(darkenedR)}${toHex(darkenedG)}${toHex(darkenedB)}`;
}

// Example usage:
// const darkenedColor = darkenHexColor("#FF5733", 0.2);
