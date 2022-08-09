import {Rich} from './class_2.js'

let id_parent = document.getElementById('id_parent');
console.log(id_parent);

window.onload = function() {

let rich_1 = new Rich("Bill Gates","$90B", "https://specials-images.forbesimg.com/imageserve/59d502f931358e542c034e76/200x200.jpg?background=000000&cropX1=245&cropX2=2420&cropY1=636&cropY2=2813");

let rich_2 = new Rich("Warren Buffut","$84B","https://specials-images.forbesimg.com/imageserve/59d5055931358e542c034ead/200x200.jpg?background=000000&cropX1=46&cropX2=693&cropY1=159&cropY2=806");

let rich_3 = new Rich("Mark Zuckerberg","$71B","https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/200x200.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044");

let rich_4 = new Rich("Larry Ellison","$57B", "https://specials-images.forbesimg.com/imageserve/59d5069b31358e542c034ec1/200x200.jpg?background=000000&cropX1=0&cropX2=2000&cropY1=227&cropY2=2228");

let rich_5 = new Rich("Michael Bloomberg","$50B","https://specials-images.forbesimg.com/imageserve/58c1d278a7ea431f321add1f/200x200.jpg?background=000000&cropX1=0&cropX2=744&cropY1=40&cropY2=784");

 rich_1.addToHtml();
 rich_2.addToHtml();
 rich_3.addToHtml();
 rich_4.addToHtml();
 rich_5.addToHtml();


let rich_Arr = [rich_1,rich_2,rich_3,rich_4,rich_5];
console.log(rich_Arr);




}

//בןנוס- נסיון שלא צלח

//let richDiv = document.getElementsByClassName("inner-div");
//let flag = 0;

  //  richDiv.eddEventListner(("click" , function() {
        
  //   for(i = 0; i === rich_Arr.length; i++) {
//   if (rich_Arr[i] === flag) {

  //    return rich_Arr.pop(i);   

  //      }

  //    }

  //  }))




