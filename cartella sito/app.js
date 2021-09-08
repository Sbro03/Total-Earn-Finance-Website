const counter = document.querySelectorAll('.counter');

counter.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        
        const increment = target / 250;
        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 50);
        }else{
            counter.innerText = target;
        }
    }
    updateCounter();
});

var x = document.getElementsByClassName("coin");
const image = [
    "url('1inch.png')",
    "url('aave-token-explained.png')",
    "url('avax.png')",
    "url('band.png')",
    "url('bat.png')",
    "url('Binance-Coin-BNB-icon.png')",
    "url('Bitcoin_Cash.png')",
    "url('bittorrent-btt-logo.png')",
    "url('breveon19.png')",
    "url('busd.png')",
    "url('Cardano-ADA-icon.png')",
    "url('chainlink.png')",
    "url('compound.png')",
    "url('cosmos-logo.png')",
    "url('dai.png')",
    "url('dforce.png')",
    "url('dogecoin.png')",
    "url('EARN.png')",
    "url('egld-logo.png')",
    "url('eos.png')",
    "url('eth.5fc0c9bd.png')",
    "url('Ethereum-Classic-ETC.png')",
    "url('iotex-iotx-logo.png')",
    "url('mantra(OM).png')",
    "url('near.png')",
    "url('pancakeswap.finance.png')",
    "url('PikPng.com_attention-png_3098803.png')",
    "url('pngkey.com-litecoin-logo-png-1409408.png')",
    "url('polkadot.png')",
    "url('ripple.png')",
    "url('shiba.png')",
    "url('snx.png')",
    "url('sushi.png')",
    "url('tlm.png')",
    "url('TRXcard.png')",
    "url('uniswap.png')",
    "url('usdc.png')-logo",
    "url('usdt.png')",
    "url('xtz.png')",
    "url('yearn-finance-yfi-logo.png')",
    "url('zec.png')"
];
var i;

for (i = 0; i < x.length; i++) {
    x[i].style.backgroundImage = image[i];
    x[i].style.backgroundPosition = "center center";
    x[i].style.backgroundRepeat = "no-repeat"
};

var y = document.getElementsByClassName("square");
var o;
const colors = [
    '#B0413E',
    '#8377D1',
    '#AF2BBF',
    '#D16014'
]

for (o = 0; o < y.length; o++) {
    y[o].style.backgroundColor = colors[o];
};