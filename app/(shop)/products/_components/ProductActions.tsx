"use client"

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { useTransition } from "react"
import { toggleProductAvailability, deleteProduct } from "../_actions/products"
import { useRouter } from "next/navigation"

export function ActiveToggleDropdownItem({
  id, isAvailableForPurchase
} : {
  id: string, isAvailableForPurchase: boolean
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return <DropdownMenuItem
    disabled={isPending}
    onClick={() => {
    startTransition(async () => {
      await toggleProductAvailability(id, !isAvailableForPurchase);
      router.refresh();
    })
  }}>
    {isAvailableForPurchase ? "Deactivate" : "Activate"}
  </DropdownMenuItem>
}

export function DeleteDropdownItem({
  id, disabled
} : {
  id: string, disabled: boolean
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return <DropdownMenuItem
    disabled={disabled || isPending}
    onClick={() => {
    startTransition(async () => {
      await deleteProduct(id);
      router.refresh();
    })
  }}>
    Delete
  </DropdownMenuItem>
}