/*
day
startTime
endTime
HourlySalary
*/

class wage{
    constructor(day,startTime,endTime,HourlySalary){
    this.day=day
    this.startTime=startTime
    this.endTime=endTime
    this.HourlySalary=HourlySalary

    this.maimumHours=12
    this.extraHoursCountFrom=8
    
    this.normalSalary=0
    this.extraSalary=0
    this.weekEndSalary=0
}
getTotalHRS(){
    return this.endTime-this.startTime
}
getExtraTimeHours(){
    if(this.getTotalHRS()> this.extraHoursCountFrom){
    return this.getTotalHRS()-this.extraHoursCountFrom
}else{
    return 0
}

}
isWeekend(){
    return this.day==="saturday"||this.day==="sunday"
}
weekEndSalary(){
    if(isWeekend()){
    //this.weekEndSalary=
    }
}
}

const wage1=new wage("sunday",8,18,100)
//console.log(wage1.getExtraTimeHours())
console.log(wage1.isWeekend())