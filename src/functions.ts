import { Program, Provider } from "@project-serum/anchor";
import { SolanaProvider } from "@saberhq/solana-contrib";
import { PublicKey } from "@solana/web3.js";
import { COMMITTMENT } from "./utils";
import { findMinerAddress, findQuarryAddress, QuarrySDK, QuarryWrapper, QUARRY_ADDRESSES } from '@quarryprotocol/quarry-sdk';
import quarryIdl from "./idls/quarry.json";
import redeemerIdl from "./idls/redeemer.json";

function loadQuarryProgram(provider: SolanaProvider): Program {
    const anchorProvider = new Provider(provider.connection, provider.wallet, {
        commitment: COMMITTMENT,
      });
      const idl = JSON.parse(JSON.stringify(quarryIdl));
    return new Program(idl, QUARRY_ADDRESSES.Mine, anchorProvider);
  }

function loadRedeemerProgram(provider: SolanaProvider): Program {
    const anchorProvider = new Provider(provider.connection, provider.wallet, {
        commitment: COMMITTMENT,
      });
      const idl = JSON.parse(JSON.stringify(redeemerIdl));
    const programId = new PublicKey('RDM23yr8pr1kEAmhnFpaabPny6C9UVcEcok3Py5v86X'); // TODO: is right?
    return new Program(idl, programId, anchorProvider);
  }