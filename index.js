class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
     return string.replace(/[^A-Za-z0-9-'-' ']+/g, '');
  }

  static titleize(string) {
    exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    string = string.toLowerCase().split(' ');
    for (let i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join(' ')
  }
}
