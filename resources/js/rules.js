export function required() {
    return v => !!v || `Campo é obrigatório`;
}

export function email() {
    return v => /\S+@\S+\.\S+/.test(v) || `E-mail deve ser válido`;
}

export function maxLength(maxLength) {
    return v => (v || '').length <= maxLength || `Limite de ${maxLength} caracteres`;
}

export function minLength(minLength) {
    return v => (v || '').length >= minLength || `Mínimo de ${minLength} caracteres`;
}

export function maxInt(max) {
    return v => parseInt(v || 0) <= max || `Valor máximo de ${max}`;
}

export function minInt(min) {
    return v => parseInt(v || 0) >= min || `Valor mínimo de ${min}`;
}

export function maxFloat(max) {
    return v => parseFloat(v || 0) <= max || `Valor máximo de ${max}`;
}

export function minFloat(min) {
    return v => parseFloat(v || 0) >= min || `Valor mínimo de ${min}`;
}
