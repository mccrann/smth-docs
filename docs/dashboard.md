# Dashboard overview

The **Dashboard** gives you a quick summary of activity in the SMTH Payments demo. It shows the value of successful payments, refunds, and payouts, followed by a list of recent payments.

> **Demo environment**
>
> SMTH Payments is a browser-based demonstration using synthetic data. It does not connect to a bank, payment processor, or real customer account. Changes are saved only in your current browser.

## Open the Dashboard

1. Open the SMTH Payments demo.
2. Select **View dashboard** on the welcome screen.
3. Enter your name when prompted.
4. Select **Continue**.

Your name is stored in the browser and used in the welcome message. On later visits from the same browser profile, the demo may open the Dashboard without asking for your name again.

If no name is available, the welcome message uses a generic greeting.

## Understand the summary cards

The top of the Dashboard contains three summary cards.

### Successful payments

This card shows the combined value of payments whose current status is **Paid**.

It does not include:

- Pending payments
- Failed payments
- Refunded payments

When a paid payment is refunded, it is removed from the successful-payment total.

### Refunds

This card shows the total value of payments that have been fully refunded in the demo.

Refunds are created from the **Payments** page. The demo currently supports full refunds only.

### Payouts

This card shows a payout total calculated from the demo's synthetic payout data.

The dedicated **Payouts** page is currently marked **Coming soon**, so there is no detailed payout list or payout management workflow yet. Treat this card as sample dashboard information rather than a reconciliation or settlement record.

## Review recent payments

The **Recent payments** table shows a snapshot of payment activity.

It displays the 8 most recent payments.

| Column | Description |
|---|---|
| **Customer** | The customer's name and email address. |
| **Date** | The date and time recorded for the payment. |
| **Status** | The payment's current state. |
| **Method** | The payment method and masked final four digits where available. |
| **Amount** | The value of the payment. |

For the complete payment list and refund actions, open **Payments** from the sidebar.

## Payment statuses

The demo uses the following payment statuses.

### Paid

The payment completed successfully. Paid payments are included in the **Successful payments** total and can be fully refunded from the Payments page.

### Pending

The payment has not completed yet. Pending payments are not included in successful-payment totals and cannot be refunded.

### Failed

The payment did not complete. Failed payments are not included in successful-payment totals and cannot be refunded.

### Refunded

The full payment amount was refunded. Refunded payments are included in the refund totals and are no longer counted as successful payments.

## How changes appear on the Dashboard

Actions taken elsewhere in the demo can change the Dashboard totals.

- Refunding a paid payment reduces **Successful payments** and increases **Refunds**.
- Adding or archiving a customer changes the customer list but does not change historical payment records.
- Resetting the demo restores the original sample customers, payments, refunds, and payout data.

Refresh the page if a change made in another browser tab is not shown immediately.

## Reset the demo data

Use **Reset demo** to remove your changes and restore the original synthetic records.

1. Select **Reset demo** in the upper-right corner.
2. Confirm the reset if your browser asks for confirmation.
3. Wait for the page to reload with the original sample data.

Resetting removes changes such as:

- Customers you added
- Customers you archived
- Refunds you created
- Other edits to the locally stored demo records

The displayed name may remain because it is stored separately from the transaction data.

> Resetting is not reversible. There is no export or backup function in the current demo.

## Where the demo stores information

The demo stores changes in your browser's local storage.

This means:

- Data is available only in the same browser profile and on the same device.
- Another browser or device will have its own separate copy of the demo.
- Private or incognito browsing may remove the data when the window is closed.
- Clearing browser site data can restore or remove the locally saved demo state.
- No real payment, bank, or customer information should be entered.

## Troubleshooting

### The Dashboard does not load

Refresh the page. If the problem continues:

1. Confirm that JavaScript is enabled.
2. Open the demo in a current browser.
3. Disable content-blocking extensions temporarily.
4. Clear the site's stored data, then reopen the demo.

Clearing site data removes local demo changes.

### My totals look different from the original demo

You may have issued a refund or changed locally stored records. Select **Reset demo** to restore the original dataset.

### A recent payment is missing

The Dashboard is a summary view rather than the complete payment history. Open **Payments** to review the full list.

### My name is wrong

The welcome name is stored locally in the browser. Clear the site's browser storage to remove it. Be aware that this may also reset all demo data.

### Changes from another device are missing

The demo does not sync data between devices or browsers. Each browser profile stores its own independent copy.

## Current limitations

The Dashboard does not currently support:

- Custom date ranges
- Filtering or searching recent payments
- Exporting reports
- Opening a payment detail page
- Editing dashboard metrics
- Real-time bank or payment-processor data
- Multi-user or cross-device synchronisation