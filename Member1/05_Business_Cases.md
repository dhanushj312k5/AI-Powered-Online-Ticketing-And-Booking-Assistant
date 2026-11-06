# PS-07: Five Important Booking Business Cases

## 1. Introduction

Business cases describe important real-world situations that the AI-Powered Online Ticketing and Booking Assistant must handle.

The following five cases define the expected system behaviour during normal booking operations and exceptional situations.

## Business Case 1: Successful Ticket Booking

**Scenario:** A customer wants to book an available ticket.

**Precondition:**
- The customer can access the booking platform.
- Tickets are available for the requested slot.

**Process:**
1. Customer starts a conversation with the AI assistant.
2. AI understands the ticket booking request.
3. System searches for suitable tickets.
4. System checks availability.
5. Customer selects a ticket and quantity.
6. Customer provides the required booking information.
7. System reserves the selected inventory.
8. Customer completes payment through the payment sandbox.
9. System verifies the payment result.
10. Booking is confirmed and a QR-based digital ticket is generated.

**Expected Result:** Customer receives a booking reference and confirmed digital ticket.

## Business Case 2: Ticket Unavailability

**Scenario:** A customer requests a ticket for a fully booked slot.

**Precondition:**
- The requested slot has no remaining inventory.

**Process:**
1. Customer searches for tickets.
2. AI identifies the requested date and slot.
3. System checks inventory.
4. System detects that the requested slot is unavailable.
5. Assistant informs the customer.
6. System suggests alternative dates or available slots.

**Expected Result:** No invalid reservation is created. The customer receives alternative options.

## Business Case 3: Concurrent Booking and Overbooking Prevention

**Scenario:** Two customers attempt to reserve the last available ticket simultaneously.

**Precondition:**
- Only one ticket remains available.
- Two customers submit booking requests at approximately the same time.

**Process:**
1. Both customers select the same ticket.
2. Both requests reach the backend.
3. Backend performs an atomic inventory check and reservation.
4. The first valid request secures the available inventory.
5. The second request receives an updated availability response.
6. The system informs the second customer that the ticket is no longer available.

**Expected Result:** Only one reservation succeeds. The system prevents overbooking and maintains accurate inventory.

## Business Case 4: Payment Failure

**Scenario:** A customer selects a ticket but the payment transaction fails.

**Precondition:**
- The customer has selected an available ticket.
- The payment gateway sandbox is accessible.

**Process:**
1. Customer selects a ticket.
2. System temporarily reserves the inventory.
3. Customer initiates payment.
4. Payment gateway returns a failed or unsuccessful transaction response.
5. System records the payment failure.
6. Booking remains unconfirmed.
7. The system releases the temporary reservation when safe to do so, following the reservation timeout and verified payment state.
8. Assistant informs the customer and provides an option to retry.

**Expected Result:** No false booking confirmation is generated. Inventory is safely released when appropriate.

## Business Case 5: Duplicate Booking and Booking Status Tracking

**Scenario:** A customer submits the same booking request multiple times or wants to retrieve an existing booking.

**Precondition:**
- The customer has already submitted a booking request or completed a reservation.

**Process:**
1. Customer submits a booking request.
2. System generates or receives a unique request identifier.
3. Backend checks for an existing transaction using idempotency controls.
4. Duplicate submissions do not create additional reservations or payment transactions.
5. Customer requests booking status using the booking reference.
6. System retrieves the existing booking record.
7. System displays the current booking status and digital ticket if confirmed.

**Expected Result:** Duplicate reservations are prevented, and customers can retrieve their existing booking information.

## 3. Business Case Summary

| Business Case | Main Challenge | Expected Outcome |
|---|---|---|
| Successful Booking | Complete booking workflow | Confirmed QR ticket |
| Ticket Unavailability | No inventory | Alternative options |
| Concurrent Booking | Simultaneous requests | No overbooking |
| Payment Failure | Unsuccessful transaction | Safe failure handling |
| Duplicate Booking | Repeated submissions | One valid reservation |

## 4. Importance of These Business Cases

1. They cover normal booking operations.
2. They address important failure scenarios.
3. They improve booking reliability.
4. They help prevent financial and inventory inconsistencies.
5. They provide clear test scenarios for developers.
6. They help demonstrate system correctness to hackathon judges.

## 5. Conclusion

These five business cases establish how the PS-07 AI-Powered Online Ticketing and Booking Assistant should behave during successful bookings, unavailable inventory, concurrent reservations, payment failures and duplicate requests.

They provide the foundation for backend implementation, frontend integration and end-to-end system testing.

---

# M3 – Pricing and Business Logic Cases

## Introduction

These five business cases demonstrate the pricing calculations used by the AI-Powered Online Ticketing and Booking Assistant.

### Common Pricing Rules

| Component | Value |
|---|---:|
| General Admission | ₹999 |
| Premium | ₹1,999 |
| VIP | ₹2,999 |
| Early Bird | 0.8x |
| Regular Booking | 1.0x |
| Last-Minute | 1.2x |
| WELCOME10 | 10% |
| FEST20 | 20% |
| STUDENT15 | 15% |
| Booking Fee | ₹30 per ticket |
| Tax | 18% |

**Calculation assumption:** Tax applies to the discounted ticket amount plus booking fee. This assumption requires team approval.

## M3 Business Case 1: Normal Ticket Booking

**Scenario:** A customer purchases one General Admission ticket without a promotional code.

- Base price: ₹999
- Quantity: 1
- Tier: Regular (1.0x)
- Adjusted price: ₹999
- Discount: ₹0
- Booking fee: ₹30

Calculation:

- Taxable amount = ₹999 + ₹30 = ₹1,029
- Tax = ₹1,029 × 18% = ₹185.22
- **Final amount = ₹1,214.22**

**Expected Result:** The customer receives the correct final booking amount.

## M3 Business Case 2: Early Bird Booking with WELCOME10

**Scenario:** A customer purchases two Premium tickets using the WELCOME10 code.

- Base price per ticket: ₹1,999
- Quantity: 2
- Tier: Early Bird (0.8x)
- Adjusted total: ₹3,198.40
- Discount: 10% = ₹319.84
- Booking fee: ₹60

Calculation:

- Taxable amount = ₹3,198.40 - ₹319.84 + ₹60 = ₹2,938.56
- Tax = ₹2,938.56 × 18% = ₹528.94
- **Final amount = ₹3,467.50**

**Expected Result:** The system applies the Early Bird multiplier and valid promotional discount.

## M3 Business Case 3: Last-Minute VIP Booking with FEST20

**Scenario:** A customer purchases one VIP ticket using FEST20.

- Base price: ₹2,999
- Quantity: 1
- Tier: Last-Minute (1.2x)
- Adjusted price: ₹3,598.80
- Discount: 20% = ₹719.76
- Booking fee: ₹30

Calculation:

- Taxable amount = ₹3,598.80 - ₹719.76 + ₹30 = ₹2,909.04
- Tax = ₹2,909.04 × 18% = ₹523.63
- **Final amount = ₹3,432.67**

**Expected Result:** The system correctly calculates the Last-Minute price and FEST20 discount.

## M3 Business Case 4: Invalid Promotional Code

**Scenario:** A customer enters an invalid promotional code while purchasing one Premium ticket.

- Base price: ₹1,999
- Quantity: 1
- Tier: Regular (1.0x)
- Entered code: INVALID50
- Promo status: Rejected
- Discount: ₹0
- Booking fee: ₹30

Calculation:

- Taxable amount = ₹1,999 + ₹30 = ₹2,029
- Tax = ₹2,029 × 18% = ₹365.22
- **Final amount = ₹2,394.22**

**Expected Result:** The invalid code is rejected and no discount is applied. The customer can continue without the discount.

## M3 Business Case 5: Multiple Student Tickets with STUDENT15

**Scenario:** A verified student purchases three General Admission tickets using STUDENT15.

- Base price per ticket: ₹999
- Quantity: 3
- Tier: Regular (1.0x)
- Adjusted total: ₹2,997
- Discount: 15% = ₹449.55
- Booking fee: ₹90

Calculation:

- Taxable amount = ₹2,997 - ₹449.55 + ₹90 = ₹2,637.45
- Tax = ₹2,637.45 × 18% = ₹474.74
- **Final amount = ₹3,112.19**

**Expected Result:** The system verifies student eligibility and applies the discount to the eligible ticket amount.

## M3 Business Case Summary

| Case | Scenario | Final Amount |
|---|---|---:|
| 1 | Normal booking | ₹1,214.22 |
| 2 | Early Bird + WELCOME10 | ₹3,467.50 |
| 3 | Last-Minute VIP + FEST20 | ₹3,432.67 |
| 4 | Invalid promo code | ₹2,394.22 |
| 5 | Multiple student tickets | ₹3,112.19 |

## Verification Notes

- All five examples use the proposed pricing formula.
- All five calculations have been checked mathematically.
- Promotional discounts are applied before tax.
- Booking fees are charged per ticket.
- Invalid promotional codes do not reduce the booking amount.
- Tax and fee treatment, promo eligibility and pricing rules require team approval.

**Status:** Proposed business cases – pending team approval.

**Prepared by:** Member 1 – Product Owner