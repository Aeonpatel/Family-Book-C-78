var images=["M.jfif","F.jfif","GrandM.jfif","Grf.jpg","boy.jfif","G.jfif"];
var names=["Shital Patel","Apal Patel","Kokila Patel","Natvarlal Patel","Aeon Patel","Aena Patel"];

var i=0
function Next(){

    
    
var number_of_family_members=5;
if(i > number_of_family_members){
i=0
}
 var updateImage=images[i];
 var updateName=names[i];
 document.getElementById("name").innerHTML=updateName;
 document.getElementById("img").src=updateImage;
 i++;

}
