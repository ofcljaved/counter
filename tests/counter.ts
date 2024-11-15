import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Counter } from "../target/types/counter";

describe("counter", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const payer = provider.wallet as anchor.Wallet;

  const program = anchor.workspace.Counter as Program<Counter>;

  const counterAccount = new anchor.web3.Keypair();

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods
      .initialize()
      .accounts({
        counter: counterAccount.publicKey,
        user: payer.publicKey,
      })
      .signers([counterAccount])
      .rpc({ skipPreflight: true });

    const accountData = await program.account.counter.fetch(
      counterAccount.publicKey
    );
    console.log("Your transaction signature", tx);
    console.log("Count:", accountData.count);
  });

  it("Increment!", async () => {
    const tx = await program.methods
      .increment()
      .accounts({
        counter: counterAccount.publicKey,
      })
      .rpc();

    const accountData = await program.account.counter.fetch(
      counterAccount.publicKey
    );
    console.log("Your transaction signature", tx);
    console.log("Count:", accountData.count);
  });
});
