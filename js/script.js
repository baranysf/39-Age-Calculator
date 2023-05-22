function birthyear2age(){
    event.preventDefault();


    var birth_year;
    var current_year;
    var age;

    
    var d=new Date();
    current_year = d.getFullYear();

    birth_year = document.getElementById('birth_year').value;

    
    
    age = current_year - birth_year;

    console.log(age);

    document.getElementById('result').innerHTML = "Yaşınız:" + age;

}