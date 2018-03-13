//biznasty $$$
function Contact(first,last,town) {
  this.firstName = first;
  this.lastName = last;
  this.homeTown = town;
}
Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}
 //Cruzer Logixxx
 $(document).ready(function(){
   $("form#new-contact").submit(function(event){
     event.preventDefault();

     var inputtedFirstName = $("input#new-first-name").val();
     var inputtedLastName = $("input#new-last-name").val();
     var inputtedHomeTown = $("input#new-home-town").val();

     var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedHomeTown);

     $("ul#contacts").append("<li><span class= 'contact'>" + newContact.fullName() + "</span></li>");

     $(".contact").last().click(function(){
       $("#show-contact").show();
       $("#show-contact h1").text(newContact.firstName);
       $(".first-name").text(newContact.firstName);
       $(".last-name").text(newContact.lastName);
       $(".hometown").text(newContact.homeTown);
     });

     $("input#new-first-name").val("");
     $("input#new-last-name").val("");
     $("input#new-home-town").val("");
   });
 });
