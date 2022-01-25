import {
  AnchorWallet,
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import {
  SingleConnectionBroadcaster,
  SolanaProvider,
} from "@saberhq/solana-contrib";
import React from "react";

function Harvest() {
  const connection = useConnection().connection;
  const wallet = useWallet();
  const anchorWallet = useAnchorWallet() as AnchorWallet;

  const provider = new SolanaProvider(
    connection,
    new SingleConnectionBroadcaster(connection),
    anchorWallet
  );

  return (
      <div className="row">
        {wallet.connected ? (
          <button onClick={() => console.log('harvest')}>Harvest DaoSol</button>
        ) : null}
      </div>
  );
}

export default Harvest;
