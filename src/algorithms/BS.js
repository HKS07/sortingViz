

 
import {swap} from './helper'

const bs = (array,arraySteps,colorSteps) => {
    let colorKey = colorSteps[colorSteps.length - 1].slice();
    
    for(let i=0;i<array.length-1;++i)
    {   
        for(let j=0;j<array.length-1-i;++j)
        {
            if(array[j]>array[j+1])
                {array = swap(array,j,j+1)}
                arraySteps.push(array.slice());
                
                colorKey[j] = 1;
                colorKey[j+1] = 1;
                
                colorSteps.push(colorKey.slice())
                
                colorKey[j] =0;
                colorKey[j+1]=0;
                
        }
        //setting colorKey of sorted elements   
        colorKey.fill(2,array.length-1-i,array.length)
        
        arraySteps.push(array.slice());
        //inserting above colorkey into colorSteps
        colorSteps.push(colorKey.slice());
        
    }
    colorSteps[colorSteps.length-1] = new Array(array.length).fill(2)
    

    return;
}

export default bs;