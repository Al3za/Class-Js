class customer {
    constructor(){
     
        this.transactions= []
        this.discount=1000
    }
    addTransaction(amount){
        this.transactions.push(amount)
    }
    totalAmmount(){
      let  sum=0
        this.transactions.forEach(a=>{
            sum+=a
        })
        return sum
    }
    eligebleForDiscount(){
        const disc=this.totalAmmount()>=this.discount
      return  disc? " du får discount" : "du får inget discount"
    }
   
    
}
const customer2= new customer()
customer2.addTransaction(800)
customer2.addTransaction(100)
customer2.addTransaction(100)
//console.log(" for att du har spenderat "+ customer2.totalAmmount())
console.log(`${customer2.eligebleForDiscount()}  för att du har spenderat ${customer2.totalAmmount()}`)