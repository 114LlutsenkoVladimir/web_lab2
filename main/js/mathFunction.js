export function calcY(a, b, t) {
    return Math.exp(-b * t) * Math.sin(a * t + b) - Math.sqrt(Math.abs(b * t + a));
}

export function calcS(a, b, t) {
    return b * Math.sin(a * (t ** 2) * Math.cos(2 * t)) - 1;
}