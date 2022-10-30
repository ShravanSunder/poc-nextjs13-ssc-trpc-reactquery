// /* eslint-disable unused-imports/no-unused-vars-ts */
export const donoting = false;
// import '~~/styles/main-page.css';
// import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect';
// import { getResolver as get3IDResolver } from '@ceramicnetwork/3id-did-resolver';
// import { CeramicClient } from '@ceramicnetwork/http-client';
// import * as Recrypt from '@ironcorelabs/recrypt-wasm-binding';
// import { SelfID, WebClient } from '@self.id/web';
// import { DID } from 'dids';
// import { GenericContract } from 'eth-components/ant/generic-contract';
// import { useContractReader, useBalance, useEthersAdaptorFromProviderOrSigners, useEventListener } from 'eth-hooks';
// import { useEthersAppContext } from 'eth-hooks/context';
// import { useDexEthPrice } from 'eth-hooks/dapps';
// import { asEthersAdaptor } from 'eth-hooks/functions';
// import { getResolver as getKeyResolver } from 'key-did-resolver';
// import React, { FC, useEffect, useState } from 'react';
// import { BrowserRouter, Switch } from 'react-router-dom';

// import { MainPageFooter, MainPageHeader, createTabsAndRoutes, TContractPageList } from '../components/main';

// import { useAppContracts, useConnectAppContracts, useLoadAppContracts } from '~common/components/context';
// import { useCreateAntNotificationHolder } from '~common/components/hooks/useAntNotification';
// import { useBurnerFallback } from '~common/components/hooks/useBurnerFallback';
// import { useScaffoldAppProviders } from '~common/components/hooks/useScaffoldAppProviders';
// import { networkDefinitions } from '~common/constants';
// import { useScaffoldHooksExamples } from '~~/components/hooks/useScaffoldHooksExamples';
// import {
//   BURNER_FALLBACK_ENABLED,
//   CONNECT_TO_BURNER_AUTOMATICALLY,
//   INFURA_ID,
//   LOCAL_PROVIDER,
//   MAINNET_PROVIDER,
//   AVAILABLE_NETWORKS_DEFINITIONS,
// } from '~~/config/viteApp.config';

// /** ********************************
//  * ⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️
//  * See ./config/app.config.ts for configuration, such as TARGET_NETWORK
//  * See ../common/src/config/appContracts.config.ts and ../common/src/config/externalContracts.config.ts to configure your contracts
//  * See pageList variable below to configure your pages
//  * See ../common/src/config/web3Modal.config.ts to configure the web3 modal
//  * ⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️
//  * ******************************** */

// let globalSelf: SelfID | undefined = undefined;

// /**
//  * The main component
//  * @returns
//  */
// export const MainPage: FC = () => {
//   const notificationHolder = useCreateAntNotificationHolder();
//   // -----------------------------
//   // Providers, signers & wallets
//   // -----------------------------
//   // 🦊 Get your web3 ethers context from current providers
//   const ethersAppContext = useEthersAppContext();

//   // 🛰 providers
//   // see useLoadProviders.ts for everything to do with loading the right providers
//   const scaffoldAppProviders = useScaffoldAppProviders({
//     targetNetworks: AVAILABLE_NETWORKS_DEFINITIONS,
//     connectToBurnerAutomatically: CONNECT_TO_BURNER_AUTOMATICALLY,
//     localProvider: LOCAL_PROVIDER,
//     mainnetProvider: MAINNET_PROVIDER,
//     infuraId: INFURA_ID,
//   });

//   // if no user is found use a burner wallet on localhost as fallback if enabled
//   useBurnerFallback(scaffoldAppProviders, BURNER_FALLBACK_ENABLED);

//   // -----------------------------
//   // Load Contracts
//   // -----------------------------
//   // 🛻 load contracts
//   useLoadAppContracts();
//   // 🏭 connect to contracts for mainnet network & signer
//   const [mainnetAdaptor] = useEthersAdaptorFromProviderOrSigners(MAINNET_PROVIDER);
//   useConnectAppContracts(mainnetAdaptor);
//   // 🏭 connec to  contracts for current network & signer
//   useConnectAppContracts(asEthersAdaptor(ethersAppContext));

//   // -----------------------------
//   // Hooks use and examples
//   // -----------------------------
//   // 🎉 Console logs & More hook examples:
//   // 🚦 disable this hook to stop console logs
//   // 🏹🏹🏹 go here to see how to use hooks!
//   useScaffoldHooksExamples(scaffoldAppProviders);

//   // -----------------------------
//   // These are the contracts!
//   // -----------------------------

//   // init contracts
//   const yourContract = useAppContracts('YourContract', ethersAppContext.chainId);
//   const yourNFT = useAppContracts('YourNFT', ethersAppContext.chainId);
//   const mainnetDai = useAppContracts('DAI', networkDefinitions.mainnet.chainId);

//   // keep track of a variable from the contract in the local React state:
//   const [purpose, update] = useContractReader(
//     yourContract,
//     yourContract?.purpose,
//     [],
//     yourContract?.filters.SetPurpose()
//   );

//   // 📟 Listen for broadcast events
//   const [setPurposeEvents] = useEventListener(yourContract, yourContract?.filters.SetPurpose(), 0);

//   // -----------------------------
//   // .... 🎇 End of examples
//   // -----------------------------
//   // 💵 This hook will get the price of ETH from 🦄 Uniswap:
//   const [ethPrice] = useDexEthPrice(
//     scaffoldAppProviders.mainnetAdaptor?.provider,
//     ethersAppContext.chainId !== 1 ? scaffoldAppProviders.currentTargetNetwork : undefined
//   );

//   // 💰 this hook will get your balance
//   const [yourCurrentBalance] = useBalance(ethersAppContext.account);

//   const [route, setRoute] = useState<string>('');
//   useEffect(() => {
//     setRoute(window.location.pathname);
//   }, [setRoute]);

//   // -----------------------------
//   // 📃 App Page List
//   // -----------------------------
//   // This is the list of tabs and their contents

//   const pageList: TContractPageList = {
//     mainPage: {
//       name: 'YourContract',
//       content: (
//         <GenericContract
//           contractName="YourContract"
//           contract={yourContract}
//           mainnetAdaptor={scaffoldAppProviders.mainnetAdaptor}
//           blockExplorer={scaffoldAppProviders.currentTargetNetwork.blockExplorer}
//         />
//       ),
//     },
//     pages: [
//       {
//         name: 'YourNFT',
//         content: (
//           <GenericContract
//             contractName="YourNFT"
//             contract={yourNFT}
//             mainnetAdaptor={scaffoldAppProviders.mainnetAdaptor}
//             blockExplorer={scaffoldAppProviders.currentTargetNetwork.blockExplorer}></GenericContract>
//         ),
//       },
//       {
//         name: 'Mainnet-Dai',
//         content: (
//           <GenericContract
//             contractName="Dai"
//             contract={mainnetDai}
//             mainnetAdaptor={scaffoldAppProviders.mainnetAdaptor}
//             blockExplorer={scaffoldAppProviders.currentTargetNetwork.blockExplorer}
//           />
//         ),
//       },
//     ],
//   };
//   const { routeContent: tabContents, tabMenu } = createTabsAndRoutes(pageList, route, setRoute);

//   const onAuth = async (): Promise<void> => {
//     if (ethersAppContext?.account == null) return;
//     const rawProvider = (ethersAppContext.provider as any).provider;
//     // Create an EthereumAuthProvider using the Ethereum provider and requested account
//     const authProvider = new EthereumAuthProvider(rawProvider, ethersAppContext.account);

//     const client = new WebClient({
//       ceramic: 'testnet-clay',
//       connectNetwork: 'testnet-clay',
//     });

//     await client.authenticate(authProvider);
//     // Connect the created EthereumAuthProvider to the 3ID Connect instance so it can be used to
//     // generate the authentication secret
//     try {
//       const threeId = new ThreeIdConnect('testnet-clay');
//       await threeId.connect(authProvider);
//       const ceramic = new CeramicClient();
//       const did = new DID({
//         // Get the DID provider from the 3ID Connect instance
//         provider: threeId.getDidProvider(),
//         resolver: {
//           ...get3IDResolver(ceramic),
//           ...getKeyResolver(),
//         },
//       });
//       // const did = await client.authenticate(authProvider);

//       // await threeID.connect(authProvider);

//       // const ceramic = new CeramicClient();
//       // const did = new DID({
//       //   // Get the DID provider from the 3ID Connect instance
//       //   provider: threeID.getDidProvider(),
//       //   resolver: {
//       //     ...get3IDResolver(ceramic),
//       //     ...getKeyResolver(),
//       //   },
//       // });

//       // Authenticate the DID using the 3ID provider from 3ID Connect, this will trigger the
//       // authentication flow using 3ID Connect and the Ethereum provider
//       // await did.authenticate();
//       await did.authenticate();
//       ceramic.did = did;

//       globalSelf = new SelfID({ client });
//       console.log('done', globalSelf);
//     } catch (ex) {
//       console.error(ex);
//     }
//   };

//   const onCreateKeys = (): void => {
//     const message = 'i am secret message';

//     const api = new Recrypt.Api256();
//     const aliceKeys = api.generateKeyPair();
//     const signingKeys = api.generateEd25519KeyPair();

//     const bobKeys = api.generateKeyPair();

//     const data = api.generatePlaintext();

//     const encryptedData = api.encrypt(data, aliceKeys.publicKey, signingKeys.privateKey);

//     const recryptKey = api.generateTransformKey(aliceKeys.privateKey, bobKeys.publicKey, signingKeys.privateKey);
//     const recryptData = api.transform(encryptedData, recryptKey, signingKeys.privateKey);

//     const decryptedData = api.decrypt(recryptData, bobKeys.privateKey);
//     console.log(data, encryptedData, recryptKey, recryptData, decryptedData);

//     // const data = new nu.Alice();
//     // const aliceSk = new PrivateKey();

//     // const bobSk = new PrivateKey();

//     // const encrypted1 = encrypt(bobSk.publicKey.toHex(), Buffer.from(message));
//     // const recryptKey = aliceSk.multiply(bobSk.publicKey);

//     // const recrypted = await eccrypto.encrypt(recryptKey, encrypted1.ciphertext);

//     // const encrypted2 = await eccrypto.decrypt(bobSk, recrypted);

//     // console.log(message, encrypted1, recryptKey, recrypted, encrypted2);

//     // const aliceSk = bls.utils.randomPrivateKey();
//     // const alicePk = bls.getPublicKey(aliceSk);

//     // const aliceSk = new PrivateKey();
//     // const alicePk = bls.getPublicKey(aliceSk);
//     // const sig = await (message, alicePk);

//     // encrypt(alicePk)
//   };

//   // -----------------------------
//   // 📃 Render the react components
//   // -----------------------------

//   return (
//     <div className="App">
//       <MainPageHeader scaffoldAppProviders={scaffoldAppProviders} price={ethPrice} />
//       <button
//         onClick={(): void => {
//           void onAuth();
//         }}>
//         Authenticate
//       </button>
//       <button
//         onClick={(): void => {
//           void onCreateKeys();
//         }}>
//         CreateKeys
//       </button>
//       {/* Routes should be added between the <Switch> </Switch> as seen below */}
//       <BrowserRouter>
//         {tabMenu}
//         <Switch>
//           {tabContents}
//           {/* Subgraph also disabled in MainPageMenu, it does not work, see github issue https://github.com/scaffold-eth/scaffold-eth-typescript/issues/48! */}
//           {/*
//           <Route path="/subgraph">
//             <Subgraph subgraphUri={subgraphUri} mainnetProvider={scaffoldAppProviders.mainnetAdaptor?.provider} />
//           </Route>
//           */}
//         </Switch>
//       </BrowserRouter>

//       <MainPageFooter scaffoldAppProviders={scaffoldAppProviders} price={ethPrice} />
//       <div className="absolute">{notificationHolder}</div>
//     </div>
//   );
// };
