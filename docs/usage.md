# Usage

## Creating a payment

Create a payment by sending the required payment details to the Payments API.

Required fields:

- Amount
- Currency
- Customer ID

Example payment statuses:

- Pending
- Paid
- Failed

## Refunds

Refunds can be created from either the Dashboard or the API.

Refund requests are processed in 5–7 business days.

## Payouts

Payouts transfer available funds to your nominated bank account.

Current payout statuses:

- Pending
- Paid
- Failed
- Deposited

Payouts are processed once each business day.

## Webhooks

SMTH Payments can notify your application when important events occur.

Current webhook events include:

- `payment.created`
- `payment.succeeded`
- `payment.failed`
- `refund.created`
- `refund.completed`

If your endpoint is unavailable, webhook delivery is automatically retried.