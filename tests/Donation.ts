import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Donation } from "../target/types/donation";

describe("Donation", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Donation as Program<Donation>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
