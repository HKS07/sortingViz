


const iSort = (array,arraySteps,colorSteps) => {
    //color key for coloring bars under current visulaization
    let colorKey = colorSteps[colorSteps.length-1].slice();

    for(let i=1; i<array.length; ++i)
    {
        let key = array[i];
        let j = i - 1;

        while( j >=0 && array[j]>key)
        {
            array[j+1]=array[j];
            arraySteps.push(array.slice());
            colorKey[i]=3;//coloring yellow bar of current key value
            
            if(i===j+1)
            {
                colorKey[j+1]=3;
            } else {
                colorKey[j+1]=1;
            }
            colorKey[j]=1;
            colorSteps.push(colorKey.slice());
            colorKey[j+1]=0;
            colorKey[i]=0;
            colorKey[j]=0;
            j=j-1;
            
        }
        array[j+1]=key;
        arraySteps.push(array.slice());
        colorSteps.push(colorKey.slice());
    }
    colorSteps[colorSteps.length-1] = new Array(array.length).fill(2)
    return;
}

export default iSort;

