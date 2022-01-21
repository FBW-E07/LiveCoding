# Planning a Rejection Party

**A comparison of using callbacks and promises for dealing with a series asynchronous function calls.**



---

The DeCIders are planning another [Rejection Party](https://www.theatlantic.com/family/archive/2022/01/celebrate-your-rejections-failures/621327/). They do this every time their members receive a total of 100 rejections between them.

All kinds of rejections are valid: being dropped from a sports team, having a manuscript refused by a publisher, job interviews that don't lead to a job offer, romantic break-ups, not getting a callback from an audition, ...

Organizing a party requires several steps:

1. Waiting until 100 rejections have been duly recorded in a spreadsheet
2. Choosing a theme for the party
3. Finding a venue
4. Choosing the date that suits most members
5. Sending out the invitations.


The scripts `doomed-party.js` and `promising-party.js` model this process either with a pyramid of doom / callback hell or with promises.

Steps 1 to 4 above are not guaranteed to succeed. When you run... 

```bash
node doomed-party.js
```
... or...

```bash
node promising-party.js
```
... you may see a successful output, such as...

```
  You are cordially invited to a Rejection Party
  with the theme "Get Down"
  to be held at Bavarian Loft in Munich
  at 8 p.m. on Friday, 6 May, 2022.

  Kudos for continuing to chase your dreams!
```

... or an unsuccesful output, such as:

```
Can't start the party with less that 100 rejections
```

**Compare the core chunk of code (lines 10 - 33) in each script. Which script is easier to read?**

**Compare the resolver functions in `promising-party.js` with the callback functions in `doomed-party.js`. How do you find the `resolve/reject` syntax compared to the `callback(error, value)` synax?**