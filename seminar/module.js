var MyModule = {
    name : "Payal",
    age : 24,
    sayName : function(){
        alert(this.name);
    },
    setName : function(newName){
        this.name=newName;
    }
}

MyModule.setName('Aditya');
MyModule.sayName();