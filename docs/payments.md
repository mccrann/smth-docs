# Manage payments

The **Payments** page shows the demo's complete payment list, summary totals, payment statuses, and available refund actions.

> **Demo environment**
>
> All payments are synthetic. Refunding a payment changes only the locally stored demo data and does not move real money.

## Open the Payments page

1. Open the SMTH Payments dashboard.
2. Select **Payments** in the sidebar.

The page loads the latest locally stored payment data and displays the newest payments first.

## Understand the payment summaries

Four cards appear above the payment table. Each card shows both a payment count and a combined value.

| Summary | Included payments |
|---|---|
| **Successful payments** | Payments with the status **Paid** |
| **Refunds** | Payments with the status **Refunded** |
| **Pending** | Payments with the status **Pending** |
| **Failed** | Payments with the status **Failed** |

A refunded payment moves out of the successful-payment count and value and into the refund count and value.

## Review the payment table

| Column | Description |
|---|---|
| **Customer** | The customer's name and email address. |
| **Date** | The date and time recorded for the payment. |
| **Status** | Paid, Pending, Failed, or Refunded. |
| **Method** | The payment method and masked final four digits where available. |
| **Amount** | The full value of the payment. |
| **Actions** | Displays **Refund** when the payment is eligible. Otherwise, an em dash is shown. |

The current demo does not include a separate payment-details screen. All available payment information appears in this table.

## Payment statuses

### Paid

The payment completed successfully.

A paid payment:

- Appears in the successful-payment totals
- Displays a **Refund** action
- Can be refunded for its full amount

### Pending

The payment has not completed.

A pending payment:

- Appears in the pending totals
- Is not counted as successful
- Cannot be refunded

### Failed

The payment did not complete.

A failed payment:

- Appears in the failed totals
- Is not counted as successful
- Cannot be refunded

### Refunded

The full payment amount has been refunded.

A refunded payment:

- Appears in the refund totals
- Is removed from successful-payment totals
- No longer displays a refund action
- Cannot be refunded again

## Issue a full refund

Only payments with the status **Paid** can be refunded.

1. Find the payment in the table.
2. Confirm that its status is **Paid**.
3. Select **Refund** in the **Actions** column.
4. Review the confirmation message, including the full refund amount.
5. Confirm the refund.

After the refund is recorded:

- The payment status changes to **Refunded**.
- The **Refund** action is removed.
- The successful-payment count and value decrease.
- The refund count and value increase.
- Dashboard totals reflect the updated data.
- A success message confirms the refunded amount.

## Refund restrictions

The current demo supports a deliberately limited refund workflow.

You cannot:

- Enter a partial refund amount
- Refund a Pending or Failed payment
- Refund the same payment more than once
- Cancel or reverse a completed refund
- Add a reason or internal note
- Send a refund notification
- Model bank-processing or card-processing time

Because this is a browser demo, an eligible refund is recorded immediately after confirmation.

## Reset payment data

Use **Reset demo data** to restore the original sample records.

1. Select **Reset demo data**.
2. Confirm the reset if prompted.
3. Wait for the payment summaries and table to reload.

Resetting removes refunds you created and restores all original payment statuses and values.

> Resetting also affects customer and payout demo data. It is not reversible.

## How payment data is stored

Payment changes are saved in browser local storage.

As a result:

- Your changes remain after a normal page refresh.
- The data is limited to the current browser profile.
- Changes do not sync to other browsers or devices.
- Clearing site data may remove your changes.
- Private browsing may discard changes when the session closes.

Do not enter real payment or customer information.

## Troubleshooting

### The Refund button is missing

The action is available only when the payment's current status is **Paid**. Pending, Failed, and Refunded payments cannot be refunded.

### I refunded the wrong payment

The demo does not support reversing a refund. Use **Reset demo data** to return all demo records to their original state.

Be aware that reset removes every locally made customer and refund change, not just the selected refund.

### The totals did not update

Refresh the Payments page. If another tab is open, refresh that tab as well because locally stored changes may not be rendered there immediately.

### Payments could not be loaded

Try the following:

1. Refresh the page.
2. Confirm that JavaScript and browser storage are enabled.
3. Disable restrictive privacy or content-blocking extensions temporarily.
4. Clear the site's stored data and reopen the demo.

Clearing site data removes local changes.

### A refund shows an error

Confirm that the payment is still marked **Paid**. A second browser tab may have already changed its status. Refresh the page before trying again.

### The payment list differs on another device

The demo does not use a shared account or server-side database. Each browser profile has independent demo data.

## Current limitations

The Payments page does not currently provide:

- Search
- Filters
- Sorting controls
- Pagination
- Custom date ranges
- Payment creation
- Payment detail pages
- Partial refunds
- Refund reversals
- Receipt or report downloads
- CSV export
- Live payment-processor data
