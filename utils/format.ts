import numeral from 'numeral';

/**
 * @description format a value into currency
 * @param value number
 * @param currency string
 */
export function formartCurrency(
  value: number,
  currency: string = 'KES',
): string {
  return `${currency} ${numeral(value).format('0,0.00')}`;
}
