require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet raise six pulse hunt infant swift tomato'; 
let testAccounts = [
"0x794114e57b9706f47b24b40f3304484d7001b2f2fba13f12662db3ca4887cbd8",
"0xe435b02afce29bfbe8adbb0179c6ecf8b8e8d883370b248c10f1fdfbdbab11d3",
"0x51df7e130b5a08a436714c8256d3aff289b50d30a1fac81c6c7d4455e926fcce",
"0xe42f201beebe247c9af525115d14e2836c5001d92396977eced82325b837e634",
"0x5c5e61312a9cea868f5287cd01438a36bddf9b9ba7601949dab9cb1635cb577e",
"0xb483edbb204af3dee59c2237d00f268d0bcc17ec8d21091718511bfccc7b39af",
"0xbcbf3ff56691b36bf261a4dc614d99ad3026be2bd0a2a1b8c492e922136d6fe7",
"0xc9ba9e24ecdd2fde26533102cd23006fa4f40c662e3127f8668dde2eb26fb69f",
"0x4bf827a70746957c2fde76920d3f276f7c99c4504ac9506441faf79f48db92d4",
"0xc97555a8767a5ffd0ae87ef17019ff1819249b6979d4bea34905c840d7eb53a7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


