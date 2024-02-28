
// All Inputs
let $cardID = document.getElementById('cardID');
let $cvv2 = document.getElementById('cvv2');
let $ExpireDate = document.getElementById('date');
let $password = document.getElementById('password');
// All Inputs

// All Show Inputs
let $cardIdShow = document.getElementById('cardidShow');
let $cvv2Show = document.getElementById('cvv2show');
let $dateshow = document.getElementById('dateshow');
let $pass_show = document.getElementById('passShow');
let $show_card = document.getElementById('show-card');
// All Show Inputs

// All Events
$cardID.addEventListener('input', () => {
    $cardIdShow.innerText ='Card ID : ' + $cardID.value;
    if (($cardID.value).length == 4 ||
        ($cardID.value).length == 11 ||
        ($cardID.value).length == 18
    ) {
        $cardID.value += ' - ';
    }

    if (($cardID.value).length == 25) {
        $cvv2.focus();
    }

    if (($cardID.value).search(/[1-9]/)) {
        alert('Please Enter Number ')
    }
});

$cvv2.addEventListener('input', () => {
    $cvv2Show.innerText ='CVV2 : ' + $cvv2.value;

    if (($cvv2.value).length == 4) {
        $ExpireDate.focus();
    }

    if (($cvv2.value).search(/[1-9]/)) {
        alert('Please Enter Number ')
    }
});

$ExpireDate.addEventListener('input', () => {
    $dateshow.innerText ='Expire Date : ' + $ExpireDate.value;

    if(($ExpireDate.value).length == 2){
        $ExpireDate.value += ' / ';
    }

    if(($ExpireDate.value).length == 7){
        $password.focus();
    }

    if (($ExpireDate.value).search(/[1-9]/)) {
        alert('Please Enter Number ')
    }
});

$password.addEventListener('input', () => {
    $pass_show.innerText ='Password : ' + $password.value;

    if(($password.value).length == 4){
        $cardID.focus();
    }

    if (($pass_show.value).search(/[1-9]/)) {
        alert('Please Enter Number ')
    }
});


// All Events