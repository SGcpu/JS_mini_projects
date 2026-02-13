const grid = document.getElementById('asset-grid')
const refreshBtn = document.getElementById('refresh-btn')
const statusMsg = document.getElementById('status-message')

const COINS = ['bitcoin', 'ethereum', 'solana', 'dogecoin'];

async function fetchMarketData(){
    try{
        statusMsg.innerText = 'Fetching Live Data...';

        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${COINS.join(',')}&vs_currencies=usd&include_24hr_change=true`)

        if(!response.ok) throw new Error("Network Response was not ok");
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error('API Error', error)
        statusMsg.innerText = 'Error fetching data!'
        return null;
    }
}

const MarketState = (()=>{
    let assetData = {};

    return{
        updateData: (newData) =>{
            assetData = {...assetData, ...newData};
        },
        getData: ()=>assetData
    }
})();

const RenderDashboard = ()=>{
    grid.innerHTML = "";
    const currentData = MarketState.getData();

    Object.entries(currentData).forEach((coinArray)=>{
        const [coinName, coinStats] = coinArray;

        const {usd, usd_24h_change} = coinStats;

        const isPositive = usd_24h_change >=0;
        const changeClass = isPositive?'postive':'negative';
        const changeSign = isPositive?'+':'';
        const card = document.createElement('div');
        card.className = 'asset-card';
        card.innerHTML = `
            <div class="asset-name">${coinName}</div>
            <div class="asset-price">$${usd.toLocaleString()}</div>
            <div class="asset-change ${changeClass}">
                ${changeSign}${usd_24h_change.toFixed(2)}%
            </div>
        `;
        
        grid.appendChild(card);
    });
    statusMsg.innerText = `Last updates: ${new Date().toLocaleTimeString()}`;
}

const updateMarket = async ()=>{
    refreshBtn.disabled = true;
    refreshBtn.innerText = 'LOADING...';

    const newData = await fetchMarketData()

    if(newData){
        MarketState.updateData(newData);
        RenderDashboard()
    }

    refreshBtn.disabled = false;
    refreshBtn.innerText = 'FETCH LIVE DATA';
};

refreshBtn.addEventListener('click', updateMarket)

updateMarket()