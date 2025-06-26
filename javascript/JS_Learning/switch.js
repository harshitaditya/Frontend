// let month=3;
// switch(month){
//     case 1:{
//         console.log("January");
//         break;

//     }
//     case 2:{
//         console.log("February");
//         break;

//     }
//     case 3:{
//         console.log("March");
//         break;

//     }
//     case 4:{
//         console.log("April");
//         break;

//     }
//     default:{
//         console.log("Month not found")
//         break;
//     }


// }

// We can Also give string to the case:

let month="sep";
switch(month){
    case "January":{
        console.log("January");
        break;

    }
    case "February":{
        console.log("February");
        break;

    }
    case "March":{
        console.log("March");
        break;                           // break is imortant because Where case condition satisfied it will execute all other cases after the break statement.

    }
    case "April":{
        console.log("April");
        break;

    }
    default:{
        console.log("Month not found");
        break;
    }


}