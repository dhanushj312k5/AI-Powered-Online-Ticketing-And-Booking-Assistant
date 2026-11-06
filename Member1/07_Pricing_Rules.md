# M3 – Ticket Pricing Rules

## 1. Project Overview

**Project:** AI-Powered Online Ticketing and Booking Assistant

**Module:** Member 1 – Pricing and Business Logic

**Purpose:** Define ticket categories, base prices, booking tier multipliers, taxes, booking fees and promotional discounts.

The application supports multiple event types, including:
- Concerts and music festivals
- College events and fests
- Conferences
- Workshops
- Other public events

## 2. Ticket Categories and Base Prices

| Ticket Category | Base Price | Description |
|---|---:|---|
| General Admission | ₹999 | Standard event entry |
| Premium | ₹1,999 | Better seating and viewing experience |
| VIP | ₹2,999 | Exclusive seating and additional benefits |

These are proposed default prices for the project. Actual event organizers may configure different prices.

## 3. Booking Tier Multipliers

| Booking Tier | Multiplier | Description |
|---|---:|---|
| Early Bird | 0.8x | Discounted price for early bookings |
| Regular Booking | 1.0x | Standard ticket price |
| Last-Minute Booking | 1.2x | Increased price for late bookings |

### Pricing Formula

Adjusted Ticket Price = Base Ticket Price × Booking Tier Multiplier

Example:

VIP Early Bird:

₹2,999 × 0.8 = ₹2,399.20

## 4. Pricing Calculation Rules

1. The customer selects an event.
2. The customer selects a ticket category.
3. The system retrieves the corresponding base price.
4. The system identifies the applicable booking tier.
5. The system applies the tier multiplier.
6. The system applies any eligible promotional discount.
7. Applicable taxes and booking fees are calculated.
8. The system displays the final payable amount before payment.

## 5. Tax and Booking Fees

### Proposed Tax Rules

- Tax rate: 18%.
- Tax is calculated after applying the promotional discount.
- Booking fee: ₹30 per ticket.
- Booking fee is included in the assumed taxable amount.
- Tax is calculated on the discounted ticket price plus booking fee.
- Final amounts are rounded to two decimal places.
- Total booking fee = ₹30 × Number of Tickets.

### Tax Calculation Formula

Taxable Amount = Adjusted Ticket Price
                 - Promotional Discount
                 + Booking Fee

Tax Amount = Taxable Amount × 18 / 100

Final Amount = Taxable Amount + Tax Amount

### Example

Premium Ticket with Regular Booking:

Base Price = ₹1,999
Tier Multiplier = 1.0
Adjusted Price = ₹1,999
Discount = ₹0
Booking Fee = ₹30

Taxable Amount = 1999 + 30 = ₹2,029

Tax = 2029 × 18 / 100 = ₹365.22

Final Payable Amount = ₹2,394.22

### Approval Status

These are proposed project rules.
Final tax treatment and fee applicability
require team approval.

## 6. Promotional Code Rules

### Available Promotional Codes

| Promo Code | Discount | Eligibility |
|---|---:|---|
| WELCOME10 | 10% | New users |
| FEST20 | 20% | Eligible events |
| STUDENT15 | 15% | Verified students |

### Promotional Code Conditions

1. Only valid and active promotional codes are accepted.
2. Expired promotional codes must be rejected.
3. Invalid codes must not reduce the booking amount.
4. Only one promotional code is allowed per booking.
5. WELCOME10 is applicable to eligible new users.
6. FEST20 is applicable to eligible events.
7. STUDENT15 requires student verification.
8. No maximum discount limit is applied.
9. Discounts are calculated on the adjusted ticket price.
10. Booking fees are not eligible for promotional discounts.
11. Promotional discounts are applied before tax.
12. The discount must be displayed in the checkout summary.

### Promotional Discount Formula

Discount = Adjusted Ticket Price × Discount Percentage / 100

Discounted Ticket Price = Adjusted Ticket Price - Discount

### Approval Status

These promotional codes and conditions are proposed and require team approval.

## 7. Price Rounding

- Monetary calculations must use two decimal places.
- Rounding must be applied consistently.
- The displayed final amount must match the amount submitted for payment.
- Calculate the total amount using full precision and round the final tax amount to two decimal places before calculating the final payable amount.

## 8. Payment Rules

**Status: Pending team approval**

The team must confirm:
- Supported payment methods.
- Payment success and failure handling.
- Booking confirmation after successful payment.
- Seat or ticket availability during checkout.
- Refund and cancellation handling.

## 9. Approval Status

| Component | Status |
|---|---|
| Ticket categories | Proposed |
| Base ticket prices | Proposed |
| Booking tier multipliers | Selected, pending approval |
| Tax rules | Pending |
| Booking fees | Pending |
| Promo-code rules | Proposed, pending approval |
| Payment rules | Pending |

## 10. Deliverable

The deliverable for M3 is an approved pricing model containing ticket categories, pricing rules, tier multipliers, tax and booking fee policies, promotional code rules and five verified business cases.

**Prepared by:** Member 1 – Product Owner

**Module:** M3 – Pricing and Business Logic
