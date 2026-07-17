# Payouts

The dedicated **Payouts** page is currently under development and displays a **Coming soon** message.

A payout total is available on the Dashboard, but the current demo does not provide a detailed payout list or payout-management workflow.

> **Demo environment**
>
> All payout information is synthetic. It is not connected to a bank account, payment processor, or settlement system.

## Open the Payouts page

1. Open the SMTH Payments dashboard.
2. Select **Payouts** in the sidebar.

The page currently contains an overview heading and a Coming soon illustration.

## View the available payout summary

Return to the **Dashboard** to view the payout summary card.

The card is calculated from sample payout data stored in the browser. It is intended to demonstrate how a payout metric could appear in a product dashboard.

Because there is no detailed payout page yet, the total should not be used to:

- Reconcile payment activity
- Predict a real bank deposit
- Confirm settlement status
- Investigate a missing payout
- Verify fees or adjustments

## What is not available yet

The current Payouts page does not show:

- Individual payout records
- Payout dates
- Destination bank details
- Payout statuses
- Included payments
- Refund or fee adjustments
- Settlement references
- Downloadable statements
- Filters or date ranges
- Payout scheduling controls
- Actions to create, retry, cancel, or change a payout

## Reset payout demo data

The payout card uses locally stored synthetic data and is included in the full demo reset.

1. Open the Dashboard.
2. Select **Reset demo**.
3. Confirm the reset if prompted.

This restores the original payout sample along with the original customers, payments, and refund state.

> Resetting is not reversible and removes all local changes across the demo.

## How payout data is stored

The current sample data is stored in browser local storage.

As a result:

- It is limited to the current browser profile.
- It does not sync between devices.
- Clearing site storage may reset it.
- Private browsing may discard it when the session closes.
- It has no connection to a real financial account.

## Troubleshooting

### The Payouts page only says Coming soon

This is expected in the current version. The page has been added to the product navigation but its detailed functionality has not yet been implemented.

### The payout card is missing or does not load

Refresh the Dashboard. If the issue continues:

1. Confirm that JavaScript is enabled.
2. Confirm that browser storage is available.
3. Disable restrictive content-blocking extensions temporarily.
4. Clear the site's stored data and reopen the demo.

Clearing site data removes locally made changes.

### The payout total differs on another device

The demo does not synchronise data. Each browser profile uses its own locally stored sample.

### I need details about a payout

Detailed payout records are not available in the current demo. The Dashboard card is the only payout information exposed in the interface.

## Current limitations

The Payouts page is informational only until its functionality is built. It cannot currently be used for payout reporting, reconciliation, scheduling, status tracking, or bank-account management.
