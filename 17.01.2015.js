//intData[0]N- колл планируемых поссещений,
//intData[1]K-колл успешных включений
//intData[2]C-стоимость лампочки
//intData[3]D-стоимость минуты лампочки
//(1<=N, K<=200000, 1<=C, D<=10000000000).
var intData = [3,1,15,10];
var count = 0;
//time[i][0] и time[i][1] предположительные визиты в кладовку (вход - выход) (1<=time[i][0]<time[i][1]<=10000000000)
//посещения не пересекаются во времени и упорядочены time[i][1] < time[i+1][0];
var time = [[1,3],[4,5],[6,8],[9,60],[61,65],[66,67]];

var timeDif = [];//массив из разниц времен.
var CountTime = 0; //сумма нажженной электроэнергии по времени в момент посещения 
var CountTimeDif = 0; //сумма нажженной электроэнергии по времени между посещениями
var lamp = 0;
//если длина вводных данных один - то просто считаем нажженое время и разбежались :)
if (time.length > 1){

    //создаем массив где каждый номер массива это время между посещениями
    for ( var i = 0; i < time.length-1; i++){
        timeDif.push(time[i+1][0]-time[i][1]);   
    
    }
    // просто считаем нагоревший свет
    for ( var i = 0; i < time.length; i++){
        CountTime += time[i][1]-time[i][0];
    }
    
    timeDif.sort(compareReversed); //сортируем наоборот массив из промежутков между посещениями
    
    //если не целесообразно жеччь лампочку - то не жгем 
    if(((timeDif[1]-timeDif[0])*intData[3])>intData[2]){
        
        //тут считаем лампы
        for ( i = 0; i < intData[1]; i++){
            timeDif.splice(0,1);
            console.log('сожгли лампулю');
            lamp += 1;
            
        }
    }

} else {
    
    console.log('стоимость света ',(time[0][1]-time[0][0])*intData[3]," рубчиков")
    };

    //насчитываем сколько света нагорело между посещениями
    for (var i = 0; i < timeDif.length; i++){
        CountTimeDif += timeDif[i]*intData[3];
}

console.log("затраты на освещение ",(CountTime*intData[3])+(intData[2]*lamp)+CountTimeDif, ' рублей');

//функция для сортировки
function compareReversed(a,b){
    return b - a;
};