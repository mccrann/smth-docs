# Getting Started

## Welcome to SMTH Payments

SMTH Payments helps businesses accept online payments, manage refunds, and track payouts from a single dashboard.

This guide will help you connect your account and process your first payment.

## Before you begin

You’ll need:

- A SMTH Payments account
- An API key
- A test merchant account

## Generate an API key

1. Sign in to the SMTH Payments Dashboard.
2. Go to **Settings → API Keys**.
3. Select **Create API Key**.
4. Copy your key and store it securely.

> Never expose secret API keys in client-side applications.

## Making your first request

Send a `POST` request to the Payments endpoint using your API key.

A successful request returns a payment ID and an initial payment status.