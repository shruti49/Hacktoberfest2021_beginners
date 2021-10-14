// AUTHOR:Gaurav Patil
// JavaScript Concept: Prototypes
// GITHUB: (githyb.com/GauravPatil8778)



function Employee(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
    
Employee.prototype.fullName=function()  
{  
  return this.firstName+" "+this.lastName;  
}  

Employee.prototype.company="Javatpoint"  
  
var employee1=new Employee("Martin","Roy");  
var employee2=new Employee("Duke", "William");  
document.writeln(employee1.fullName()+"<br>");  
document.writeln(employee2.fullName());  
document.writeln(employee1.firstName+" "+employee1.lastName+" "+employee1.company+"<br>");  
document.writeln(employee2.firstName+" "+employee2.lastName+" "+employee2.company);  

