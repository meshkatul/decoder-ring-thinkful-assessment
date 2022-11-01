**Project: Decoder ring**

#### This project has the following three encryption and decryption functions: ####

1. The caesar() function:\
    This function has three parameters -\
        - **input** refers to the inputted text to be encoded or decoded\
        - **shift** refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e., A becomes D) whereas a negative number means shifting to the left (i.e., M becomes K)\
        - **encode** refers to whether you should encode or decode the message. By default it is set to true\
    
    Examples:\
        caesar("thinkful", 3); //> 'wklqnixo'\
              caesar("thinkful", -3); //> 'qefkhcri'\
              caesar("wklqnixo", 3, false); //> 'thinkful'\

2. The polybius() function:\
    This function has two parameters-\
        - **input** refers to the inputted text to be encoded or decoded\
        - **encode** refers to whether you should encode or decode the message. By default it is set to true\

    
    Examples:\
    polybius("thinkful"); //> "4432423352125413"\
    polybius("3251131343 2543241341", false); //> "hello world"\
    polybius("4432423352125413", false); //> "th(i/j)nkful\

3. The substitution() function:\
    This function has three parameters-\
        - **input** refers to the inputted text to be encoded or decoded\
        - **alphabet** refers to substitution alphabet\
        - **encode** refers to whether you should encode or decode the message. By default it is set to true\

    Examples:\
        substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'\
        substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'\
        substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'


