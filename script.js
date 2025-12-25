let btc = document.getElementById("btc");
let eth = document.getElementById("eth");
let doge = document.getElementById("doge");

async function data() {
    let res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd");
    let data = await res.json();
    btc.innerHTML = data.bitcoin.usd;
    eth.innerHTML = data.ethereum.usd;
    doge.innerHTML = data.dogecoin.usd;
}
data();