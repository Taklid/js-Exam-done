function calculateTax(income, expense) {

    if (typeof income !== 'number' || typeof expense !== 'number' ||
        income < 0 || expense < 0 || expense > income) {
        return "Invalid Input";
    }
    
    const difference = income - expense;
    const tax = difference * 0.20;
    return tax;
}
 




function sendNotification(email) {
    
    
    const atIndex = email.indexOf('@');
    
    
    if (atIndex === -1) {
        return "Invalid Email";
    }
    

    const username = email.slice(0, atIndex);
    const domainName = email.slice(atIndex + 1);
    

    const notificationMessage = `${username} sent you an email from ${domainName}`;
    
    return notificationMessage;
    
    
}

const email1 = "zihad.ph@gmail.com";
const email2 = "invalid-email.com";





function checkDigitsInName(input) {

    if (typeof input !== 'string') {
        return "Invalid Input";
    }
    

    const hasDigit = /\d/.test(input);
    return hasDigit;
}






function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input";
    }

    const { name, testScore, schoolGrade, isFFamily } = obj;

    if (typeof name !== 'string' ||
        typeof testScore !== 'number' || testScore < 0 || testScore > 50 ||
        typeof schoolGrade !== 'number' || schoolGrade < 0 || schoolGrade > 30 ||
        typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    let finalScore = testScore + schoolGrade;
    if (isFFamily) {
        finalScore += 20;
    }

    return finalScore >= 80;
}


const input1 = {
    name: "Rajib",
    testScore: 40,
    schoolGrade: 30,
    isFFamily: true
};

const input2 = {
    name: "Rajib",
    testScore: 40,
    schoolGrade: 30,
    isFFamily: false
};

const input3 = {
    name: "Rajib",
    testScore: 40,
    schoolGrade: 25,
    isFFamily: true

    
};


const input4 = "Invalid Input";





function waitingTime(interviewTimes, serialNumber) {
    
    if (!Array.isArray(interviewTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    
    if (interviewTimes.length === 0 || serialNumber <= interviewTimes.length) {
        return "Invalid Input";
    }

    const totalTime = interviewTimes.reduce((acc, time) => acc + time, 0);
    const averageTime = totalTime / interviewTimes.length;
    const roundedAverageTime = Math.round(averageTime);

    const remainingPeople = serialNumber - interviewTimes.length - 1;

    const waitingTime = remainingPeople * roundedAverageTime;

    return waitingTime;
}


const interviewTimes = [3, 5, 7, 11, 6];
const serialNumber = 10;
