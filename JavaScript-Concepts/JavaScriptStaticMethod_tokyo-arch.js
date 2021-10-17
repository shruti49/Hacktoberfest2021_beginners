// AUTHOR: Tokyo Arch
// JavaScript Concept: JavaScriptStaticMethod
// GITHUB: https://github.com/tokyo-arch

//The JavaScript provides static methods that belong to the class instead of an instance of that class. So, an instance is not required to call the static method.
//These methods are called directly on the class itself.

<script>  
class Test  
{  
  static display1()  
  {  
    return "static method is invoked"  
  }  
  static display2()  
  {  
    return "static method is invoked again"  
  }  
}  
document.writeln(Test.display1()+"<br>");  
document.writeln(Test.display2());  
</script>  

// OUTPUT
//static method is invoked
//static method is invoked again
