function validarCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove any non-digit characters

  if (cnpj.length !== 14) {
    return false; // CNPJ must have 14 digits
  }

  // Checking for known invalid patterns
  if (
    cnpj === '00000000000000' ||
    cnpj === '11111111111111' ||
    cnpj === '22222222222222' ||
    cnpj === '33333333333333' ||
    cnpj === '44444444444444' ||
    cnpj === '55555555555555' ||
    cnpj === '66666666666666' ||
    cnpj === '77777777777777' ||
    cnpj === '88888888888888' ||
    cnpj === '99999999999999'
  ) {
    return false;
  }

  // Calculating the verification digits
  let length = cnpj.length - 2;
  let numbers = cnpj.substring(0, length);
  const digits = cnpj.substring(length);
  let sum = 0;
  let position = length - 7;

  for (let i = length; i >= 1; i--) {
    sum += numbers.charAt(length - i) * position--;
    if (position < 2) {
      position = 9;
    }
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== Number(digits.charAt(0))) {
    return false;
  }

  length++;
  numbers = cnpj.substring(0, length);
  sum = 0;
  position = length - 7;

  for (let i = length; i >= 1; i--) {
    sum += numbers.charAt(length - i) * position--;
    if (position < 2) {
      position = 9;
    }
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== Number(digits.charAt(1))) {
    return false;
  }

  return true; // CNPJ is valid
}


function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, ''); // Remove any non-digit characters

  if (cpf.length !== 11) {
    return false; // CPF must have 11 digits
  }

  // Checking for known invalid patterns
  if (
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    return false;
  }

  // Calculating the verification digits
  let sum = 0;
  let rest;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(cpf.substring(9, 10))) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(cpf.substring(10, 11))) {
    return false;
  }

  return true; // CPF is valid
}
d
