// AUTHOR: Meena K
// JavaScript Concept: Connected Call Bakc in LWC
// GITHUB: https://github.com/Meena3932

//ConnectedCallBack is similar to init Handler in aura framework. This renders after the wired methods
import { LightningElement, track } from 'lwc';

export default class connectedCallExample extends LightningElement {
    @track myNAME;   
   connectedCallback(){
        //defined a varibale
        console.log('Name before::'+this.myNAME):
        let name = "Bunny";
        if (name) {
            //setting property value
            this.myNAME = "Meena";
        }
        console.log('Name after::'+this.myNAME);
   }    
}
