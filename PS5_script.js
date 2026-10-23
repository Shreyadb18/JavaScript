let companies = ["Apple", "Google", "Microsoft", "Amazon"];
companies.shift();
console.log(companies); 

companies.splice(2, 0, "Facebook");
console.log(companies);

companies.push("Netflix");
console.log(companies);