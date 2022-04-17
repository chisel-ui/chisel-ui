import type { Maybe } from "./utils";

export const validCSSColorNames = [
  "black",
  "silver",
  "gray",
  "white",
  "maroon",
  "red",
  "purple",
  "green",
  "lime",
  "olive",
  "yellow",
  "navy",
  "blue",
  "teal",
  "aqua",
  "orange",
  "aliceblue",
  "antiquewhite",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "blanchedalmond",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkgrey",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "greenyellow",
  "grey",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightgrey",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "limegreen",
  "linen",
  "magenta",
  "fuchsia",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "oldlace",
  "olivedrab",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "skyblue",
  "slateblue",
  "slategray",
  "slategrey",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "whitesmoke",
  "yellowgreen",
  "rebeccapurple",
];

export function isValidHSL(hslString: string): boolean {
  if (typeof hslString !== "string")
    throw new Error(`'hslString' must be a string`);

  const csvLength = hslString
    .replace(/((hsla)|(hsl))|\(|\)|\s/g, "")
    .split(",").length;

  const isAlpha = hslString.startsWith("hsla(");

  const isCSVLengthValid = csvLength === 3 || csvLength === 4;
  if (
    !hslString.startsWith(isAlpha ? "hsla(" : "hsl(") ||
    !hslString.endsWith(")") ||
    !isCSVLengthValid
  )
    return false;
  const { hue, saturation, lightness, alpha } = parseHSL(hslString);

  const hueNum = parseFloat(hue);
  if (hueNum > 360 || hueNum < 0) return false;
  const saturationNum = parseFloat(saturation);
  if (saturationNum > 100 || saturationNum < 0) return false;
  const lightnessNum = parseFloat(lightness);
  if (lightnessNum > 100 || lightnessNum < 0) return false;

  if (isNaN(parseFloat(hue.replace(/(deg|rad|grad|turn)$/, "")))) return false;
  if (!saturation.endsWith("%") && saturationNum !== 0) return false;
  if (isNaN(parseFloat(saturation.replace(/%$/, "")))) return false;
  if (!lightness.endsWith("%") && lightnessNum !== 0) return false;
  if (isNaN(parseFloat(lightness.replace(/%$/, "")))) return false;

  if (isAlpha && alpha) {
    const alphaStr = alpha as string;
    const alphaNum = parseFloat(alpha as string);
    if (alphaStr.endsWith("%")) {
      if (alphaNum > 100 || alphaNum < 0) return false;
    } else {
      if (alphaNum > 1 || alphaNum < 0) return false;
    }
  }

  return true;
}

export function isValidColorName(colorName: string): boolean {
  if (typeof colorName !== "string")
    throw new Error(`'colorName' must be a string`);
  if (!colorName) return false;
  return validCSSColorNames.includes(colorName.toLowerCase());
}

interface HSLAColor {
  hue: string;
  saturation: string;
  lightness: string;
  alpha: string;
}

export function parseHSL(hslString: string): HSLAColor {
  const csvString = hslString.replace(/((hsla)|(hsl))|\(|\)|\s/g, "");
  const [hue, saturation, lightness, alpha] = csvString.split(",");
  return { hue, saturation, lightness, alpha: alpha ?? "" };
}

export function validateHexRGB(rgbString: string): boolean {
  if (!rgbString.startsWith("#")) return false;

  // Convert the hex color string to uppercase and remove the hash symbol
  rgbString = rgbString.toUpperCase().slice(1);

  if (rgbString.length !== 6 && rgbString.length !== 3) return false;
  const areAllValuesValidHex = [...rgbString].every(
    (s) => s.search(/[0-9A-F]/g) !== -1
  );
  if (!areAllValuesValidHex) return false;
  return true;
}

export function validateFunctionalRGB(rgbString: string): boolean {
  const csvLength = rgbString
    .replace(/((rgba)|(rgb))|\(|\)|\s/g, "")
    .split(",").length;

  const isAlpha = rgbString.startsWith("rgba(");

  const isCSVLengthValid = csvLength === 3 || csvLength === 4;
  if (
    !rgbString.startsWith(isAlpha ? "rgba(" : "rgb(") ||
    !rgbString.endsWith(")") ||
    !isCSVLengthValid
  )
    return false;
  const parsedRGBA = parseRGB(rgbString);
  const red = parseFloat(parsedRGBA.red);
  const green = parseFloat(parsedRGBA.green);
  const blue = parseFloat(parsedRGBA.blue);
  const colorValuesStr = [parsedRGBA.red, parsedRGBA.green, parsedRGBA.blue];
  const areAllColorValuesInPercentage = colorValuesStr.every((c) =>
    c.endsWith("%")
  );
  const areAllColorValuesInNumber = colorValuesStr.every(
    // This line of code tests if the whole string is a valid number
    (c) => c.match(/[0-9]|\./g)?.length === c.length
  );

  if (!areAllColorValuesInNumber && !areAllColorValuesInPercentage)
    return false;

  if (areAllColorValuesInPercentage) {
    const isRedValid = !isNaN(red) && red >= 0 && red <= 100;
    const isGreenValid = !isNaN(green) && green >= 0 && green <= 100;
    const isBlueValid = !isNaN(blue) && blue >= 0 && blue <= 100;
    if (!isRedValid || !isGreenValid || !isBlueValid) return false;
  } else if (areAllColorValuesInNumber) {
    const isRedValid = !isNaN(red) && red >= 0 && red <= 255;
    const isGreenValid = !isNaN(green) && green >= 0 && green <= 255;
    const isBlueValid = !isNaN(blue) && blue >= 0 && blue <= 255;
    if (!isRedValid || !isGreenValid || !isBlueValid) return false;
  } else {
    return false;
  }
  if (isAlpha && parsedRGBA.alpha) {
    const alpha = parseFloat(parsedRGBA.alpha as string);
    if (isNaN(alpha)) return false;
    if (parsedRGBA.alpha?.endsWith("%")) {
      if (alpha < 0 || alpha > 100) return false;
    }
    if (!parsedRGBA.alpha?.endsWith("%")) {
      if (alpha > 1 || alpha < 0) return false;
    }
  }
  return true;
}

interface RGBAColor {
  red: string;
  green: string;
  blue: string;
  alpha: string;
}

export function parseRGB(rgbString: string): RGBAColor {
  const csvString = rgbString.replace(/((rgba)|(rgb))|\(|\)|\s/g, "");
  const [red, green, blue, alpha] = csvString.split(",");
  return { red, green, blue, alpha: alpha ?? "" };
}

export type Color = string | HSLAColor | RGBAColor

export function isValidRGB(rgbString: string): boolean {
  if (typeof rgbString !== "string")
    throw new Error(`'rgbString' must be a string`);
  if (rgbString.startsWith("#")) return validateHexRGB(rgbString);
  else return validateFunctionalRGB(rgbString);
}

export function isValidColor(value: string): boolean {
  return isValidColor(value) || isValidHSL(value) || isValidRGB(value);
}

export function getColor(
  value: string
): Maybe<string> {
  return isValidColor(value) ? value : undefined
}
