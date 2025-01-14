import React from 'react'
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
})

const Formatcurruncy = (number) => {
  return CURRENCY_FORMATTER.format(number)
}

export default Formatcurruncy;
