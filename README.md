# racecenter

Gives a better view of all riders in the peloton at Dauphine/TDF racecenter page/
For example
https://twitter.com/velofacts/status/1400448188637605895/photo/1

Run the script in app.js on the javascript console of your browser at
https://racecenter.criterium-du-dauphine.fr/en

Information on where to find the script console here
https://webmasters.stackexchange.com/questions/8525/how-do-i-open-the-javascript-console-in-different-browsers

You can tweak the variables at the top of the script.

A gap larger than [min_gap] seconds creates a new group

Riders slower than [max_slow_speed] km/h will be marked black

Riders with bib numbers in [gc] will be marked yellow (gc contenders).
Riders with bib numbers in [green] will be marked green (sprinters).
Start end end these lists also with a comma. For example: ",1,51,61,81,"

Click on a team jersey to switch to mark the team members. Click again to reset

It can be difficult to see if riders are on their spare bike and the data comes from the bike on the car

Live data probably starts when tv coverage starts. 
