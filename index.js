class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]+/g, "");
    
  }
  static titleize(string){
    let hidden = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']
   return string.split(' ').map(function(word, idx){
     if(idx === 0 ){
       return word.charAt(0).toUpperCase() + word.slice(1)
     }
     if(hidden.includes(word)){
       return word;
     } else {
       return word.charAt(0).toUpperCase() + word.slice(1)}
   }).join(" ") 
  }
}