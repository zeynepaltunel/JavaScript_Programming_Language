var brand = 'Opel';
var model = 'Astra';
var auto = 'yes';

/* If/Else Statement */
    if (auto=='yes') {
        console.log('auto.');
    }
    else{
        console.log('manual.');
    }

    auto = true;

    if(auto){
        console.log(brand+' '+model+' is auto');
    }

    if(10 == '10'){
        console.log('Numbers are equal');
    }

/* Switch Statement */

    // 1 : manual
    // 2 : auto
    var gear = '1';
    
    if(gear=='1'){
        console.log('manual');
    }
    else if(gear=='2'){
        console.log('auto');
    }
    else{
        console.log('wrong input!');
    }

    switch (gear) {
        case '1':
            console.log('manual');
            break;
        case '2':
            console.log('auto');
            break;
        default:
            console.log('wrong input!');
    }



