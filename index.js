// Your code here
let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])

function createEmployeeRecord(array) {
    const testEmployee = {}

    const firstName = testEmployee.firstName = array[0]
    const familyName = testEmployee.familyName = array[1]
    const title = testEmployee.title = array[2]
    const payPerHour = testEmployee.payPerHour = array[3]
    const timeInEvents = testEmployee.timeInEvents = []
    const timeOutEvents = testEmployee.timeOutEvents = []

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
    let newEvent = employeeRecord
    const [date, hour] = dateAndHour.split(" ")
    /*
    newEvent.timeInEvents.type = "TimeIn"
    newEvent.timeInEvents.date = date
    newEvent.timeInEvents.hour = hour
    */
    newEvent.timeInEvents = {
        type: "TimeIn",
        date: date,
        hour: hour
    }
   
    console.log(newEvent)
    return newEvent
    
}

createTimeInEvent(bpRecord, "2014-02-28 1400")

//console.log(bpRecord)