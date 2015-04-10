//插入排序 pefect:O(n); bad:O(n2); average:O(n2)
var arrSort = {
    insertSort: function(arr){ //插入排序
        var i = 0, j;
        for(; i<arr.length; i++){
            key = arr[i];
            j = i - 1;
            while(j >= 0 && arr[j] > key){
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        return arr;
    },
    selectSort: function(arr){ //选择排序
        var i = 0, min, k,
            len = arr.length;
        for(; i < len; i++){
            min = arr[i];
            for(j = i+1; j < len; j++){
                if(min > arr[j]){
                    min = arr[j];
                    k = j;
                }
            }
            if(arr[i] !== min){
                arr[k] = arr[i];
                arr[i] = min;
            }
        }
        return arr;
    },
    bubbleSort: function(arr){ //冒泡排序
        var i = 0, j,
            len = arr.length;
        for(; i < len-1; i++){
            for(j = i; j < len-1; j++){
                if(arr[j] > arr[j+1]){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;
    },
    quickSort: function (arr){ //快速排序
        if(arr.length <= 1){
            return arr;
        }
        var i = 0,
            left = [], right = [],
            pivot = Math.floor(arr.length/2),
            val = arr.splice(pivot, 1)[0];
        for(; i < arr.length; i++){
            if(arr[i] < val){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }
        return quickSort(left).concat(val, quickSort(right));
    }
};
