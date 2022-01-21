/**
 * doomed-party.js
 */




const partyPlan = {}

getThePartyStarted((error, ready) => {
  if (error) {
    return console.log("error:", error)
  }
  chooseTheme((error, theme) => { 
    if (error) {
      return console.log("error:", error)
    }
    partyPlan.theme = theme
    chooseVenue((error, venue) => { 
      if (error) {
        return console.log("error:", error)
      }
      partyPlan.venue = venue    
      chooseDate((error, date) => { 
        if (error) {
          return console.log("error:", error)
        }
        partyPlan.date = date      
        sendInvitations(partyPlan)
      })
    })
  })
})






// UTILITY FUNCTION // UTILITY FUNCTION // UTILITY FUNCTION //

function random(max) {
  return Math.ceil(Math.random() * max)
}





// FUNCTIONS WITH CALLBACKS // FUNCTIONS WITH CALLBACKS //

function getThePartyStarted(callback) {
  const decisionTime = random(100)

  setTimeout(() => {
      const rejectionCount = 98 + random(10)
      const ready = rejectionCount > 99
      const error = ready
                  ? null
                  : "Can't start the party with less that 100 rejections."

      callback(error, ready)
    },

    decisionTime
  )
}


function chooseTheme(callback) {
  const decisionTime = random(100)

  setTimeout(() => {
    const themes = [
      "Pink Slip",
      "Super Zeros",
      "Shot Star",
      "Peaked",
      "Fake it till you make it",
      "Get Down",
      "Foot in the Door"
    ]

    const theme = themes[random(themes.length)] // may be undefined

    const error = theme ? null : "Failure to choose a theme"

    callback(error, theme)

  }, decisionTime)
}




function chooseVenue(callback) {
  const decisionTime = random(100)

  setTimeout(() => {
    const venues = [
      "Kochlabor in Hamburg",
      "Altonaer Fischauktionshalle in Hamburg",
      "The Grand in Berlin",
      "Soho House in Berlin",
      "Bavarian Loft in Munich",
      "Upside East in Munich",
    ]
    
    const venue = venues[random(venues.length)] // may be undefined

    const error = venue ? null : "Failure to find a venue"

    callback(error, venue)
  }, decisionTime)
}




function chooseDate(callback) {
  let counter = 5
  let error
  let date

  while (!date && counter--) {
    let month = random(12)
    let day = random(31)
    if (month < 10) {
      month = "0" + month
    }
    if (day < 10) {
      day = "0" + day
    }
    date = new Date(`2022-${month}-${day}`)

    // Reject dates in the past or not on a Friday or Saturday
    if (date < new Date() || date.getDay() < 5) {
      date = undefined // keep looking
    }
  }

  if (!date) {
    error = "Unable to find a suitable date"

  } else {
    const year = date.getFullYear()
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][date.getMonth()]
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ][date.getDay()]

    date = `${weekday}, ${date.getDate()} ${month}, 2022`
  }

  callback(error, date)
}




function sendInvitations(partyPlan) {
  const { theme, venue, date } = partyPlan

  console.log(`
  You are cordially invited to a Rejection Party
  with the theme "${theme}"
  to be held at ${venue}
  at 8 p.m. on ${date}.

  Kudos for continuing to chase your dreams!
  `
  )
}