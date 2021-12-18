class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9']+/g, "");
    
  }
  static titleize(string){
   return string.split(' ').map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1)}
      ).join(" ")
  }
}