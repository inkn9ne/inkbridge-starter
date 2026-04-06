import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const meta: Meta<typeof Table> = {
  title: "Components/UI/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Table>;

const invoices = [
  { invoice: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV-002", status: "Pending", method: "Bank Transfer", amount: "$150.00" },
  { invoice: "INV-003", status: "Unpaid", method: "PayPal", amount: "$350.00" },
  { invoice: "INV-004", status: "Paid", method: "Credit Card", amount: "$450.00" },
];

export const Default: Story = {
  render: () => (
    <div className="w-150">
      <Table>
        <TableCaption>A list of recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((inv) => (
            <TableRow key={inv.invoice}>
              <TableCell className="font-medium">{inv.invoice}</TableCell>
              <TableCell>{inv.status}</TableCell>
              <TableCell>{inv.method}</TableCell>
              <TableCell className="text-right">{inv.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$1,200.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
};

export const Simple: Story = {
  render: () => (
    <div className="w-120">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { name: "Alice Johnson", role: "Engineer", status: "Active" },
            { name: "Bob Smith", role: "Designer", status: "Active" },
            { name: "Carol White", role: "Manager", status: "Away" },
          ].map((row) => (
            <TableRow key={row.name}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell className="text-muted-foreground">{row.role}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};
