# FAQ

## How do I get an API key?

API keys can be created from **Settings → API Keys** in the Dashboard.

## Can I test payments?

Yes. We recommend using a test merchant account during development.

## Why is my payment still pending?

Payments may remain in a Pending state while they are being authorised by the payment provider.

## How often are payouts sent?

Payouts are processed once each business day for eligible accounts.

## What happens if my webhook endpoint is unavailable?

SMTH Payments will retry webhook delivery automatically. If delivery continues to fail, you can review failed deliveries from the Dashboard.

## Can I issue a partial refund?

Yes. Both full and partial refunds are supported.

## Is my API key secure?

Keep your API keys private and never include secret keys in frontend applications or public repositories.