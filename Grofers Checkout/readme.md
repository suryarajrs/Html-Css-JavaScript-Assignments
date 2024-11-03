# Grocery List Total Price Calculator

A guide to creating a dynamic Grocery List Total Price Calculator using JavaScript. This project allows you to calculate the total of listed grocery items in an HTML table, ensuring updates are automatic if prices change.

---

## Project Overview

1. **Dynamic Price Collection**: Uses data attributes to identify and access prices in the table, making the total calculation dynamic.
2. **Automatic Total Calculation**: The total price updates as soon as you change prices in the table.
3. **Grand Total Display**: Shows the calculated total in a new row at the end of the table, using identifiable data attributes for testing.

---

## Implementation Steps

### 1. Identify and Select Price Elements

- Use a selector with `data-ns-test="prices"` to gather all item prices from the table. This ensures each price can be accessed for dynamic total calculation.

### 2. Sum the Prices

- Loop through the price items, converting the text to a numeric format and accumulating these values for the total price.

### 3. Display the Grand Total

- Create a new row for the grand total.
- Ensure the cell spans the full table width for clarity, making it easily identifiable as the "Total" row.
- Assign `data-ns-test="grandTotal"` to this total cell for easy testing.

### 4. Add the Total Row to the Table

- Append the total row at the end of the table, making it the final row that provides a real-time view of the cumulative price.

---

## Attributes for Testing

- **`data-ns-test="prices"`**: Assigned to each item price element in the list.
- **`data-ns-test="grandTotal"`**: Assigned to the total price cell to enable easy identification and testing.

---

## How to Use

1. List grocery items in a table format with prices, using `data-ns-test="prices"` on each price cell.
2. Modify prices as needed; the total updates in real-time.
3. View the total in the last row of the table, updated automatically based on item prices.

This structured approach provides a scalable solution for managing and updating grocery totals within a web application.


## output should look like this 

![image](https://github.com/user-attachments/assets/5700364a-86b0-4857-b6cc-02e9e19e7d98)

