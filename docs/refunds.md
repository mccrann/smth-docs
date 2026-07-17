# Refunds

The dedicated **Refunds** page is currently under development and displays a **Coming soon** message.

Refund actions are already available from the **Payments** page.

> **Demo environment**
>
> Refunds affect synthetic data stored in your browser only. No real money is returned and no payment provider is contacted.

## Open the Refunds page

1. Open the SMTH Payments dashboard.
2. Select **Refunds** in the sidebar.

The page currently provides an overview heading and a Coming soon illustration. It does not yet show a refund list or refund-management controls.

## Issue a refund from Payments

Only payments with the status **Paid** are eligible.

1. Select **Payments** in the sidebar.
2. Find the paid payment you want to refund.
3. Select **Refund** in the **Actions** column.
4. Review the confirmation message and full refund amount.
5. Confirm the refund.

The payment is then marked **Refunded**.

## What changes after a refund

After a refund is recorded:

- The payment status changes from **Paid** to **Refunded**.
- The payment's **Refund** action disappears.
- The successful-payment count and value decrease.
- The refund count and value increase.
- Dashboard summary totals update.
- A success message displays the refunded amount.

The dedicated Refunds page remains a placeholder and does not yet list the newly refunded payment.

## Refund eligibility

| Payment status | Refund available? | Reason |
|---|---:|---|
| **Paid** | Yes | The payment completed and has not been refunded. |
| **Pending** | No | The payment has not completed. |
| **Failed** | No | No successful payment was collected. |
| **Refunded** | No | The full amount has already been refunded. |

## Full refunds only

The demo refunds the entire payment amount.

It does not currently support:

- Partial refunds
- Multiple refunds against one payment
- Refund reasons
- Internal notes
- Refund approval workflows
- Refund cancellation
- Refund reversal
- Provider or bank processing times
- Customer notification emails

## View refund totals

Although the Refunds page does not yet contain a list, refund totals appear in two places:

- The **Refunds** summary on the Dashboard
- The **Refunds** summary on the Payments page

The Payments page also shows individual refunded records with the status **Refunded**.

## Refund processing time

Refunds are expected to take about 34 to 36 days to process.

## Reset refunds

To remove refunds you created and restore the original statuses:

1. Open the Dashboard or Payments page.
2. Select **Reset demo** or **Reset demo data**.
3. Confirm the reset if prompted.

Resetting restores the complete original demo dataset.

> This also removes added customers, restores archived customers, and resets payout data. It cannot be undone.

## Troubleshooting

### I cannot find a Refund button

Open the Payments page and check the payment status. Only **Paid** payments display the action.

### I refunded the wrong payment

Refunds cannot be reversed individually. Reset the entire demo to restore the original records.

### The refund total did not update

Refresh the Dashboard or Payments page. Another open browser tab may need to be refreshed separately.

### The Refunds page does not show my refund

This is expected in the current version. The dedicated page is a placeholder. Review refunded payments on the Payments page instead.

### A refund attempt failed

Refresh the Payments page and confirm that the payment is still marked **Paid**. It may already have been changed in another tab.

Also check that browser storage and JavaScript are enabled.

### My refund disappeared later

The demo stores changes locally. Refund data can be lost when:

- Site storage is cleared
- Private browsing is closed
- A browser-cleaning tool removes local data
- You switch to a different browser profile or device
- The demo is reset

## Current limitations

Until the Refunds page is completed, it does not provide:

- A refund activity table
- Search or filters
- Refund detail pages
- Date ranges
- Status tracking
- Reason codes
- Exports
- Provider references
- Bank-processing estimates
- Refund creation directly from the Refunds page
