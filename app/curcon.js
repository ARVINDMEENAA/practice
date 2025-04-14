import https from 'https';
import  readline  from 'readline';

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const apikey = '8dafe2a2ed1c491e0a55da46';
const url = 'https://v6.exchangerate-api.com/v6/8dafe2a2ed1c491e0a55da46/latest/USD';

const result =(amount , cur)=>{
    return amount*cur;

}
https.get(url,(res)=>{
    let data ="";
    res.on('data',(chunk)=> {
        data+=chunk;

    });
    res.on('end',()=> {
        const rates = JSON.parse(data).conversion_rates;
    
   rl.question('enter amount in usd ',(amount)=>{
        rl.question('enter targrt currency(INR,EUR,NPR) ',(cur)=>{
            const rate = rates[cur.toUpperCase()];
            if(rate){
                console.log(`${amount} USD is aproximately ${result(amount,rate)} ${cur}`);
            }
            else{
                console.log("invalid currency");
            }
            rl.close();
        });
    })
    })
})