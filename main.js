var nameofthestudentarray = [];
function submit(){
    displaystudentarray=[];
    nameofthestudentarray=[];
    var displaystudentarray=[];
    for(var j=1; j<=4; j++){
         var name = document.getElementById("name_of_the_student_"+j).value;
         nameofthestudentarray.push(name);
    }
    var length= nameofthestudentarray.length;
    for(var k = 0; k<length; k++){
        displaystudentarray.push("<h4> NAME- "+nameofthestudentarray[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML= displaystudentarray;
    var removecommas= displaystudentarray.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    displaystudentarraywithsorting=[];
     nameofthestudentarray.sort();
     var displaystudentarraywithsorting=[];
     var length= nameofthestudentarray.length;
     for(var k = 0; k<length; k++){
         displaystudentarraywithsorting.push("<h4> NAME- "+nameofthestudentarray[k]+"</h4>");
     }
     var removecommas= displaystudentarraywithsorting.join(" ");
     document.getElementById("display_name_without_commas").innerHTML=removecommas;
     document.getElementById("submit_button").style.display="inline-block";
     document.getElementById("sort_button").style.display="none";
}