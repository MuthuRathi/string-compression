function stringCompress(str) {
    var compressedStr = '';
    var counter = 0;
    //"aabcccc" -> '2a1b4c'
    for (var i = 0; i < str.length; i++) {
        counter = 1;
        if (str[i] == str[i + 1]) {
            
            while (str[i] == str[i + 1]) {
                i++;
                counter++;
            }
            
        }
        compressedStr += counter + str[i];

    }

    return compressedStr;
}
