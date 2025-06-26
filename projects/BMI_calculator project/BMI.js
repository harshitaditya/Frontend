const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results');
    if(height<0 || height=='' || isNaN(height) ){
        result.innerHTML=`Please give a valid height ${height}`

    }
    else if(weight<0 || weight=='' || isNaN(weight) ){
        result.innerHTML=`Please give a valid weight ${weight}`

    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi <= 18.6){
            result.innerHTML=`Your BMI is: ${bmi}, you are Under Weight</span>`;
        }
        else if(bmi>18.6 && bmi<=24.9){
            result.innerHTML=`Your BMI is: ${bmi}, Your Weight is Normal`;
        }
        else{
            result.innerHTML=`Your BMI is: ${bmi}, you are Over Weight`;

        }
    }
   
   

})
