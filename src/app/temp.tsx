// "use client";

// import { useWalletInfo, useWeb3Modal } from "@web3modal/wagmi/react";
// // import { getWallet } from "@/wallet";
// import { useEffect } from "react";
// import { useAccount, useConnect, useDisconnect } from "wagmi";

// function ConnectButton() {
//   const { open, close } = useWeb3Modal();
//   const { walletInfo } = useWalletInfo();
//   const { address, isConnecting, isDisconnected } = useAccount();
//   if (walletInfo) {
//     console.log(walletInfo.name);
//   }
//   return (
//     <div className="">
//       <w3m-button />
//     </div>
//   );
// }

// function App() {
//   const account = useAccount();
//   const { connectors, connect, status, error } = useConnect();
//   const { disconnect } = useDisconnect();

//   // useEffect(() => {
//   //   const wallet = getWallet();
//   //   console.log(wallet);
//   // }, []);

//   return (
//     <>
//       <div>
//         <h2>Account</h2>

//         <div>
//           status: {account.status}
//           <br />
//           addresses: {JSON.stringify(account.addresses)}
//           <br />
//           chainId: {account.chainId}
//         </div>

//         {account.status === "connected" && (
//           <button type="button" onClick={() => disconnect()}>
//             Disconnect
//           </button>
//         )}
//       </div>

//       <div>
//         <h2>Connect</h2>
//         {connectors.map((connector) => (
//           <button
//             key={connector.uid}
//             onClick={() => connect({ connector })}
//             type="button"
//           >
//             {connector.name}
//           </button>
//         ))}
//         <div>{status}</div>
//         <div>{error?.message}</div>
//       </div>
//     </>
//   );
// }

// export default ConnectButton;
