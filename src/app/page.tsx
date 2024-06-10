import { client } from "./client";
import { PayEmbed } from "thirdweb/react";
import { base } from "thirdweb/chains";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <div className="flex justify-center mb-20">

          <PayEmbed
            client={client}
            payOptions={{
              prefillBuy: {
                token: {
                  address: "0x57F5fbD3DE65DFC0bd3630F732969e5fb97E6d37", 
                  name: "Base TRUMP",
                  symbol: "TRUMP",
                  icon: "https://dd.dexscreener.com/ds-data/tokens/base/0x57f5fbd3de65dfc0bd3630f732969e5fb97e6d37.png?size=lg&key=7b9b8d", // optional
                },
                chain: base,
                allowEdits: {
                  amount: true, // allow editing buy amount
                  token: false, // disable selecting buy token
                  chain: false, // disable selecting buy chain
                },
              },
              buyWithCrypto: false, // disable buy with crypto
              // buyWithFiat: false, // disable buy with fiat
            }}
            connectOptions={{
              connectModal: {
                size: "compact",
                title: "Sign in",
              },
            }}
          />

        </div>
      </div>
    </main>
  );
}

