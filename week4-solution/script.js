var names=new Array();
names[0]="karim";
names[1]="michael";
names[2]="louis";
names[3]="elnekheily";
names[4]="elaina";
names[5]="ayman";
names[6]="lotfy";
names[7]="nashed";
names[8]="kimo";
names[9]="fady";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}