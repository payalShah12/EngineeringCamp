window.onload=()=>{
    const inventors = [ 
        { first : 'Albert', last : 'Einstein' , year : 1879, passed : 1955},
        { first : 'Isaac' , last : 'Newton', year : 1643 , passed : 1727},
        { first : 'Galileo' , last : 'Galilei', year : 1564 , passed : 1642},
        { first : 'Marie' , last : 'Curie', year : 1867, passed : 1934 },
        { first : 'Johannes' , last : 'Kepler', year : 1571, passed : 1630},
        { first : 'Nicolaus' , last : 'Copernicus', year : 1473, passed : 1543},
        { first : 'Max' , last : 'Plank', year : 1858, passed : 1947},     
    ];
    const fifteen = inventors.filter(inventor => (inventor.year >=1500 && inventor.year < 1600));
    console.table(fifteen);
    const fullName=inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(fullName);
    const ordered=inventors.sort((a,b)=> a.year > b.year ? 1 : -1);
    console.table(ordered);
   const totalYears= inventors.reduce((total,inventor) =>{
       return (total + inventor.passed - inventor.year);
   },0);
   console.log("Reduce : " + totalYears);
   const oldest = inventors.sort(function(a,b){
       const last = a.passed -a.year;
       const next = b.passed- b.year;
       return last > next ? -1 : 1;
   });
   console.table(oldest);
}
    

