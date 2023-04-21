// Your code here


function createEmployeeRecord(array) {
    const testEmployee = {}
        testEmployee.firstName = array[0]
        testEmployee.familyName = array[1]
        testEmployee.title = array[2]
        testEmployee.payPerHour = array[3]
        testEmployee.timeInEvents = []
        testEmployee.timeOutEvents = []

    return testEmployee
   
}

function createEmployeeRecords(array) {
    let employeeRecords = []

    for(let i = 0; i < array.length; i++) {
        const newEmployee = createEmployeeRecord(array[i])
        employeeRecords.push(newEmployee)
    }

    console.log(employeeRecords)
    return employeeRecords
}





const createTimeInEvent = function (employeeRecord, dateAndHour) {
    const [date, hour] = dateAndHour.split(" ")

    const obj = {
        type: "TimeIn",
        date: date,
        hour: parseInt(hour)
    }
    employeeRecord.timeInEvents.push(obj)

    return employeeRecord
    
}


function createTimeOutEvent(employeeRecord, dateAndHour){
    const [date, hour] = dateAndHour.split(" ")

    const obj = {
        type: "TimeOut",
        date: date,
        hour: parseInt(hour)
    }
    employeeRecord.timeOutEvents.push(obj)

    return employeeRecord

}

function hoursWorkedOnDate(employeeRecord, date){
    const timeInDate = employeeRecord.timeInEvents[0].date
    const timeOutDate = employeeRecord.timeOutEvents[0].date
    if(timeOutDate || timeInDate === date){
        const hoursWorked = employeeRecord.timeOutEvents[0].hour - employeeRecord.timeInEvents[0].hour 
        
        return hoursWorked / 100
    }
    else(console.log("No such date"))
  
}

function wagesEarnedOnDate(employeeRecord, date){
    const timeInDate = employeeRecord.timeInEvents[0].date
    const timeOutDate = employeeRecord.timeOutEvents[0].date
    if(timeOutDate || timeInDate === date){
        const hoursWorked = hoursWorkedOnDate(employeeRecord)
        const wagesEarned = hoursWorked * employeeRecord.payPerHour
        
        console.log(wagesEarned)
        return wagesEarned
    }
    else(console.log("No such date"))

}

function allWagesFor(employeeRecord){
    let hoursWorked
    console.log()
    for (let i = 0; i < employeeRecord.timeInEvents.length; i++){
        
        for (let j = i + 1; j < employeeRecord.timeInEvents.length; j++){
            const timeIn = employeeRecord.timeInEvents[i].hour + employeeRecord.timeInEvents[j].hour
            const timeOut = employeeRecord.timeOutEvents[i].hour + employeeRecord.timeOutEvents[j].hour
            const payPerHour = employeeRecord.payPerHour
            const hoursWorked = timeOut - timeIn

            return hoursWorked * payPerHour / 100
        }
    }
   
   
    
}

let rRecord = createEmployeeRecord(["Rafiki", "", "Aide", 10])
        let sRecord = createEmployeeRecord(["Simba", "", "King", 100])

        let sTimeData = [
          ["2019-01-01 0900", "2019-01-01 1300"], // 4 * 100 = 400
          ["2019-01-02 1000", "2019-01-02 1300"]  // 3 * 100 = 300 ===> 700 total
        ]

        let rTimeData = [
          ["2019-01-11 0900", "2019-01-11 1300"], // 4 * 10 = 40
          ["2019-01-12 1000", "2019-01-12 1300"]  // 3 * 10 = 40 ===> 70 total ||=> 770
        ]

        sTimeData.forEach(function (d) {
          let [dIn, dOut] = d
          sRecord = createTimeInEvent(sRecord, dIn)
          sRecord = createTimeOutEvent(sRecord, dOut)
        })

        rTimeData.forEach(function (d, i) {
          let [dIn, dOut] = d
          rRecord = createTimeInEvent(rRecord, dIn)
          rRecord = createTimeOutEvent(rRecord, dOut)
        })

        let employees = [sRecord, rRecord]
        
  
function calculatePayroll(employeeRecord){
    //console.log(employeeRecord.length)
    for(let i = 0; i < employeeRecord.length; i++){
        for(let j = i + 1; j < employeeRecord[i].timeInEvents.length; j++){
            const payPerHour = employeeRecord[i].payPerHour
            const timeIn = employeeRecord[i].timeInEvents[i].hour + employeeRecord[j].timeInEvents[i].hour * payPerHour / 100
            const timeOut = employeeRecord[i].timeOutEvents[i].hour + employeeRecord[j].timeOutEvents[i].hour * payPerHour / 100
            const times = timeOut - timeIn
            console.log(times)
            
        }
    
    }
    
}

calculatePayroll(employees)