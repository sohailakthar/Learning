#Written on 22-11-22 7:35PM
#Doesn't include numbers
morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",
".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
textInput = input("Enter text to convert into Morse: ")
result = ""

for letter in textInput:
    if letter == " ":
        result += " "
        continue;
    result += morseCode[ord(letter.lower())-97] + " "
print(result)
