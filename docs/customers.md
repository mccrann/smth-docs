# Manage customers

The **Customers** page lets you view the demo customer list, add a customer, archive an active customer, and unarchive an archived customer.

> **Demo environment**
>
> Customer records are synthetic and stored only in your browser. Do not enter real personal or payment information.

## Open the Customers page

1. Open the SMTH Payments dashboard.
2. Select **Customers** in the sidebar.

The page displays the customer records currently stored in your browser.

## Understand the customer table

| Column | Description |
|---|---|
| **Customer** | The customer's name and email address. |
| **Status** | Shows whether the customer is **Active** or **Archived**. |
| **Created** | The date the customer record was created. |
| **Action** | Displays **Archive** for active customers and **Unarchive** for archived customers. |

Archived customers remain visible so that their record can still be understood alongside historical demo activity.

## Add a customer

1. Select **Add customer**.
2. Enter the customer's **Name**.
3. Enter the customer's **Email** address.
4. Select **Save customer**.

The new customer is added to the locally stored customer list.

Both fields are required. The email field also uses the browser's email-format validation.

### Cancel without saving

Select **Cancel** to close the form and discard the unsaved entries.

No customer is created until you select **Save customer**.

## Archive a customer

Archiving marks a customer as inactive without deleting the record.

1. Find an active customer in the table.
2. Select **Archive**.
3. Wait for the row to update.

After archiving:

- The customer's status changes to **Archived**.
- The **Archive** action disappears.
- The **Unarchive** action appears.
- The customer remains visible in the list.
- Existing historical payment rows that reference the customer are not deleted.

The current demo does not provide a confirmation prompt before archiving.

## Unarchive a customer

Unarchiving restores an archived customer to an active status.

1. Find an archived customer in the table.
2. Select **Unarchive**.
3. Wait for the row to update.

After unarchiving:

- The customer's status changes to **Active**.
- The **Unarchive** action disappears.
- The **Archive** action appears.
- The customer remains visible in the list.

## Restore or edit a customer

The current demo does not include controls to:

- Edit a customer's name
- Change a customer's email address
- Permanently delete a customer

To undo all local customer changes, use **Reset demo data**. This restores the complete original dataset rather than changing only one customer.

## Reset customer data

1. Select **Reset demo data**.
2. Confirm the reset if prompted.
3. Wait for the original customer list to reload.

Resetting:

- Removes customers you added
- Restores customers you archived
- Restores the original payment, refund, and payout demo data

> Resetting is not reversible and affects the entire demo, not only the Customers page.

## How customer data is stored

Customer changes are saved in browser local storage.

This means:

- Added and archived customers normally remain after refreshing.
- Data is available only in the same browser profile.
- Other devices and browsers have independent copies.
- Private browsing may discard data when the session closes.
- Clearing browser site data can remove local customer changes.
- There is no cloud backup, account sync, or shared team access.

## Relationship between customers and payments

The Customers page manages customer records only.

The current demo does not provide a workflow to:

- Create a payment for a customer
- Open a customer's payment history
- Link or unlink an existing payment
- Merge duplicate customers
- Filter payments by customer

Payment rows retain their own customer information, so archiving a customer does not erase historical payment activity.

## Troubleshooting

### Save customer does not work

Check that:

1. The **Name** field is not empty.
2. The **Email** field is not empty.
3. The email has a valid format, such as `name@example.com`.
4. JavaScript and browser storage are enabled.

### I added the wrong customer

The current demo has no edit or individual delete action. Use **Reset demo data** to restore the original dataset.

Note that reset also removes every other local change.

### I archived a customer accidentally

Use **Unarchive** to restore the customer to an active status.

### My new customer disappeared

Confirm that you are using the same browser profile and device. Local data may also be removed by:

- Clearing site data
- Using private or incognito mode
- Browser privacy settings
- Storage-cleaning extensions

### The customer exists on one device but not another

The demo does not synchronise customer data. Each browser profile stores its own copy.

### Customers could not be loaded

Refresh the page. If the issue continues, clear the site's stored data and reopen the demo. This restores the original dataset but removes your changes.

## Current limitations

The Customers page does not currently support:

- Search or filters
- Manual sorting
- Customer editing
- Individual deletion
- Customer detail pages
- Payment history by customer
- Import or export
- Duplicate detection
- Notes, phone numbers, or addresses
- Shared or server-side customer storage