var imageness=["images/Barot_Bellingham_tn.jpg","images/Jonathan_Ferrar_tn.jpg","images/Hillary_Goldwynn_tn.jpg","images/Hassum_Harrod_tn.jpg","images/Jennifer_Jerome_tn.jpg","images/LaVonne_LaRue_tn.jpg","images/Constance_Smith_tn.jpg","images/Riley_Rewington_tn.jpg","images/Xhou_Ta_tn.jpg"];
 $.getJSON( "data.json", function( data ) {
 var items = [];
if($("#search").val()==""){
      var i=0;
  $.each( data, function() {
    items.push( "<table id='searchtable'><tr><td  colspan='2'><br><li id='" + "name" + "'>" + data[i].name + "</li><br>"+
                "<hr id="+"linea"+"></td></tr><tr><td><img src="+imageness[i]+"></td><td><li id='" + "texto" + "'>" + data[i].shortname + "</li><br>"+
                "<li id='" + "texto" + "'>" + data[i].reknown + "</li><br>"+
                "<li id='" + "texto" + "'>" + data[i].bio + "</li></td></table<br><br><br>"
                );
    i++;
   
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
}
$("#search").keyup(function(){
 
      var i=0;
  $.each( data, function() {
    items.push( "<table id='searchtable'><tr><td  colspan='2'><br><li id='" + "name" + "'>" + data[i].name + "</li><br>"+
                "<hr id="+"linea"+"></td></tr><tr><td><img src="+imageness[i]+"></td><td><li id='" + "texto" + "'>" + data[i].shortname + "</li><br>"+
                "<li id='" + "texto" + "'>" + data[i].reknown + "</li><br>"+
                "<li id='" + "texto" + "'>" + data[i].bio + "</li></td></table<br><br><br>"
                );
    i++;
   
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );


})
});