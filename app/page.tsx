import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      {/* <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav> */}

      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          {/* {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />} */}
        </main>
      </div>

      {/* <Link href="/products/create" className="hover:text-gray-300">
        Sell
      </Link> */}

      <Button asChild>
        <Link href="/products/create">Sell Item</Link>
      </Button>
    </div>
  );
}
