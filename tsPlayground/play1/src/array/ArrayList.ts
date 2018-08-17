export default class ArrayList<T>{
    array: Array<T> = []
    length: number = this.array.length

    constructor(){}

    addAll(arr: Array<T>){
        if(arr.length > this.array.length){
            arr.push.apply(arr,this.array)
            this.array = arr;
        }else{
            this.array.push.apply(this.array, arr)
        }
    }

    insert(item: T){
        this.array.push(item)
    }

    toString(): string{
        return this.array.join('-')
    }

    bubbleSort(){
        this.array.sort((a1, a2) => this.comparator(a1, a2))
    }

    comparator(a1: T, a2:T){
        if(typeof a1 === 'number' && typeof a2 === 'number'){
            return a1 - a2;
        }else{
            return 0;
        }
    }

    insertSort(){
        let j, temp;
        for(let i = 1; i<this.array.length; i++){
            if(typeof this.array[i] === 'number'){
                j = i;
                temp =  this.array[i];
                while (j>0 && this.array[j-1] > temp){ 
                    this.array[j] = this.array[j-1]; 
                    j--;
                }
                this.array[j] = temp;    
            }
        }
    }

    quickSort(){
        quick(this.array, 0, this.array.length-1)
    }

}

function quick(arr: Array<any>, left: number, right: number){
    let index: number;

    if(arr.length > 1){
        index = partition(arr, left, right)

        if(left < index - 1){
            quick(arr, left, index-1)
        }

        if(right > index){
            quick(arr, index, right)
        }
    }

}

function partition(arr: Array<any>, left: number, right: number): number{
    let pivor: number = arr[ Math.floor(left + right) / 2 ],
    i: number = left,
    j: number = right

    while( i <= j){
        while( arr[i] < pivor ){
            i++
        }

        while( arr[j] > pivor ){
            j--
        }

        if( i <= j ){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = arr[i]

            i++
            j--
        }

    }

    return i

}