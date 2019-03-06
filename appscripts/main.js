require(
	[],

	function () {
        console.log("yo");
        
        let disp = document.getElementById("combatdisp");

        let update = document.getElementById("UpdateButton");

        let fight = document.getElementById("FightButton");

        disp.innerHTML = "test";

        let radioloop = (Name)=>{
        	let x = document.getElementsByName(Name);
        	let y;
			for (let i = 0; i < x.length; i++) {
				if (x[i].checked) {
    			y= x[i];
  				}
			};

			return y;
        };

        let droploop = (Name)=>{
        	let x = document.getElementsByName(Name);
        	let y;
			for (let i = 0; i < x.length; i++) {
				if (x[i].selected) {
    			y= x[i];
  				}
			};

			return y;
        };

        var leftstarthp = document.getElementsByName("leftstartHP");

        var leftTYPE = droploop("leftTYPE");

        var leftHP = radioloop("leftHP");

        var leftATK = radioloop("leftATK");

        var leftDEF = radioloop("leftDEF");

        var leftFATK = radioloop("leftFATK");

        var leftFDEF = radioloop("leftFDEF");

        var leftNO = radioloop("leftNO");

        var rightstarthp = document.getElementsByName("rightstartHP");

        var rightTYPE = droploop("rightTYPE");

        var rightHP = radioloop("rightHP");

        var rightATK = radioloop("rightATK");

        var rightDEF = radioloop("rightDEF");

        var rightFATK = radioloop("rightFATK");

        var rightFDEF = radioloop("rightFDEF");

        var rightNO = radioloop("rightNO");

        var leftCurrentHP = leftstarthp[0].value;

        var rightCurrentHP = rightstarthp[0].value;

        var HPValue = document.getElementsByName("HPValue")[0].value;

        var ATKValue = document.getElementsByName("ATKValue")[0].value;

        var DEFValue = document.getElementsByName("DEFValue")[0].value;

        var FATKValue = document.getElementsByName("FATKValue")[0].value;

        var FDEFValue = document.getElementsByName("FDEFValue")[0].value;

        var NOValue = document.getElementsByName("NOValue")[0].value;

        var damageMultiplier = document.getElementsByName("damageMultiplier")[0].value;

        var counterMultiplier = document.getElementsByName("counterMultiplier")[0].value;

        var HPMultiplier = document.getElementsByName("HPMultiplier")[0].value;

        var defenseMultiplier = document.getElementsByName("defenseMultiplier")[0].value;

        let textadd = (Target,Prefix,Middle,Suffix)=>{
        	let i = document.createElement("text");
			i.innerHTML = `${Prefix}${Middle}${Suffix}`;
        	Target.appendChild(i);
        };

        let updateInput = ()=>{

        leftstarthp = document.getElementsByName("leftstartHP");

        leftTYPE = droploop("leftTYPE");

        leftHP = radioloop("leftHP");

        leftATK = radioloop("leftATK");

        leftDEF = radioloop("leftDEF");

        leftFATK = radioloop("leftFATK");

        leftFDEF = radioloop("leftFDEF");

        leftNO = radioloop("leftNO");

        rightstarthp = document.getElementsByName("rightstartHP");

        rightTYPE = droploop("rightTYPE");

        rightHP = radioloop("rightHP");

        rightATK = radioloop("rightATK");

        rightDEF = radioloop("rightDEF");

        rightFATK = radioloop("rightFATK");

        rightFDEF = radioloop("rightFDEF");

        rightNO = radioloop("rightNO");

        leftCurrentHP = leftstarthp[0].value;

        rightCurrentHP = rightstarthp[0].value;

        HPValue = document.getElementsByName("HPValue")[0].value;

        ATKValue = document.getElementsByName("ATKValue")[0].value;

        DEFValue = document.getElementsByName("DEFValue")[0].value;

        FATKValue = document.getElementsByName("FATKValue")[0].value;

        FDEFValue = document.getElementsByName("FDEFValue")[0].value;

        NOValue = document.getElementsByName("NOValue")[0].value;

        damageMultiplier = document.getElementsByName("damageMultiplier")[0].value;

        counterMultiplier = document.getElementsByName("counterMultiplier")[0].value;

        HPMultiplier = document.getElementsByName("HPMultiplier")[0].value;

        defenseMultiplier = document.getElementsByName("defenseMultiplier")[0].value;
        	
			disp.innerHTML = `Left Unit <br/>`;

			textadd(disp,"Starting HP = ",`${leftstarthp[0].value}`,"% <br/>");

			textadd(disp,"Type = ",`${leftTYPE.value}`,"<br/>");

			textadd(disp,"HP = ",`${leftHP.value}`,"⭐ <br/>");

			textadd(disp,"ATK = ",`${leftATK.value}`,"⭐ <br/>");

			textadd(disp,"DEF = ",`${leftDEF.value}`,"⭐ <br/>");

			textadd(disp,"FATK = ",`${leftFATK.value}`,"⭐ <br/>");

			textadd(disp,"FDEF = ",`${leftFDEF.value}`,"⭐ <br/>");

			textadd(disp,"NO = ",`${leftNO.value}`,"⭐ <br/>");

			textadd(disp,"<br/>","Right Unit <br/>","");

			textadd(disp,"Starting HP = ",`${rightstarthp[0].value}`,"% <br/>");

			textadd(disp,"Type = ",`${rightTYPE.value}`,"<br/>");

			textadd(disp,"HP = ",`${rightHP.value}`,"⭐ <br/>");

			textadd(disp,"ATK = ",`${rightATK.value}`,"⭐ <br/>");

			textadd(disp,"DEF = ",`${rightDEF.value}`,"⭐ <br/>");

			textadd(disp,"FATK = ",`${rightFATK.value}`,"⭐ <br/>");

			textadd(disp,"FDEF = ",`${rightFDEF.value}`,"⭐ <br/>");

			textadd(disp,"NO = ",`${rightNO.value}`,"⭐ <br/>");

			textadd(disp,"<br/>HP Value = ",`${HPValue}`," per ⭐")
			textadd(disp,"<br/>ATK Value = ",`${ATKValue}`," per ⭐")
			textadd(disp,"<br/>DEF Value = ",`${DEFValue}`," per ⭐")
			textadd(disp,"<br/>FATK Value = ",`${FATKValue}`," per ⭐")
			textadd(disp,"<br/>FDEF Value = ",`${FDEFValue}`," per ⭐")
			textadd(disp,"<br/>NO Value = ",`${NOValue}`," per ⭐")
        };

        updateInput();

        update.addEventListener("click", (ev)=>{
        	updateInput();
        })

        fight.addEventListener("click", (ev)=>{
        	fightAI();
        })

        let triangleCheck = (Type1,Type2)=>{
        	let typeCheck;
        	switch(Type1) {
        		case "Sword":
        			if (Type2 === "Sword"){
        				typeCheck = 0
        			};

        			if (Type2 === "Spear"){
        				typeCheck = 1
        			};

        			if (Type2 === "Horse"){
        				typeCheck = -1
        			};

        			if (Type2 === "Other"){
        				typeCheck = 0
        			};
        			break;

        		case "Spear":
        			if (Type2 === "Sword"){
        				typeCheck = -1
        			};

        			if (Type2 === "Spear"){
        				typeCheck = 0
        			};

        			if (Type2 === "Horse"){
        				typeCheck = 1
        			};

        			if (Type2 === "Other"){
        				typeCheck = 0
        			};
        			break;

        		case "Horse":
        			if (Type2 === "Sword"){
        				typeCheck = 1
        			};

        			if (Type2 === "Spear"){
        				typeCheck = -1
        			};

        			if (Type2 === "Horse"){
        				typeCheck = 0
        			};

        			if (Type2 === "Other"){
        				typeCheck = 0
        			};
        			break;

        		case "Other":
        			typeCheck = 0
        			break;
        	};

        	return typeCheck;
        };

        let fight1v1 = (HP,THP,ATK,TDEF,NO,TNO,TYPE,TTYPE,CHP,TCHP)=>{

        	let typeCheck = triangleCheck(TYPE,TTYPE);   

        	let attack = (ATK * ATKValue) * (1 + counterMultiplier * typeCheck) * (1 + HPMultiplier * CHP/100);

        	let defense = (TDEF * DEFValue) * (1 + HPMultiplier * TCHP/100);

        	let damage = attack - defense * defenseMultiplier;

        	let healthDecrease = TCHP * (THP * HPValue) * (TNO * NOValue) / 100 - damage;

        	let outputHealth = healthDecrease * 100 / ((THP * HPValue) * (TNO * NOValue));

        	console.log(`attack = ${attack}`);

        	console.log(`defense = ${defense}`);

        	console.log(`healthDecrease = ${healthDecrease}`);

        	console.log(`outputHealth = ${outputHealth}`);

        	return outputHealth;

        };

        let fightAI = ()=>{
        	let rightdamage = fight1v1(leftHP.value,rightHP.value,leftATK.value,rightDEF.value,
        		leftNO.value,rightNO.value,leftTYPE.value,rightTYPE.value,leftCurrentHP,
        		rightCurrentHP);

        	let leftdamage = fight1v1(rightHP.value,leftHP.value,rightATK.value,leftDEF.value,
        		rightNO.value,leftNO.value,rightTYPE.value,leftTYPE.value,rightCurrentHP,
        		leftCurrentHP);

        	disp.innerHTML = `Left Unit HP remaining<br/>`

        	textadd(disp,`HP: `,`${leftdamage}`,"%<br/>");

        	textadd(disp,``,`Right Unit HP remaining`,"<br/>");

        	textadd(disp,`HP: `,`${rightdamage}`,"%<br/>");
        	
        };

	}

);