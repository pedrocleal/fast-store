const formatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL'
})

export function formatCurrency(value: number) {
  return formatter.format(value);
}