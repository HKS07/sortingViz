export function swap(array,a,b){
    array[a]=array[a]+array[b];
    array[b]=array[a]-array[b];
    array[a]=array[a]-array[b];
    return array;
}