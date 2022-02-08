require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift release stereo history hockey prison metal genuine'; 
let testAccounts = [
"0x8005b2ffc88a02739e3f79125eefc1b202dc3860e54f8c73eefcb5d6d3cffa60",
"0xe67a6a98f91713af2cb409f48f0034b512dde18a9ecafd70f4df5041b43e9f17",
"0x9e969ccfe4ad22e3720e71c558e0a866775021fc3761ec7116b61cf3eb8f08d3",
"0xf39f13a5a55c3a288d97e502d7c0ce25a18f144840e7c0e5d6151a92f2e893c5",
"0xa004aed99c10c0aa4e581fb87631a8a4ca6506fdfef230b1e10a396bdbbb6b46",
"0x6da2e3aede56a367e02419161e30e7bf9e44fc07ad88f2bf28c3cb50a7092769",
"0x45055d663e7f5e980bf47e32dce42e7599c6151f65b2b394468329636fcd5fef",
"0x02a47f8c1c82f9452b42bba03853ed0aeeccb8667c0a2d53fa78b11496629d9e",
"0x5690600084a83159334b484877849479e3a8e3df068f911bea2695ebc41373f2",
"0xf2f0c1780ae9e6bab561f80c267358576e66810ae65ee85f5dcc6bf14226b735"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

