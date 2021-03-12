       //I know the code is a mess
                var dirty = ["Bad", "Immoral", "Inexcusable", "Terrible", "Flawed", "Filthy", "Dreadful", "Awful", "heinous", "Regrettable", "Evil", "Inferior", "Inadequate", "Atrocious", "Imperfect", "Unpleasant", "Adverse", "Ruinous", "Harmful", "Hurtful", "Sinful", "Villainous", "Dishonest", "Amoral", "Nefarious", "Wicked", "Depraved", "Unscrupulous", "Unprincipled", "Corrupt", "Dastardly", "Iniquitous", "Profane", "Indecent", "Improper", "Indecorous", "Foul", "Detrimental", "Grimy"];
		var deeds = ["actions", "acts", "accomplishments", "jobs"];
		var done = ["preformed at a", "done at a", "executed at a", "done with a", "preformed with a", "made with a", "at a", "with a", "completed at a", "completed with a", "preformed for a", "done for a", "executed for a", "done for a", "preformed with a", "made with a", "at a", "with a", "completed at a", "completed with a", "preformed for a", "done for a", "executed for a", "done for a", "preformed for a", "made for a", "for a", "completed for a"];
		var dirt = ["low", "fair", "reasonable", "curtailed"];
		var cheap = ["price", "cost", "value", "amount", "expense", "discount"];
		
		var dirt2 = ["inexpensive", "affordable"];
		var done2 = ["preformed at an", "done at an", "executed at an", "done with an", "preformed with an", "made with an", "at an", "with an", "completed at an", "completed with an", "preformed for a", "done for a", "executed for a", "done for a", "preformed with a", "made with a", "at a", "with a", "completed at a", "completed with a", "preformed for an", "done for an", "executed for an", "done for an", "preformed for an", "made for an", "for an", "completed for an"];
		
		const randomNumber1 = Math.floor(Math.random() * dirty.length);
		const randomNumber2 = Math.floor(Math.random() * deeds.length);
		const randomNumber3 = Math.floor(Math.random() * done.length);
		const randomNumber4 = Math.floor(Math.random() * dirt.length);
		const randomNumber5 = Math.floor(Math.random() * cheap.length);
		
		const randomNumber32 = Math.floor(Math.random() * done2.length);
		const randomNumber42 = Math.floor(Math.random() * dirt2.length);
		
		
		
		var Filthy = dirty[randomNumber1];
		var Acts = deeds[randomNumber2];
		var AtA = done[randomNumber3];
		var Reasonable = dirt[randomNumber4];
		var Price = cheap[randomNumber5];
		
		var AtA2 = done2[randomNumber32];
		var Reasonable2 = dirt2[randomNumber42];
		
		var FilthyActsAtAReasonablePrice1 = Filthy + " " + Acts + " " + AtA + " " + Reasonable + " " + Price;
		var FilthyActsAtAReasonablePrice2 = Filthy + " " + Acts + " " + AtA2 + " " + Reasonable2 + " " + Price;
                
		
		var FilthyActsAtAReasonablePrice3 = [FilthyActsAtAReasonablePrice1, FilthyActsAtAReasonablePrice2];
              
		
		const randomNumber = Math.floor(Math.random() * FilthyActsAtAReasonablePrice3.length);
	

		var FilthyActsAtAReasonablePrice = FilthyActsAtAReasonablePrice3[randomNumber];
                
        
                function countWords(str) {
                    return str.trim().split(/\s+/).length;
                 }


                var D = Filthy.charAt(0);
                var four = countWords(FilthyActsAtAReasonablePrice) -1;
                var C2 = Price.charAt(0);

                var C = C2.toUpperCase();

                var D4C = D + four + C;
               
