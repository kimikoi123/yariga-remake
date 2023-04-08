

const convert = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const normalFormatter = (amount: number) => {
    return new Intl.NumberFormat().format(amount)
}

export const currencyFormatter = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount)
}