## Difference between JS Variables

There are **3 ways** to declare a **JS Variable**.

1. var
2. const
3. let

# var

- You can re-declare a variable.
   
   **Before**

  `var myName = "Amna Mazhar";`
  
  **After**
  
  `var myName = "Amna";`
 
- You can re-assign them a new value after you've initialized them.

  **Before**
  
  `var myName = "Amna Mazhar";`
  
  **After** 
  
  `myName = "Amna";`
  
- You can access variable without initialization as its default value is “undefined”.

   `console.log(a);`
  
   `var a = 10;`
   
   **Output**
   
   `undefined`

- The scope of **var** variable is global.

# const

 - You must initialize them when you declare them.

   `const myName = "Amna Mazhar";`
   
 - You can not re-assign them a new value after you've initialized them.
 
 - The scope of **const** is limited only to the block in which it is defined.
 
# let

 - You can declare a variable without initializing it.
    
    **Before**
    
   `let myName;`
   
   **After**
   
   `myName = "Amna Mazhar";`
   
 - You can re-assign them a new value after you've initialized them.
 
     **Before**
    
    `let myName = "Amna Mazhar";`
   
    **After**
   
    `myName = "Amna";`  
   
  - The scope of **let** is limited only to the block in which it is defined.
  
