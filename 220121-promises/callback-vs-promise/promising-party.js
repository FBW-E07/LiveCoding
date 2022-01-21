/** 
 * promising-party.js
*/




const partyPlan = {}

new Promise(getThePartyStarted)
.then(() => new Promise(chooseTheme))
.then( theme => {
  partyPlan.theme = theme
  return new Promise(chooseVenue)
})
.then( venue => {
  partyPlan.venue = venue
  return new Promise(chooseDate)
})
.then( date => {
  partyPlan.date = date
  sendInvitations(partyPlan)
})
.catch( reason => console.log(reason))















// UTILITY FUNCTION // UTILITY FUNCTION // UTILITY FUNCTION //

function random(max) {
  return Math.ceil(Math.random() * max)
}





// RESOLVER FUNCTIONS // RESOLVER FUNCTIONS // RESOLVER FUNCTIONS //

function getThePartyStarted(resolve, reject){
  const decisionTime = random(100)

  setTimeout(() => {
      const rejectionCount = 98 + random(10)
      if (rejectionCount < 100) {
        reject("Can't start the party with less that 100 rejections")
    
      } else {
        resolve()
      }
    },

    decisionTime
  )
}


function chooseTheme(resolve, reject) {
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

    if (theme) {
      resolve(theme)

    } else {
      reject("Failure to choose a theme")
    }

  }, decisionTime)
}



function chooseVenue(resolve, reject) {
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

    if (venue) {
      resolve(venue)

    } else {
      reject("Failure to choose a venue")
    }

  }, decisionTime)
}


function chooseDate(resolve, reject) {
  let counter = 5
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

  if (date) {
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

    resolve(`${weekday}, ${date.getDate()} ${month}, 2022`)

  } else {
    reject("Unable to find a good date")
  }
}







function sendInvitations(partyPlan) {
  const { theme, venue, date } = partyPlan

  console.log(`
  You are cordially invited to a Rejection Party
  with the theme "${theme}"
  to be held at ${venue}
  at 8 p.m. on ${date}.

  Kudos for continuing to chase your dreams!
  `)
}