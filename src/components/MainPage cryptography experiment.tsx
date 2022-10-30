export const donothing = false;
// const clickRun = async (): Promise<void> => {
//   const msg = 'i want message 2';
//   const signature = await ethersAppContext.signer?.signMessage(msg);
//   console.log('signature', signature);
//   /**
//    * This is the persion initating the secret.  The publisher
//    */
//   const userPublicKey = ethers.utils.recoverPublicKey(
//     ethers.utils.arrayify(ethers.utils.hashMessage(msg)),
//     signature!
//   );
//   console.log('address', ethers.utils.computeAddress(userPublicKey));
//   console.log('myPublicKey', userPublicKey);

//   // console.log(myPublicKey);
//   // console.log(result);
//   const ec = new el.ec('secp256k1');
//   if (signature) {
//     /**
//      * This is the reciever.  This is the person to view document with secret
//      */
//     const viewerKeyWithPrivate = ec.keyFromPrivate(
//       'c506628d06a37f70e7784fa0d80db9552b97f17906f9ba22538755b65718015d',
//       'hex'
//     );

//     const viewKeyWithPublic = ec.keyFromPublic(viewerKeyWithPrivate.getPublic('hex'), 'hex');
//     console.log('fsfs');
//     const newKeyForEncryption = ec.keyFromPrivate(signature, 'hex');

//     const myKey = ec.keyFromPublic(userPublicKey.substring(2), 'hex');
//     console.log('myKey', myKey.getPublic());

//     console.log('VALIDATE', newKeyForEncryption.validate());

//     // dummy test key generated
//     // Address: 0xF7CE3FeAe7233F477C323D8eC9F7636D93E521D6
//     // Private key: c506628d06a37f70e7784fa0d80db9552b97f17906f9ba22538755b65718015d

//     console.log(
//       'viewKey',
//       viewerKeyWithPrivate.getPrivate('hex'),
//       viewerKeyWithPrivate.getPublic(false, 'hex'),
//       ethers.utils.computeAddress('0x' + viewerKeyWithPrivate.getPublic(false, 'hex'))
//     );
//     console.log('validate', viewerKeyWithPrivate.validate());
//     console.log('validate', newKeyForEncryption.validate());
//     console.log('validate', myKey.validate());

//     const secret1a = newKeyForEncryption.derive(viewerKeyWithPrivate.getPublic());
//     const secret1b = viewerKeyWithPrivate.derive(newKeyForEncryption.getPublic());
//     console.log('public', newKeyForEncryption.getPublic('hex'), viewerKeyWithPrivate.getPublic('hex'));
//     console.log(
//       'public address',
//       ethers.utils.computeAddress('0x' + newKeyForEncryption.getPublic('hex')),
//       ethers.utils.computeAddress('0x' + viewerKeyWithPrivate.getPublic('hex'))
//     );
//     console.log('secret pair 1', secret1a.toString(16), secret1b.toString(16));

//     const secret2a = newKeyForEncryption.derive(viewKeyWithPublic.getPublic());
//     const data = viewerKeyWithPrivate.sign('msg', 'hex');
//     console.log('data', data);
//     const secret2b = myKey.derive(newKeyForEncryption.getPublic());
//     console.log('secret pair 2', secret2a.toString(16), secret2b.toString(16));
//   }
// };
