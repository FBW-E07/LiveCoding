function getCurrency(country) {
  let currency = ""
  switch (country) {
    case "Germany":
    case "France":
      currency = "€"
    break

    case "UK": 
      currency = "£"
    break

    case "Denmark":
       currency = "Kr"
    break

    default: 
       currency = getNationalDollar(country)
    
  }

  return currency
}


function getNationalDollar(country) {
  switch (country) {
    case "Australia": return "A$"
    case "Canada": return "CA$"
    case "USA": return "US$"
    case "Singapore": return "S$"
  }
}



console.log("getCurrency('Canada'):", getCurrency('Canada'))

console.log("data:", data)