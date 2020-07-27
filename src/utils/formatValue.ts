const formatValue = (value: number, type = 'income'): string => {
  let formattedValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  if (type === 'outcome') {
    formattedValue = `- ${Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)}`;
  }

  return formattedValue;
};

export default formatValue;
