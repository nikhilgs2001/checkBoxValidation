const validateCheckBox = (type, value, label, data, index=0) => {  //default parameters passed to the function
    let arrayData = [...data];
    let referenceData, countOfSelecetdItem = 0, headerCheckBox=false;
    if(type == "single"){
        referenceData = arrayData[index];
        referenceData[label] = value;
        arrayData.forEach(partData=>{
            if(partData[label]){
                countOfSelecetdItem++;
            }
        })
        if(countOfSelecetdItem == data.length){
            headerCheckBox = true;
        }else{
            headerCheckBox = false;
        }
    }else{
        if(data.length != 0){
            arrayData.forEach(partData=>{
                partData[label] = value;
            })
            headerCheckBox = value;
        }
    }
    return [headerCheckBox,arrayData];
}

export default validateCheckBox;