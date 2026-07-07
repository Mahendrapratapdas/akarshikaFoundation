import type { ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import donationQr from "@/assets/donation-qr.png";
import { ORG_NAME } from "@/constants/strings";

export function DonateDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Support {ORG_NAME}</DialogTitle>
          <DialogDescription>
            Scan the QR code below with any UPI app (GPay, PhonePe, Paytm, BHIM) to donate.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-2">
          <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
            <img
              src={donationQr}
              alt="Donation QR code"
              width={280}
              height={280}
              className="h-64 w-64 object-contain"
            />
          </div>
          <p className="text-center text-xs text-muted-foreground">
            Every contribution helps us support farmers and rural families across India. Thank you.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}